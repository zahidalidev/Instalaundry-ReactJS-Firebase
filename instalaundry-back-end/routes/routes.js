const express = require('express')
const app = express()
const cors = require('cors')

const stripe = require('stripe')('sk_test_51ISGFTLuBGwlYLhY7bog901ruBLlkTNA0yYaSdFcCIPy16swCvpQbDxovaLfDvYo4eJwseLwOIz40Auk2IqgXZBo00CK4D1bqf');


const router = express.Router();

router.get('/test', async (req, res) => {
    res.send(`Assalam o Alaikum`)
});

router.post('/pay', async (req, res) => {
    const { email, price } = req.body;
    let intPrice = parseFloat(price) * 100
    intPrice = intPrice.toFixed(2)
    intPrice = parseFloat(intPrice)
    console.log(intPrice)
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
    try {


        const { email, payment_method, stripSubscriptionId, coupon } = req.body;
        const customer = await stripe.customers.create({
            payment_method: payment_method,
            email: email,
            invoice_settings: {
                default_payment_method: payment_method,
            },
        });

        let subscription;
        if (coupon) {
            console.log("coupon: ", coupon)
            subscription = await stripe.subscriptions.create({
                customer: customer.id,
                items: [{ plan: stripSubscriptionId }],
                expand: ['latest_invoice.payment_intent'],
                coupon
            });
        } else {
            console.log("coupon: not ")
            subscription = await stripe.subscriptions.create({
                customer: customer.id,
                items: [{ plan: stripSubscriptionId }],
                expand: ['latest_invoice.payment_intent'],
            });
        }

        const status = subscription['latest_invoice']['payment_intent']['status']
        const client_secret = subscription['latest_invoice']['payment_intent']['client_secret']
        const new1 = subscription['latest_invoice'];
        res.json({ 'client_secret': client_secret, 'status': status, 'user_sub_id': new1.subscription, "latest_invoice": subscription['latest_invoice'] });

    } catch (error) {
        res.json({ 'fail': true, 'error': error })
    }
})

router.post('/cancel', async (req, res) => {
    try {
        const subscriptionId = req.body.subscriptionId;
        const da = await stripe.subscriptions.del(subscriptionId);
        res.send(da)
    } catch (error) {
        res.send(error)
    }
})


module.exports = router;