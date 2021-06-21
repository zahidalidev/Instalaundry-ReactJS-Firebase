import firebase from "firebase"
import "firebase/firestore"

import { firebaseConfig } from "../config/db"

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

const firestore = firebase.firestore();

const userRef = firestore.collection('user')
const pickupInfoRef = firestore.collection('pickUpInfo')
const planRef = firestore.collection('subscriptionPlan')

export const addUser = async (body) => {
    return await userRef.add(body);
}

export const loginUser = async (email, password) => {
    const snapshot = await userRef.where('email', '==', email).where('password', '==', password).get();
    if (snapshot.empty) {
        return false;
    }

    let res = {}
    snapshot.forEach(doc => {
        res = doc.data()
        res.id = doc.id
    });

    return res

}

export const updateUser = async (id, userInfo) => {
    try {
        await userRef.doc(id).update(userInfo)
        return true;
    } catch (error) {
        return false
    }
}

export const subscribePlan = async (body) => {
    try {
        await planRef.add(body)
        return true;
    } catch (error) {
        return false
    }
}

// PickUp Info
export const addPickUpInfo = async (id, body) => {
    try {
        const snapshot = await pickupInfoRef.where('userId', '==', id).get();
        if (snapshot.empty) {
            await pickupInfoRef.add(body);
            return true;
        }

        let pickUpId = ''
        snapshot.forEach(doc => {
            pickUpId = doc.id
        });

        await pickupInfoRef.doc(pickUpId).update(body)
        return true;
    } catch (error) {
        return false;
    }

}


// return await userRef.where('name', "==", "zahid").onSnapshot((querySnapshot) => {
//     let groups = querySnapshot.docChanges().map(({ doc }) => {
//         const group = doc.data();
//         console.log(group);
//     })
// })