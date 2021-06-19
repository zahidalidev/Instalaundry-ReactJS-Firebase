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
    return await axios.post('http://localhost:5000/api/pay', { email: email, price: price });
}

export const paySubscription = async (result, email, stripSubscriptionId) => {
    return await axios.post('http://localhost:5000/api/sub', { 'payment_method': result.paymentMethod.id, 'email': email, 'stripSubscriptionId': stripSubscriptionId });
}

export const addPlan = async (body) => {
    return await planRef.add(body);
}
