import React from 'react';

import MyTextFeild from "../../components/common/MyTextFeild"

// config
import { Colors } from '../../config/Colors';

function profile(props) {
    return (
        <div className="container-fluid"  >
            <div className="row d-flex flex-row text-center justify-content-md-center" >
                <div style={{ height: "40rem", marginTop: "2rem" }} className="justify-content-center align-items-center col-md-9" >
                    <div className="row d-flex flex-row  text-center text-white justify-content-center" >

                        <div style={{ borderBottomLeftRadius: 20, borderTopLeftRadius: 20, backgroundColor: Colors.secondary, height: "40rem" }} className="d-flex flex-column justify-content-start col-md-4" >
                            <div style={{ borderBottom: "1px solid white", marginTop: "1rem" }} className="row d-flex flex-row align-items-center p-2 justify-content-center" >
                                <p className="" >Personal Information</p>
                            </div>
                            <div style={{ borderBottom: "1px solid white", marginTop: "1rem" }} className="row d-flex flex-row align-items-center p-2 justify-content-center" >
                                <p className="" >Personal Information</p>
                            </div>
                        </div>

                        <div style={{ borderBottomRightRadius: 20, borderTopRightRadius: 20, backgroundColor: Colors.primary, height: "40rem" }} className="d-flex flex-column justify-content-start col-md-8" >
                            <div style={{ marginTop: "2rem" }} className="row d-flex flex-row align-items-center p-2 justify-content-center" >
                                <h3>Peronal Infomation</h3>
                            </div>

                            <div className="row d-flex flex-row justify-content-md-center" >
                                <div className="col-md-12 d-flex justify-content-center align-self-center" style={{ flexDirection: "column", height: 300, flex: 1, justifyContent: "center", alignItems: "center" }}  >
                                    <div className="container">
                                        <MyTextFeild width={"100%"} height={50} label="label" onChange={(value) => console.log(value)} value="" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default profile;