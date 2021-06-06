import React, { useEffect, useState } from 'react';

// import "./Slider.css"

import img1 from "../assets/img/carousel-3.jpg"
import img2 from "../assets/img/carousel-1.jpg"
import img3 from "../assets/img/blog-1.jpg"

function Slider(props) {

    const imgArray = [
        { id: 0, img: img1 },
        { id: 1, img: img2 },
        { id: 2, img: img3 }
    ];
    const [currentImage, setCurrentImage] = useState(imgArray[0]);
    const [imgClass, setImgClass] = useState("w-100 imgClass");

    const handleImageNext = () => {

        let index = currentImage.id;
        console.log(currentImage.id)
        if (index >= 2) {
            setCurrentImage(imgArray[0])
        } else {
            setCurrentImage(imgArray[index + 1])
        }
    }
    const handleImagePrev = () => {
        let index = currentImage.id;
        if (index <= 0) {
            setCurrentImage(imgArray[2])
        } else {
            setCurrentImage(imgArray[index - 1])
        }
    }

    useEffect(() => {
        let interval = setInterval(() => handleImageNext(), 3000);

        return (() => {
            clearInterval(interval);
        })

    }, [])

    return (
        <>
            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img id="im" className={imgClass} src={currentImage.img} alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: "900rem" }}>
                                    <h4 className="text-white text-uppercase mb-md-3">Laundry & Dry Cleaning</h4>
                                    <h1 className="display-3 text-white mb-md-4">Best For Laundry Services</h1>
                                    <a className="btn btn-primary py-md-3 px-md-5 mt-2">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a onClick={handleImagePrev} className="carousel-control-prev" data-slide="prev">
                        <div className="btn btn-secondary" style={{ width: "3.5rem", height: "2.8rem" }}>
                            <span className="carousel-control-prev-icon mb-n2"></span>
                        </div>
                    </a>
                    <a onClick={handleImageNext} className="carousel-control-next" data-slide="next">
                        <div className="btn btn-secondary" style={{ width: "3.5rem", height: "2.8rem" }}>
                            <span className="carousel-control-next-icon mb-n2"></span>
                        </div>
                    </a>
                </div>
            </div>

            {/* <!-- Contact Info Start --> */}
            <div class="container-fluid contact-info mt-5 mb-4">
                <div class="container" style={{ paddingLeft: 0, paddingTop: "2rem" }}>
                    <div class="row">
                        <div class="col-md-4 d-flex align-items-center justify-content-center bg-secondary mb-4 mb-lg-0" style={{ height: "6.25rem" }}>
                            <div class="d-inline-flex">
                                <i class="fa fa-2x fa-envelope text-white m-0 mr-3"></i>
                                <div class="d-flex flex-column">
                                    <h5 class="text-white font-weight-medium">Our Location</h5>
                                    <p class="m-0 text-white">123 Street, New York, USA</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 d-flex align-items-center justify-content-center bg-primary mb-4 mb-lg-0" style={{ height: "6.25rem" }}>
                            <div class="d-inline-flex text-left">
                                <i class="fa fa-2x fa-envelope text-white m-0 mr-3"></i>
                                <div class="d-flex flex-column">
                                    <h5 class="text-white font-weight-medium">Email Us</h5>
                                    <p class="m-0 text-white">info@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 d-flex align-items-center justify-content-center bg-secondary mb-4 mb-lg-0" style={{ height: "6.25rem" }}>
                            <div class="d-inline-flex text-left">
                                <i class="fa fa-2x fa-envelope text-white m-0 mr-3"></i>
                                <div class="d-flex flex-column">
                                    <h5 class="text-white font-weight-medium">Call Us</h5>
                                    <p class="m-0 text-white">+012 345 6789</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Slider;