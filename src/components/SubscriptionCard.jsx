import React from 'react';
import Button from '@material-ui/core/Button';

import { Colors } from '../config/Colors';
function SubscriptionCard({ packageName, price, showCancelBtn = false, subscribedBy }) {
    return (
        <div className="container" style={{ borderRadius: 6, width: "25rem", height: showCancelBtn ? "10rem" : " 9rem", backgroundColor: Colors.secondary }} >
            <div style={{ paddingTop: "1rem", marginLeft: "1rem" }} className="d-flex flex-column justify-content-center align-items-start " >
                <div className="d-flex flex-row justify-content-start" >
                    <p style={{ fontSize: "1rem", color: Colors.white, marginRight: "1rem" }} >Package:</p>
                    <p style={{ fontSize: "1rem", color: Colors.white }} >{packageName}</p>
                </div>
                <div className="d-flex flex-row justify-content-start" >
                    <p style={{ fontSize: "1rem", color: Colors.white, marginRight: "1rem" }} >Price:</p>
                    <p style={{ fontSize: "1rem", color: Colors.white }} >{price}</p>
                </div>
                {showCancelBtn ?
                    <Button style={{ width: "6rem" }} variant="contained" color="secondary">
                        Cancel
                    </Button>
                    : <div className="d-flex flex-row justify-content-start" >
                        <p style={{ fontSize: "1rem", color: Colors.white, marginRight: "1rem" }} >Subscribed by:</p>
                        <p style={{ fontSize: "1rem", color: Colors.primary }} >{subscribedBy}</p>
                    </div>
                }
            </div>
        </div>
    );
}

export default SubscriptionCard;