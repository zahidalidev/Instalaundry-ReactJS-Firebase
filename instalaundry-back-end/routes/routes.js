const express = require('express')
const app = express()
const cors = require('cors')
const stripe = require('stripe')('sk_test_51ISGFTLuBGwlYLhY7bog901ruBLlkTNA0yYaSdFcCIPy16swCvpQbDxovaLfDvYo4eJwseLwOIz40Auk2IqgXZBo00CK4D1bqf');


const router = express.Router();

router.post('/pay', async (req, res) => {
    const { email, price } = req.body;
    let intPrice = parseFloat(price)
    intPrice = intPrice * 100;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: intPrice,
        currency: 'usd',
        // Verify your integration in this guide by including this parameter
        metadata: { integration_check: 'accept_a_payment' },
        receipt_email: email,
    });

    res.json({ 'client_secret': paymentIntent['client_secret'] })
});

router.post('/sub', async (req, res) => {
    const { email, payment_method, stripSubscriptionId } = req.body;
    const customer = await stripe.customers.create({
        payment_method: payment_method,
        email: email,
        invoice_settings: {
            default_payment_method: payment_method,
        },
    });

    const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ plan: stripSubscriptionId }],
        expand: ['latest_invoice.payment_intent']
    });

    const status = subscription['latest_invoice']['payment_intent']['status']
    const client_secret = subscription['latest_invoice']['payment_intent']['client_secret']
    const new1 = subscription['latest_invoice'];
    console.log(new1.subscription)
    res.json({ 'client_secret': client_secret, 'status': status });

    // cancel
    // const da = await stripe.subscriptions.del('sub_Jh7cAvdRlaQL93');

    // const da = await stripe.subscriptions.retrieve('sub_Jh7Kd4Du9WNr8A'); //to get subscription
    // console.log(da)

    // res.send("hi")
})

module.exports = router;