import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

// Compoentns
import Breadcrumbs from '../../components/common/Breadcrumbs';
import MyTextFeild from "../../components/common/MyTextFeild"
import SubscriptionCard from '../../components/SubscriptionCard';

// config
import { Colors } from '../../config/Colors';

const userColumns = [
    { field: 'name', headerName: 'Name', width: 130 },
    {
        field: 'contactNumber',
        headerName: 'Contact',
        width: 160,
    },
    { field: 'email', headerName: 'Email', width: 180 },
    { field: 'address', headerName: 'Address', width: 200 },
];

const postalColumns = [
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'code', headerName: 'Postal Code', width: 180 },
];


function Profile(props) {

    const [showComponent, setShowComponent] = useState("information")

    const [subscription, setSubscription] = useState([
        {
            packageName: "Individual",
            price: "$9.99/Week",
            subscribedBy: "Zahid Ali"
        },
        {
            packageName: "Individual",
            price: "$9.99/Week",
            subscribedBy: "Zahid Ali"
        },
        {
            packageName: "Individual",
            price: "$9.99/Week",
            subscribedBy: "Zahid Ali"
        },
        {
            packageName: "Individual",
            price: "$9.99/Week",
            subscribedBy: "Zahid Ali"
        },
        {
            packageName: "Individual",
            price: "$9.99/Week",
            subscribedBy: "Zahid Ali"
        },
    ])

    const users = [
        { id: 1, name: 'Snow', contactNumber: '+923367088018', email: "m.zahidalidev@gmail.com", address: "Qasim Town GRW Punjab" },
        { id: 2, name: 'Lannister', contactNumber: '+923367088018', email: "m.zahidalidev@gmail.com", address: "Qasim Town GRW Punjab" },
        { id: 3, name: 'Lannister', contactNumber: '+923367088018', email: "m.zahidalidev@gmail.com", address: "Qasim Town GRW Punjab" },
        { id: 4, name: 'Stark', contactNumber: '+923367088018', email: "m.zahidalidev@gmail.com", address: "Qasim Town GRW Punjab" },
        { id: 5, name: 'Targaryen', contactNumber: '+923367088018', email: "m.zahidalidev@gmail.com", address: "Qasim Town GRW Punjab" },
        { id: 6, name: 'Melisandre', contactNumber: '+923367088018', email: "m.zahidalidev@gmail.com", address: "Qasim Town GRW Punjab" },
        { id: 7, name: 'Clifford', contactNumber: '+923367088018', email: "m.zahidalidev@gmail.com", address: "Qasim Town GRW Punjab" },
        { id: 8, name: 'Frances', contactNumber: '+923367088018', email: "m.zahidalidev@gmail.com", address: "Qasim Town GRW Punjab" },
        { id: 9, name: 'Roxie', contactNumber: '+923367088018', email: "m.zahidalidev@gmail.com", address: "Qasim Town GRW Punjab" },
    ];

    const postalCodes = [
        { id: 1, name: 'Lahore', code: "52250" },
        { id: 2, name: 'Gujranwala', code: "52250" },
        { id: 3, name: 'Lahore', code: "52250" },
        { id: 4, name: 'Gujranwaa', code: "52250" },
        { id: 5, name: 'Lahore', code: "52250" },
        { id: 6, name: 'Melisandre', code: "52250" },
        { id: 7, name: 'Lahore', code: "52250" },
        { id: 8, name: 'Frances', code: "52250" },
        { id: 9, name: 'Lahore', code: "52250" },
    ];

    return (
        <>
            <Breadcrumbs title="Admin" currentPage="Admin" previousPages={['Home']} />
            <div className="container-fluid" style={{ marginTop: "-3rem", }}  >
                <div className="row d-flex flex-row text-center justify-content-md-start" >
                    <div style={{ marginTop: "7rem", marginBottom: "5rem" }} className="justify-content-center align-items-center col-md-12" >
                        <div className="row d-flex flex-row text-start text-white justify-content-center" >

                            <div style={{ border: "1px solid grey", borderBottomLeftRadius: 10, borderTopLeftRadius: 10, backgroundColor: Colors.secondary, height: "40rem" }} className="d-flex flex-column justify-content-start col-md-3" >
                                <div onClick={() => setShowComponent('information')} style={{ borderTopLeftRadius: 10, cursor: "pointer", backgroundColor: showComponent === "information" ? Colors.primaryTrans : null, borderBottom: "1px solid white", }} className="row d-flex flex-row align-items-center p-2 justify-content-center" >
                                    <p style={{ marginTop: "1rem" }} className="" >Personal Information</p>
                                </div>
                                <div onClick={() => setShowComponent('users')} style={{ cursor: "pointer", backgroundColor: showComponent === "users" ? Colors.primaryTrans : null, borderBottom: "1px solid white", }} className="row d-flex flex-row align-items-center p-2 justify-content-center" >
                                    <p style={{ marginTop: "1rem" }} className="" >All Users</p>
                                </div>
                                <div onClick={() => setShowComponent('subscriptions')} style={{ cursor: "pointer", backgroundColor: showComponent === "subscriptions" ? Colors.primaryTrans : null, borderBottom: "1px solid white", }} className="row d-flex flex-row align-items-center p-2 justify-content-center" >
                                    <p style={{ marginTop: "1rem" }} className="" >All Subscriptions</p>
                                </div>
                                <div onClick={() => setShowComponent('postalCodes')} style={{ cursor: "pointer", backgroundColor: showComponent === "postalCodes" ? Colors.primaryTrans : null, borderBottom: "1px solid white", }} className="row d-flex flex-row align-items-center p-2 justify-content-center" >
                                    <p style={{ marginTop: "1rem" }} className="" >Postal Codes</p>
                                </div>
                                <div onClick={() => setShowComponent('testimonials')} style={{ cursor: "pointer", backgroundColor: showComponent === "testimonials" ? Colors.primaryTrans : null, borderBottom: "1px solid white", }} className="row d-flex flex-row align-items-center p-2 justify-content-center" >
                                    <p style={{ marginTop: "1rem" }} className="" >All Testimonials</p>
                                </div>
                            </div>


                            {showComponent === "information" ?

                                <div style={{ border: "1px solid grey", borderBottomRightRadius: 10, borderTopRightRadius: 10, backgroundColor: Colors.white }} className="d-flex flex-column justify-content-start col-md-8" >
                                    <div style={{ marginTop: "2rem" }} className="row d-flex flex-row align-items-center p-2 justify-content-center" >
                                        <h3 style={{ fontSize: "2rem" }} >Peronal Infomation</h3>
                                    </div>

                                    <div className="row d-flex flex-row justify-content-md-center" >
                                        <div className="col-md-12 d-flex justify-content-center align-self-center" style={{ flexDirection: "column", height: 300, flex: 1, justifyContent: "center", alignItems: "center" }}  >

                                            <div style={{ marginTop: "10rem", width: "82%" }} className="row">
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
                                null
                            }
                            {
                                showComponent === "subscriptions" ?
                                    <div className="d-flex flex-column justify-content-start col-md-8" >
                                        <div style={{ marginTop: "-0.5rem" }} className="row d-flex flex-row align-items-center p-1 justify-content-center" >
                                            <h3 style={{ fontSize: "2rem" }} >All Subscriptions</h3>
                                        </div>
                                        <div className="row d-flex flex-row justify-content-md-start" >
                                            {subscription.map((sub, index) =>
                                                <div key={index} className="col-md-6 d-flex justify-content-center" style={{ marginTop: "2rem", flexDirection: "column", flex: 1, justifyContent: "center", alignItems: "center" }}  >
                                                    <div style={{ width: "100%" }} >
                                                        <SubscriptionCard subscribedBy={sub.subscribedBy} packageName={sub.packageName} price={sub.price} />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div> : null
                            }
                            {
                                showComponent === "users" ?
                                    <div className="d-flex flex-column justify-content-start col-md-8" >
                                        <div style={{ marginTop: "-0.5rem" }} className="row d-flex flex-row align-items-center p-1 justify-content-center" >
                                            <h3 style={{ fontSize: "2rem" }} >All Subscriptions</h3>
                                        </div>
                                        <div style={{ marginTop: "2rem", marginLeft: "2vw", height: "35rem", width: '100%' }} className="row d-flex flex-row justify-content-md-start" >
                                            <DataGrid rows={users} columns={userColumns} pageSize={8} checkboxSelection={false} />
                                        </div>
                                    </div> : null
                            }
                            {
                                showComponent === "postalCodes" ?
                                    <div className="d-flex flex-column justify-content-start col-md-8" >
                                        <div style={{ marginTop: "-0.5rem" }} className="row d-flex flex-row align-items-center p-1 justify-content-center" >
                                            <h3 style={{ fontSize: "2rem" }} >Postal Codes</h3>
                                        </div>
                                        <div cassName="row d-flex flex-row" style={{ width: "100%" }} >
                                            <div style={{ marginTop: "2rem", marginLeft: "2vw", height: "30rem", width: '40%' }} className="justify-content-md-start" >
                                                <DataGrid rows={postalCodes} columns={postalColumns} pageSize={6} checkboxSelection={false} />
                                            </div>
                                            {/* <div style={{ marginTop: "2rem", height: "30rem", width: '40%' }} className="justify-content-md-start" >
                                                <DataGrid rows={postalCodes} columns={postalColumns} pageSize={6} checkboxSelection={false} />
                                            </div> */}
                                        </div>
                                    </div> : null
                            }
                            {
                                showComponent === "testimonials" ?
                                    <div className="d-flex flex-column justify-content-start col-md-8" >
                                        <div style={{ marginTop: "-0.5rem" }} className="row d-flex flex-row align-items-center p-1 justify-content-center" >
                                            <h3 style={{ fontSize: "2rem" }} >Testimonials</h3>
                                        </div>
                                        <div style={{ marginTop: "2rem", marginLeft: "2vw", height: "30rem", width: '40%' }} className="row d-flex flex-row justify-content-md-start" >
                                            {/* <DataGrid rows={users} columns={columns} pageSize={8} checkboxSelection={false} /> */}
                                        </div>
                                    </div> : null
                            }

                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Profile;