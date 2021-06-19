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

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        margin: '35vh auto',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'flex-start',
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
    const [email, setEmail] = useState('');

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmitPay = async (event) => {

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
                handleSubmitSub();
            }
        }
    };
    const handleSubmitSub = async (event) => {
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
            const res = await paySubscription(result, email, props.planDetails.planStripeId);
            // eslint-disable-next-line camelcase
            const { client_secret, status } = res.data;

            if (status === 'requires_action') {
                stripe.confirmCardPayment(client_secret).then(function (result) {
                    if (result.error) {
                        console.log('There was an issue!');
                        console.log(result.error);
                        // The card was declined (i.e. insufficient funds, card has expired, etc)
                    } else {
                        console.log('You got the money!');
                    }
                });
            } else {
                console.log('You got the money!');
            }
        }
    };

    const handleAllPayments = () => {
        let currentUser = JSON.parse(localStorage.getItem('token'));
        if (currentUser) {
            setEmail(currentUser.email);
            if (props.tipPrice == 0) {
                handleSubmitSub()
            } else {
                handleSubmitPay()
            }
        }

    }

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <TextField
                    label='Email'
                    id='outlined-email-input'
                    helperText={`Email you'll recive updates and receipts on`}
                    margin='normal'
                    variant='outlined'
                    type='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                />
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