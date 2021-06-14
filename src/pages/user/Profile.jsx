import React, { useState } from 'react';

import Breadcrumbs from '../../components/common/Breadcrumbs';
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
        <>
            <Breadcrumbs title="Profile" currentPage="Profile" previousPages={['Home']} />
            <div className="container-fluid" style={{ marginTop: "-3rem", }}  >
                <div className="row d-flex flex-row text-center justify-content-md-start" >
                    <div style={{ marginTop: "7rem", marginBottom: "5rem" }} className="justify-content-center align-items-center col-md-12" >
                        <div className="row d-flex flex-row text-start text-white justify-content-center" >

                            <div style={{ border: "1px solid grey", borderBottomLeftRadius: 10, borderTopLeftRadius: 10, backgroundColor: Colors.secondary, height: "40rem" }} className="d-flex flex-column justify-content-start col-md-3" >
                                <div onClick={() => setShowPersonal(true)} style={{ borderTopLeftRadius: 10, cursor: "pointer", backgroundColor: showPersonal ? Colors.primaryTrans : null, borderBottom: "1px solid white", }} className="row d-flex flex-row align-items-center p-2 justify-content-center" >
                                    <p style={{ marginTop: "1rem" }} className="" >Personal Information</p>
                                </div>
                                <div onClick={() => setShowPersonal(false)} style={{ cursor: "pointer", backgroundColor: !showPersonal ? Colors.primaryTrans : null, borderBottom: "1px solid white", }} className="row d-flex flex-row align-items-center p-2 justify-content-center" >
                                    <p style={{ marginTop: "1rem" }} className="" >My Subscriptions</p>
                                </div>
                            </div>


                            {showPersonal ?

                                <div style={{ border: "1px solid grey", borderBottomRightRadius: 10, borderTopRightRadius: 10, backgroundColor: Colors.white }} className="d-flex flex-column justify-content-start col-md-8" >
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
                                <div className="d-flex flex-column justify-content-start col-md-8" >
                                    <div style={{ marginTop: "-0.5rem" }} className="row d-flex flex-row align-items-center p-1 justify-content-center" >
                                        <h3 style={{ fontSize: "2rem" }} >My Subscriptions</h3>
                                    </div>
                                    <div className="row d-flex flex-row justify-content-md-start" >
                                        {subscription.map((sub, index) =>
                                            <div key={index} className="col-md-6 d-flex justify-content-center" style={{ marginTop: "2rem", flexDirection: "column", flex: 1, justifyContent: "center", alignItems: "center" }}  >
                                                <div style={{ width: "100%" }} >
                                                    <SubscriptionCard showCancelBtn={true} packageName={sub.packageName} price={sub.price} />
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
        </>
    );
}

export default Profile;