import React, { useState } from 'react';
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';

import { Colors } from "../config/Colors"
import "./Services.css"


function Services(props) {
    const cards = [
        {
            title: "Pickup",
            description: "Schedule a pick up at your convience and our staff will ensure a safe contactless pickup/drop off. All you need to do is place your laundry hamper (provided by us) by your door step at the scheduled pick up time",
            icon: "fa-truck",
        },
        {
            title: "Wash & Dry",
            description: "Using eco friendly graded detergents, Our team will sort and wash each indivudal load with care. Your clothes will never be cleaned with items belonging to others.",
            icon: "material",
        },
        {
            title: "Fold",
            description: "Our specially trained staff will wash, dry, and fold your clothes! We want to take a load off of your shoulders so you can devote your time on what matters.",
            icon: "fa-tshirt",
        },
        {
            title: "Deliver",
            description: "Our specially trained staff will wash, dry, and fold your clothes! We want to take a load off of your shoulders so you can devote your time on what matters.",
            icon: "fa-people-carry",
        }
    ]

    return (
        <div className="container-fluid pt-5 pb-3">
            <div className="container">
                <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">Our Services</h6>
                <h1 className="display-4 text-center mb-5">What We Offer</h1>
                <div className="row" >
                    {cards.map((card, index) =>
                        <div key={index} style={{ height: "20.25rem" }} className="card-container col-lg-3 col-md-6 pb-1">
                            <div className="card" >
                                <div className="front d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4" style={{ height: "18.75rem", width: "16rem" }}>
                                    <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4" style={{ width: "6.25rem", height: "6.25rem" }}>
                                        {card.icon !== "material" ?
                                            <i className={`fas ${card.icon} fas fa-3x text-secondary`}></i>
                                            :
                                            <LocalLaundryServiceIcon style={{ fontSize: "3.5rem" }} className="fas fa-3x fas fa-soap text-secondary" />
                                        }
                                    </div>
                                    <h4 className="font-weight-bold m-0">{card.title}</h4>
                                </div>
                                <div className="back d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4" style={{ height: "18.75rem", width: "15rem" }}>
                                    <div className="d-flex" style={{ color: Colors.grey, textAlign: "left" }}>
                                        <p> {card.description}</p>
                                    </div>
                                    <h4 className="font-weight-bold m-0">{card.title}</h4>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
}

export default Services;