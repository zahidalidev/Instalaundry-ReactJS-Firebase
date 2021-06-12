import React, { useState } from 'react';

import MyTextFeild from "../../components/common/MyTextFeild"
import SubscriptionCard from '../../components/SubscriptionCard';

// config
import { Colors } from '../../config/Colors';

function Profile(props) {

    const [showPersonal, setShowPersonal] = useState(false)

    const [subscription, setSubscription] = useState([
        {
            packageName: "Individual",
            price: "$9.99/Week"
        },
        {
            packageName: "Individual",
            price: "$9.99/Week"
        },
        {
            packageName: "Individual",
            price: "$9.99/Week"
        },
        {
            packageName: "Individual",
            price: "$9.99/Week"
        },
        {
            packageName: "Individual",
            price: "$9.99/Week"
        },
    ])

    return (
        <div className="container-fluid" style={{ marginTop: "-3rem", }}  >
            <div className="row d-flex flex-row text-center justify-content-md-center" >
                <div style={{ height: "40rem", marginTop: "7rem", marginBottom: "5rem" }} className="justify-content-center align-items-center col-md-9" >
                    <div className="row d-flex flex-row  text-center text-white justify-content-center" >

                        <div style={{ border: "1px solid grey", borderBottomLeftRadius: 10, borderTopLeftRadius: 10, backgroundColor: Colors.secondary, height: "40rem" }} className="d-flex flex-column justify-content-start col-md-4" >
                            <div onClick={() => setShowPersonal(true)} style={{ borderTopLeftRadius: 10, cursor: "pointer", backgroundColor: showPersonal ? Colors.primaryTrans : null, borderBottom: "1px solid white", }} className="row d-flex flex-row align-items-center p-2 justify-content-center" >
                                <p style={{ marginTop: "1rem" }} className="" >Personal Information</p>
                            </div>
                            <div onClick={() => setShowPersonal(false)} style={{ cursor: "pointer", backgroundColor: !showPersonal ? Colors.primaryTrans : null, borderBottom: "1px solid white", }} className="row d-flex flex-row align-items-center p-2 justify-content-center" >
                                <p style={{ marginTop: "1rem" }} className="" >My Subscriptions</p>
                            </div>
                        </div>


                        {showPersonal ?

                            <div style={{ border: "1px solid grey", borderBottomRightRadius: 10, borderTopRightRadius: 10, backgroundColor: Colors.white, height: "40rem" }} className="d-flex flex-column justify-content-start col-md-8" >
                                <div style={{ marginTop: "2rem" }} className="row d-flex flex-row align-items-center p-2 justify-content-center" >
                                    <h3 style={{ fontSize: "2rem" }} >Peronal Infomation</h3>
                                </div>

                                <div className="row d-flex flex-row justify-content-md-center" >
                                    <div className="col-md-12 d-flex justify-content-center align-self-center" style={{ flexDirection: "column", height: 300, flex: 1, justifyContent: "center", alignItems: "center" }}  >

                                        <div style={{ marginTop: "10rem" }} className="row">
                                            <div className="col-md-6">
                                                <MyTextFeild width={"100%"} label="First Name" onChange={(value) => console.log(value)} />
                                            </div>
                                            <div className="col-md-6">
                                                <MyTextFeild width={"100%"} label="Last Name" onChange={(value) => console.log(value)} />
                                            </div>
                                        </div>

                                        <div style={{ marginTop: '2rem', width: "100%" }} >
                                            <MyTextFeild width={"78%"} label="Email" onChange={(value) => console.log(value)} />
                                        </div>
                                        <div style={{ marginTop: '2rem', width: "100%" }} >
                                            <MyTextFeild width={"78%"} label="Contact Number" onChange={(value) => console.log(value)} />
                                        </div>
                                        <div style={{ marginTop: '2rem', width: "100%" }} >
                                            <MyTextFeild width={"78%"} label="Address" onChange={(value) => console.log(value)} />
                                        </div>
                                        <div style={{ marginTop: '2rem', width: "100%" }} >
                                            <MyTextFeild width={"78%"} label="Password" onChange={(value) => console.log(value)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div style={{ border: "1px solid grey", borderBottomRightRadius: 10, borderTopRightRadius: 10, backgroundColor: Colors.white, height: "40rem" }} className="d-flex flex-column justify-content-start col-md-8" >
                                <div style={{ marginTop: "2rem" }} className="row d-flex flex-row align-items-center p-1 justify-content-center" >
                                    <h3 style={{ fontSize: "2rem" }} >My Subscriptions</h3>
                                </div>
                                <div style={{ overflowY: 'auto', overflowX: "hidden" }} >
                                    {subscription.map((sub, index) =>
                                        <div key={index} style={{ marginTop: "2rem" }} className="row d-flex flex-row justify-content-md-center" >
                                            <div className="col-md-12 d-flex justify-content-center" style={{ flexDirection: "column", flex: 1, justifyContent: "center", alignItems: "center" }}  >
                                                <div style={{ width: "100%" }} >
                                                    <SubscriptionCard />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div >
    );
}

export default Profile;