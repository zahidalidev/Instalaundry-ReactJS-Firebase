import firebase from "firebase"
import "firebase/firestore"

import { firebaseConfig } from "../config/db"

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

const firestore = firebase.firestore();

const planRef = firestore.collection('plan')

export const addPlan = async (body) => {
    return await planRef.add(body);
}

export const getPlans = async () => {
    const snapshot = await planRef.orderBy('id').get();
    if (snapshot.empty) {
        return false;
    }

    let res = []
    snapshot.forEach(doc => {
        res.push({ ...doc.data(), id: doc.id })
    });

    return res
}


// return await planRef.where('name', "==", "zahid").onSnapshot((querySnapshot) => {
//     let groups = querySnapshot.docChanges().map(({ doc }) => {
//         const group = doc.data();
//         console.log(group);
//     })
// })