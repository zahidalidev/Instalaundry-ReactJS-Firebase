const express = require('express')
const app = express()
const cors = require('cors')
const stripe = require('stripe')('sk_test_51ISGFTLuBGwlYLhY7bog901ruBLlkTNA0yYaSdFcCIPy16swCvpQbDxovaLfDvYo4eJwseLwOIz40Auk2IqgXZBo00CK4D1bqf');


const router = express.Router();

router.post('/', async (req, res, next) => {
    const { email } = req.body;
    console.log(email)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 500,
        currency: 'usd',
        // Verify your integration in this guide by including this parameter
        metadata: { integration_check: 'accept_a_payment' },
        receipt_email: email,
    });

    res.json({ 'client_secret': paymentIntent['client_secret'] })
});

module.exports = router;