import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

// Compoentns
import Breadcrumbs from '../../components/common/Breadcrumbs';
import MyTextFeild from "../../components/common/MyTextFeild"
import SubscriptionCard from '../../components/SubscriptionCard';

// config
import { Colors } from '../../config/Colors';

//services
import { getAllUserSubscriptions, updateUser, deleteSubscriptionPlan, updatPickupInfo, getAllUsers, getAllSubscription, getAllPostalCodes } from '../../services/UserServices';


const userColumns = [
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'contactNumber', headerName: 'Contact', width: 180 },
    { field: 'email', headerName: 'Email', width: 300 },
];

const postalColumns = [
    { field: 'code', headerName: 'Postal Code', width: 180 },
];


function Profile(props) {

    const [showComponent, setShowComponent] = useState("information")
    const [currentUserId, setCurrentUserId] = useState('');
    const [loading, setLoading] = useState(false);

    const [subscription, setSubscription] = useState([])

    const [users, setAllUsers] = useState([]);

    const [postalCodes, setPostalCodes] = useState([]);

    const [userInfo, setUserinfo] = useState([
        {
            title: 'Full Name',
            value: ''
        },
        {
            title: 'Email',
            value: ''
        },
        {
            title: 'Contact Number',
            value: ''
        },
        {
            title: 'Password',
            value: ''
        },
    ])

    const handleGetAllUsers = async () => {
        try {
            let res = await getAllUsers()
            if (res) {
                setAllUsers(res)
            } else {
                setAllUsers([])
            }
        } catch (error) {
            console.log("getting all users error: ", error)
        }
    }

    const handleGetAllSubscription = async () => {
        setLoading(true)
        try {
            let res = await getAllSubscription()
            if (res) {
                setSubscription(res)
            } else {
                setSubscription([])
            }
        } catch (error) {
            console.log("getting all users error: ", error)
        }
        setLoading(false)
    }

    const handlePostalCodes = async () => {
        try {
            let res = await getAllPostalCodes()
            if (res) {
                setPostalCodes(res)
            } else {
                setPostalCodes([])
            }
        } catch (error) {
            console.log("getting all users error: ", error)
        }
    }

    const getCurrentUserinfo = () => {
        const tempInfo = [...userInfo];

        try {
            let currentUser = localStorage.getItem('token');
            if (currentUser) {
                currentUser = JSON.parse(currentUser)
            }
            tempInfo[0].value = currentUser.name
            tempInfo[1].value = currentUser.email
            tempInfo[2].value = currentUser.contactNumber
            tempInfo[3].value = currentUser.password
            setCurrentUserId(currentUser.id)
            setUserinfo(tempInfo)

        } catch (error) {
            console.log("Getting Info Error: ", error)
        }
    }

    const handleUserInfo = async (index, value) => {
        const tempInfo = [...userInfo];
        tempInfo[index].value = value;
        setUserinfo(tempInfo)
    }


    useEffect(() => {
        getCurrentUserinfo()
    }, [])

    // updating user
    const handleUpdate = async () => {
        const body = {
            name: userInfo[0].value,
            email: userInfo[1].value,
            contactNumber: userInfo[2].value,
            password: userInfo[3].value
        }

        try {
            let res = await updateUser(currentUserId, body);
            localStorage.removeItem('token');
            localStorage.setItem('token', JSON.stringify(res));
        } catch (error) {
            console.log("user profile update errr: ", error)
        }
    }

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
                                <div onClick={() => {
                                    setShowComponent('users')
                                    handleGetAllUsers()
                                }} style={{ cursor: "pointer", backgroundColor: showComponent === "users" ? Colors.primaryTrans : null, borderBottom: "1px solid white", }} className="row d-flex flex-row align-items-center p-2 justify-content-center" >
                                    <p style={{ marginTop: "1rem" }} className="" >All Users</p>
                                </div>
                                <div onClick={() => {
                                    handleGetAllSubscription()
                                    setShowComponent('subscriptions');
                                }} style={{ cursor: "pointer", backgroundColor: showComponent === "subscriptions" ? Colors.primaryTrans : null, borderBottom: "1px solid white", }} className="row d-flex flex-row align-items-center p-2 justify-content-center" >
                                    <p style={{ marginTop: "1rem" }} className="" >All Subscriptions</p>
                                </div>
                                <div onClick={() => {
                                    setShowComponent('postalCodes')
                                    handlePostalCodes()
                                }} style={{ cursor: "pointer", backgroundColor: showComponent === "postalCodes" ? Colors.primaryTrans : null, borderBottom: "1px solid white", }} className="row d-flex flex-row align-items-center p-2 justify-content-center" >
                                    <p style={{ marginTop: "1rem" }} className="" >Postal Codes</p>
                                </div>
                            </div>


                            {showComponent === "information" ?

                                <div style={{ overflow: "scroll", border: "1px solid grey", borderBottomRightRadius: 10, borderTopRightRadius: 10, backgroundColor: Colors.white }} className="d-flex flex-column justify-content-start col-md-8" >
                                    <div style={{ marginTop: "2rem" }} className="row d-flex flex-row align-items-center p-2 justify-content-center" >
                                        <h3 style={{ fontSize: "2rem" }} >Peronal Infomation</h3>
                                    </div>

                                    <div className="row d-flex flex-row justify-content-md-center" >
                                        <div className="col-md-12 d-flex justify-content-center align-self-center" style={{ flexDirection: "column", height: 300, flex: 1, justifyContent: "center", alignItems: "center" }}  >

                                            <div style={{ marginTop: '10rem', width: "100%" }} className="row">
                                            </div>

                                            {
                                                userInfo.map((user, index) =>
                                                    <div key={index} style={{ marginTop: '2rem', width: '100%' }}>
                                                        <MyTextFeild
                                                            width={'78%'}
                                                            label={user.title}
                                                            value={user.value}
                                                            onChange={(value) => handleUserInfo(index, value)}
                                                        />
                                                    </div>
                                                )
                                            }

                                            <Button
                                                onClick={() => handleUpdate()}
                                                style={{
                                                    backgroundColor: Colors.secondary,
                                                    color: Colors.white,
                                                }}
                                                className="btn btn-primary py-md-2 px-md-4 mt-4"
                                                variant="contained"
                                            >
                                                Update
                                            </Button>
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
                                        {loading ?
                                            <div className="container-fluid">
                                                <div
                                                    className="d-flex justify-content-center align-items-center"
                                                    style={{ height: '30rem' }}
                                                >
                                                    <CircularProgress disableShrink />
                                                </div>
                                            </div> :
                                            <div className="row d-flex flex-row justify-content-md-start" >
                                                {subscription.map((sub, index) =>
                                                    <div key={index} className="col-md-6 d-flex justify-content-center" style={{ marginTop: "2rem", flexDirection: "column", flex: 1, justifyContent: "center", alignItems: "center" }}  >
                                                        <div style={{ width: "100%" }} >
                                                            <SubscriptionCard subscribedBy={sub.subscribedBy} packageName={sub.packageName} price={sub.price} />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>}
                                    </div> : null
                            }
                            {
                                showComponent === "users" ?
                                    <div className="d-flex flex-column justify-content-start col-md-8" >
                                        <div style={{ marginTop: "-0.5rem" }} className="row d-flex flex-row align-items-center p-1 justify-content-center" >
                                            <h3 style={{ fontSize: "2rem" }} >All Users</h3>
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