import React from 'react';
import Button from '@material-ui/core/Button';

import { Colors } from '../config/Colors';
function SubscriptionCard({ packageName, price }) {
    return (
        <div className="container" style={{ borderRadius: 6, width: "25rem", height: "10rem", backgroundColor: Colors.secondaryTrans }} >
            <div style={{ paddingTop: "1rem", marginLeft: "1rem" }} className="d-flex flex-column justify-content-center align-items-start " >
                <div className="d-flex flex-row justify-content-start" >
                    <p style={{ fontSize: "1rem", color: Colors.white, marginRight: "1rem" }} >Package:</p>
                    <p style={{ fontSize: "1rem", color: Colors.white }} >{packageName}</p>
                </div>
                <div className="d-flex flex-row justify-content-start" >
                    <p style={{ fontSize: "1rem", color: Colors.white, marginRight: "1rem" }} >Price:</p>
                    <p style={{ fontSize: "1rem", color: Colors.white }} >{price}</p>
                </div>
                <Button style={{ width: "6rem" }} variant="contained" color="secondary">
                    Cancel
                </Button>
            </div>
        </div>
    );
}

export default SubscriptionCard;