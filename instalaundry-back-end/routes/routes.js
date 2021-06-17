const express = require('express');
const stripeLoader = require('stripe');

const router = express.Router();

const stripe = new stripeLoader("private key")

const charge = (token, amt) => {
    return stripe.charges.create({
        amount: amt * 100,
        currency: "usd",
        source: token,
        description: "statement Description"
    })
}

router.post('/', async (req, res, next) => {
    try {
        let data = await charge(req.body.token.id, req.body.amount);
        console.log(data);
        res.send("charged!")
    } catch (error) {
        console.log(error)
        res.status(500)
    }
});

module.exports = router;