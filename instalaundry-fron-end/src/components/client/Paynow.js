import React, { useState } from 'react';
// MUI Components
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
// stripe
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// Util imports
import { makeStyles } from '@material-ui/core/styles';
// Custom Components
import CardInput from './CardInput';
import { paySinglePayment, paySubscription } from '../../services/OrderServices';
import { subscribePlan, getSubscriptionDetails } from '../../services/UserServices';
import { toast } from 'react-toastify';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        margin: '35vh auto',
        marginTop: '0vh'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'flex-start',
        paddingTop: "4rem"
    },
    div: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'space-between',
    },
    button: {
        margin: '2em auto 1em',
    },
});

function HomePage(props) {
    const classes = useStyles();
    // State

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmitPay = async (email) => {

        if (!stripe || !elements) {
            return;
        }
        const res = await paySinglePayment(email, props.tipPrice);

        const clientSecret = res.data['client_secret'];

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    email: email,
                },
            },
        });

        if (result.error) {
            console.log(result.error.message);
        } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
                console.log('Money is in the bank!');
                handleSubmitSub(email);
            }
        }
    };

    const handleSubmitSub = async (email) => {
        if (!stripe || !elements) {
            return;
        }

        const result = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
            billing_details: {
                email: email,
            },
        });

        if (result.error) {
            console.log(result.error.message);
        } else {
            const res = await paySubscription(result, email, props.planDetails.planStripeId, props.coupen);
            // eslint-disable-next-line camelcase
            const { client_secret, status, user_sub_id } = res.data;

            if (status === 'requires_action') {
                stripe.confirmCardPayment(client_secret).then(function (result) {
                    if (result.error) {
                        console.log('There was an issue!');
                        console.log(result.error);
                        // The card was declined (i.e. insufficient funds, card has expired, etc)
                    } else {
                        console.log('You got the money!');
                        subscribePlanDb(user_sub_id)

                    }
                });
            } else {
                console.log('You got the money!');
                subscribePlanDb(user_sub_id)
            }
        }
    };

    const subscribePlanDb = async (user_sub_id) => {
        const body = {
            tip: props.extraTip,
            extraLbs: props.extraLbs,
            userSubId: user_sub_id,
            userId: props.planDetails.userId,
            planId: props.planDetails.planId,
        }

        try {
            let res = await subscribePlan(body)
            if (!res) {
                toast.error("Network Error, Contact the support")
            } else {

                let res2 = await getSubscriptionDetails(body.userId, body.tip, body.extraLbs, body.planId)
                toast.success("Payment Successfull")

            }

        } catch (error) {
            console.log("update user error: ", error)
        }
    }

    const handleAllPayments = () => {
        let currentUser = JSON.parse(localStorage.getItem('token'));
        if (currentUser) {
            if (props.onlyTip) {
                handleSinglePay(currentUser.email)
            } else if (props.tipPrice == 0) {
                handleSubmitSub(currentUser.email)
            } else {
                handleSubmitPay(currentUser.email)
            }
        }

    }


    const handleSinglePay = async (email) => {

        if (!stripe || !elements) {
            return;
        }
        const res = await paySinglePayment(email, props.tipPrice);

        const clientSecret = res.data['client_secret'];

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    email: email,
                },
            },
        });

        if (result.error) {
            console.log(result.error.message);
        } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
                console.log('Money is in the bank!');
                toast.success("Successfull")
            }
        }
    };

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <CardInput />
                <div className={classes.div}>
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleAllPayments}>
                        Pay Now
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default HomePage;