import axios from "axios";
import firebase from "firebase";
import "firebase/firestore";
import { random } from "lodash";

import { firebaseConfig } from "../config/db";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

const userRef = firestore.collection("user");
const pickupInfoRef = firestore.collection("pickUpInfo");
const planRef = firestore.collection("subscriptionPlan");
const pricingPlanRef = firestore.collection("plan");
const postalCodesRef = firestore.collection("postalCodes");
const forgerRef = firestore.collection("forgetCodes");

export const addUser = async (body) => {
  await userRef.add(body);
  return await loginUser(body.email, body.password);
};

export const getForegtCodes = async () => {
  const snapshot = await forgerRef.get();
  let users = [];
  snapshot.docs.map((doc, index) => {
    let temp = doc.data();
    let tempObj = {};
    tempObj.name = temp.code;
    users.push(tempObj);
  });
  return users;
};

export const generateCode = async (email) => {
  const snapshot = await userRef.where("email", "==", email).get();
  if (snapshot.empty) {
    return false;
  }

  let res = {};
  snapshot.forEach((doc) => {
    res = doc.data();
    res.id = doc.id;
  });

  if (res) {
    let code = `${random(0, 4)}${random(4, 8)}${random(7, 9)}${random(0, 8)}`;
    await forgerRef.add({ code });
    return code;
  }
};

export const varifyCode = async (code) => {
  let snapshot = await forgerRef.where("code", "==", code).get();
  if (snapshot.empty) {
    return false;
  }

  let res = {};
  snapshot.forEach((doc) => {
    res = doc.data();
    res.id = doc.id;
  });

  try {
    await forgerRef.doc(res.id).delete();
    return true;
  } catch (error) {
    return false;
  }
};

export const updateUserPassword = async (email, password) => {
  try {
    const snapshot = await userRef.where("email", "==", email).get();
    if (snapshot.empty) {
      return false;
    }

    let res = {};
    snapshot.forEach((doc) => {
      res = doc.data();
      res.id = doc.id;
    });

    await userRef.doc(res.id).update({ password });

    return true;
  } catch (error) {
    return false;
  }
};

export const loginUser = async (email, password) => {
  const snapshot = await userRef
    .where("email", "==", email)
    .where("password", "==", password)
    .get();
  if (snapshot.empty) {
    return false;
  }

  let res = {};
  snapshot.forEach((doc) => {
    res = doc.data();
    res.id = doc.id;
  });

  return res;
};

export const getAllUserSubscriptions = async (id) => {
  const snapshot = await planRef.where("userId", "==", id).get();

  if (snapshot.empty) {
    return false;
  }

  let res = [];
  snapshot.forEach((doc) => {
    let res1 = doc.data();
    res1.docId = doc.id;
    res.push(res1);
  });

  return res;
};

export const deleteSubscriptionPlan = async (id) => {
  try {
    await planRef.doc(id).delete();
    return true;
  } catch (error) {
    return false;
  }
};

export const updateUser = async (id, userInfo) => {
  try {
    await userRef.doc(id).update(userInfo);
    const snapshot = await userRef
      .where("email", "==", userInfo.email)
      .where("password", "==", userInfo.password)
      .get();
    if (snapshot.empty) {
      return false;
    }

    let res = {};
    snapshot.forEach((doc) => {
      res = doc.data();
      res.id = doc.id;
    });

    return res;
  } catch (error) {
    console.log("false: ", error, userInfo);
    return false;
  }
};

export const updatPickupInfo = async (id, body) => {
  try {
    const snapshot = await pickupInfoRef.where("userId", "==", id).get();
    if (snapshot.empty) {
      return false;
    }

    let pickUpId = [];
    snapshot.forEach((doc) => {
      pickUpId.push(doc.id);
    });

    for (let i = 0; i < pickUpId.length; i++) {
      await pickupInfoRef.doc(pickUpId[i]).update(body);
    }

    return true;
  } catch (error) {
    return false;
  }
};

const handleSubscribeEmail = async (pickUpObj, tip, extralbs) => {
  console.log("new email: ", pickUpObj, tip, extralbs);

  var data = {
    service_id: "service_siowrj7",
    template_id: "template_0vqf5uf",
    user_id: "user_ef7lljg2cLfLEVyVsoysv",
    template_params: {
      name: pickUpObj.name,
      email: pickUpObj.email,
      contactnumber: pickUpObj.contactNumber,
      streetAddress: pickUpObj.streetAddress,
      apartment: pickUpObj.apartment,
      postalCode: pickUpObj.postalCode,
      province: pickUpObj.province,
      countary: pickUpObj.countary,
      pickupDay: pickUpObj.pickupDay,
      extralbs,
      tip,
      subscriptionplan: pickUpObj.planName,
      subscriptionprice: pickUpObj.planPrice,
      subscriptiondate: new Date().toDateString(),
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

export const getSubscriptionDetails = async (userId, tip, extraLbs, planId) => {
  try {
    const snapshot = await pickupInfoRef.where("userId", "==", userId).get();

    let pickUpObj = {};
    snapshot.forEach((doc) => {
      pickUpObj = doc.data();
    });

    let sna = await userRef.doc(userId).get();
    pickUpObj = { ...sna.data(), ...pickUpObj };

    let pla = await pricingPlanRef.doc(planId).get();
    let plObj = pla.data();
    pickUpObj = {
      ...sna.data(),
      ...pickUpObj,
      planPrice: plObj.price,
      planName: plObj.name,
    };

    await handleSubscribeEmail(pickUpObj, tip, extraLbs);
  } catch (error) {
    console.log("Error email: ", error);
  }
};

export const subscribePlan = async (body) => {
  try {
    await planRef.add(body);
    return true;
  } catch (error) {
    return false;
  }
};

// PickUp Info
export const addPickUpInfo = async (id, body) => {
  try {
    const snapshot = await pickupInfoRef.where("userId", "==", id).get();
    if (snapshot.empty) {
      await pickupInfoRef.add(body);
      return true;
    }

    let pickUpId = "";
    snapshot.forEach((doc) => {
      pickUpId = doc.id;
    });

    await pickupInfoRef.doc(pickUpId).update(body);
    return true;
  } catch (error) {
    return false;
  }
};

export const getAllUsers = async () => {
  let users = [];
  const snapshot = await userRef.get();
  snapshot.docs.map((doc, index) => {
    let temp = doc.data();
    let tempObj = {};
    tempObj.name = temp.name;
    tempObj.contactNumber = temp.contactNumber;
    tempObj.email = temp.email;
    tempObj.id = index;
    users.push(tempObj);
  });

  return users;
};

export const getAllSubscription = async () => {
  let plans = [];
  const snapshot1 = await planRef.get();
  snapshot1.docs.map((doc, index) => {
    let temp = doc.data();
    plans.push(temp);
  });

  let pricingPlan = [];
  const snapshot2 = await pricingPlanRef.get();
  snapshot2.docs.map((doc, index) => {
    let temp = doc.data();
    temp.id = doc.id;
    pricingPlan.push(temp);
  });

  let users = [];
  const snapshot3 = await userRef.get();
  snapshot3.docs.map((doc, index) => {
    let temp = doc.data();
    temp.id = doc.id;
    users.push(temp);
  });

  let newPlans = [];
  for (let i = 0; i < plans.length; i++) {
    for (let j = 0; j < pricingPlan.length; j++) {
      if (plans[i].planId == pricingPlan[j].id) {
        let tempObj = {
          packageName: pricingPlan[j].name,
          price: pricingPlan[j].price,
          subscribedBy: "",
        };
        newPlans.push(tempObj);
      }
    }
  }

  for (let i = 0; i < plans.length; i++) {
    for (let j = 0; j < users.length; j++) {
      if (plans[i].userId == users[j].id) {
        newPlans[i].subscribedBy = users[j].name;
      }
    }
  }

  return newPlans;
};

export const getAllPostalCodes = async () => {
  let postalCodes = [];
  const snapshot = await postalCodesRef.get();
  snapshot.docs.map((doc, index) => {
    let temp = doc.data();
    temp.id = index;
    postalCodes.push(temp);
  });

  return postalCodes;
};
