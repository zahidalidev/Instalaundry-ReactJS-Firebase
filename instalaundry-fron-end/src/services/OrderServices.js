import firebase from "firebase"
import "firebase/firestore"
import axios from 'axios';


import { firebaseConfig } from "../config/db"

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

const firestore = firebase.firestore();

const planRef = firestore.collection('subscribedPlan')

export const paySinglePayment = async (email, price) => {
    return await axios.post('https://v3.instalaundry.ca/nodeapp/api/pay', { email: email, price: price });
}

export const paySubscription = async (result, email, stripSubscriptionId, coupon) => {
    return await axios.post('https://v3.instalaundry.ca/nodeapp/api/sub', { coupon: coupon, 'payment_method': result.paymentMethod.id, 'email': email, 'stripSubscriptionId': stripSubscriptionId });
}

export const addPlan = async (body) => {
    return await planRef.add(body);
}


export const cancelUserSub = async (id) => {
    return await axios.post('https://v3.instalaundry.ca/nodeapp/api/cancel', { subscriptionId: id });
}
