import React, { useState } from 'react';
// MUI Components
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from "react-router";


// stripe
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// Util imports
import { makeStyles } from '@material-ui/core/styles';
// Custom Components
import CardInput from './CardInput';
import { paySinglePayment, paySubscription } from '../../services/OrderServices';
import { subscribePlan, getSubscriptionDetails } from '../../services/UserServices';
import { toast } from 'react-toastify';
import axios from 'axios';

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

    const history = useHistory();

    // State

    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const handleSubmitPay = async (email) => {
        setLoading(true)
        let subRes = await handleSubmitSub(email);
        if (subRes) {

            if (!stripe || !elements) {
                setLoading(false)
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
                }
            }
        } else {
            toast.error('Something went wrong!')
        }
        setLoading(false)
    };

    const handleSubmitSub = async (email) => {
        try {


            if (!stripe || !elements) {
                return false;
            }
            setLoading(true)

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
                if (!res.data.fail) {
                    const { client_secret, status, user_sub_id, latest_invoice } = res.data;
                    console.log("client_secret: ", latest_invoice)

                    if (status === 'requires_action') {
                        stripe.confirmCardPayment(client_secret).then(function (result) {
                            if (result.error) {
                                console.log('Something went wrong!: ', result.error);
                                toast.error('Something went wrong!')
                                setLoading(false)
                                return false;
                                // The card was declined (i.e. insufficient funds, card has expired, etc)
                            } else {
                                console.log('You got the money!');
                                console.log("latest_invoice: ", latest_invoice)
                                subscribePlanDb(user_sub_id, latest_invoice.total, latest_invoice.subtotal)
                                setLoading(false)
                                return true;
                            }
                        });
                    } else {
                        console.log('You got the money!');
                        subscribePlanDb(user_sub_id, latest_invoice.total, latest_invoice.subtotal)
                        setLoading(false)
                        return true;
                    }
                } else {
                    setLoading(false)
                    return false;
                }

            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log("latest error: ", error)
            toast.error('Something went wrong!')
        }
        setLoading(false)
    };

    const subscribePlanDb = async (user_sub_id, total, subtotal) => {
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
                if (total != subtotal) {
                    let dis = 100 - Math.round((total / subtotal) * 100);
                    toast.success(`You Got ${dis}% Discount`)
                }
                history.push("/profile")
            }

        } catch (error) {
            console.log("update user error: ", error)
        }
    }

    const handleAllPayments = () => {

        let currentUser = JSON.parse(localStorage.getItem('token'));
        if (currentUser) {
            if (props.onlyTip) {
                handleSinglePay(currentUser.email, props.typeTip)
            } else if (props.tipPrice == 0) {
                handleSubmitSub(currentUser.email)
            } else {
                handleSubmitPay(currentUser.email)
            }
        }

    }


    const handleSinglePay = async (email, typeTip) => {

        if (!stripe || !elements) {
            return;
        }
        setLoading(true)
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
            //new navigation to profile page implimented here!
            if (result.paymentIntent.status === 'succeeded') {
                console.log('Money is in the bank!');
                toast.success("Payed Successfully")
                await handleEmailForExtra(typeTip)
                // history.push("/profile")//here
            }
        }
        setLoading(false)
    };


    const handleEmailForExtra = async (typeTip) => {
        let currentUser = localStorage.getItem("token");
        currentUser = JSON.parse(currentUser);
        var data = {
            service_id: "service_siowrj7",
            template_id: "template_0bvfsqc",
            user_id: "user_ef7lljg2cLfLEVyVsoysv",
            template_params: {
                message: `${typeTip} By ${currentUser.email}: Customer Email: ${currentUser.email}
            , Name: ${currentUser.name}, Contact Number: ${currentUser.contactNumber}, price: ${props.tipPrice}`,
                to_email: "instalaundary2@gmail.com",
            },
        };
        try {
            await axios.post(
                "https://api.emailjs.com/api/v1.0/email/send",
                JSON.stringify(data),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
        } catch (error) {
            console.log("error: ", error);
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
                {loading ?
                    <div className="d-flex align-items-center justify-content-center" >
                        <CircularProgress disableShrink />
                    </div>
                    : null}
            </CardContent>
        </Card>
    );
}

export default HomePage;