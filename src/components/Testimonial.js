import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import testimonial_1 from "../assets/img/testimonial-1.jpg"
import testimonial_2 from "../assets/img/testimonial-2.jpg"
import testimonial_3 from "../assets/img/testimonial-3.jpg"
import testimonial_4 from "../assets/img/testimonial-4.jpg"

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Testimonial(props) {
    const allTestimonials = [
        {
            id: 0,
            name: "Client Name",
            profession: "Profession",
            description: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor ipsum clita",
            image: testimonial_1,
        },
        {
            id: 1,
            name: "Client Name",
            profession: "Profession",
            description: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor ipsum clita",
            image: testimonial_2,
        },
        {
            id: 2,
            name: "Client Name",
            profession: "Profession",
            description: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor ipsum clita",
            image: testimonial_3,
        },
        {
            id: 3,
            name: "Client Name",
            profession: "Profession",
            description: "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor ipsum clita",
            image: testimonial_3,
        }
    ]
    return (

        <div style={{ marginLeft: -14, marginRight: -14, marginBottom: 100 }}>
            <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">Testimonial</h6>
            <h1 className="display-4 text-center mb-5">Our Clients Say</h1>
            <div style={{ marginLeft: 50, marginRight: 50, marginBottom: 100 }}>

                {/* Carousel */}
                <Carousel
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={props.deviceType}
                    itemClass="carousel-item-padding-40-px"
                >
                    {allTestimonials.map((client, i) => (
                        <div style={{ minWidth: "100%" }} className="col-md-4">
                            <img className="position-relative rounded-circle bg-white shadow mx-auto" src={client.image} style={{ display: "block", width: "100px", height: "100px", padding: "12px", marginBottom: "-50px", zIndex: 1 }} alt="" />
                            <div className="bg-light text-center p-4 pt-0">
                                <h5 className="font-weight-medium mt-5">{client.name}</h5>
                                <p className="text-muted font-italic">{client.profession}</p>
                                <p className="m-0">{client.description}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Testimonial;