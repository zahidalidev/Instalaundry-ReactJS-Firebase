import React, { useState } from 'react';
// import 'react-multi-carousel/lib/styles.css';
// import Carousel from "react-multi-carousel";
// import "../../node_modules/react-multi-carousel/lib/styles.css"
import testimonial_1 from "../assets/img/testimonial-1.jpg"
import testimonial_2 from "../assets/img/testimonial-2.jpg"
import testimonial_3 from "../assets/img/testimonial-3.jpg"
import testimonial_4 from "../assets/img/testimonial-4.jpg"

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
        slidesToSlide: 5 // optional, default to 1.
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 2 // optional, default to 1.
    },
    // mobile: {
    //     breakpoint: { max: 464, min: 0 },
    //     items: 3,
    //     slidesToSlide: 1 // optional, default to 1.
    // }
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
        }
    ]
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">Testimonial</h6>
                <h1 className="display-4 text-center mb-5">Our Clients Say</h1>
                <div className="owl-carousel row testimonial-carousel">

                    {allTestimonials.map((client, i) => (
                        <div className="testimonial-item col-md-4">
                            <img className="position-relative rounded-circle bg-white shadow mx-auto" src={client.image} style={{ display: "block", width: "100px", height: "100px", padding: "12px", marginBottom: "-50px", zIndex: 1 }} alt="" />
                            <div className="bg-light text-center p-4 pt-0">
                                <h5 className="font-weight-medium mt-5">{client.name}</h5>
                                <p className="text-muted font-italic">{client.profession}</p>
                                <p className="m-0">{client.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Testimonial;