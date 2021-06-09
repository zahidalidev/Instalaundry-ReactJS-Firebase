import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';

import { Colors } from "../../config/Colors"
import "./Slider.css"

import img1 from "../../assets/img/carousel-1.jpg"
// import img2 from "../../assets/img/carousel-1.jpg"
// import img3 from "../../assets/img/blog-1.jpg"

function Slider(props) {

    // const imgArray = [
    //     { id: 0, img: img1 },
    //     { id: 1, img: img2 },
    //     { id: 2, img: img3 }
    // ];
    // const [currentImage, setCurrentImage] = useState(imgArray[1]);
    // const [imgClass, setImgClass] = useState("w-100 imgClass");

    // const handleImageNext = () => {

    //     let index = currentImage.id;
    //     console.log(currentImage.id)
    //     if (index >= 2) {
    //         setCurrentImage(imgArray[0])
    //     } else {
    //         setCurrentImage(imgArray[index + 1])
    //     }
    // }
    // const handleImagePrev = () => {
    //     let index = currentImage.id;
    //     if (index <= 0) {
    //         setCurrentImage(imgArray[2])
    //     } else {
    //         setCurrentImage(imgArray[index - 1])
    //     }
    // }

    // useEffect(() => {
    //     let interval = setInterval(() => handleImageNext(), 3000);

    //     return (() => {
    //         clearInterval(interval);
    //     })

    // }, [])

    return (
        <>
            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img id="im" className="w-100 imgClass" src={img1} alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: "900rem" }}>
                                    <h4 className="sliderMainHeading text-white text-uppercase mb-md-3">Full Load of Laundry starting <br /> at $9.99/Week</h4>
                                    <h1 className="sliderSubHeading display-3 text-white mb-md-4" style={{ fontSize: "2rem" }}>12 Hours service guarantee</h1>
                                    {/* <a className="btn btn-primary py-md-3 px-md-5 mt-2">GET STARTED</a> */}
                                    <Button style={{ backgroundColor: Colors.secondary, color: Colors.white }} className="btn btn-primary py-md-3 px-md-4 mt-2" variant="contained">GET STARTED</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <a onClick={handleImagePrev} className="carousel-control-prev" data-slide="prev">
                        <div className="btn" style={{ backgroundColor: Colors.primary, width: "3.5rem", height: "2.8rem" }}>
                            <span className="carousel-control-prev-icon mb-n2"></span>
                        </div>
                    </a>
                    <a onClick={handleImageNext} className="carousel-control-next" data-slide="next">
                        <div className="btn" style={{ backgroundColor: Colors.primary, width: "3.5rem", height: "2.8rem" }}>
                            <span className="carousel-control-next-icon mb-n2"></span>
                        </div>
                    </a> */}
                </div>
            </div>

            {/* <!-- Contact Info Start --> */}
            <div className="container-fluid contact-info mt-5 mb-4">
                <div className="container" style={{ paddingLeft: 0 }}>
                    <div className="row">
                        <div className="col-md-4 d-flex align-items-center justify-content-center bg-secondary mb-4 mb-lg-0" style={{ height: "6.25rem" }}>
                            <div className="d-inline-flex">
                                <i className="fa fa-2x fa-envelope text-white m-0 mr-3"></i>
                                <div className="d-flex flex-column">
                                    <h5 className="text-white font-weight-medium">Our Location</h5>
                                    <p className="m-0 text-white">123 Street, New York, USA</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-items-center justify-content-center bg-primary mb-4 mb-lg-0" style={{ height: "6.25rem" }}>
                            <div className="d-inline-flex text-left">
                                <i className="fa fa-2x fa-envelope text-white m-0 mr-3"></i>
                                <div className="d-flex flex-column">
                                    <h5 className="text-white font-weight-medium">Email Us</h5>
                                    <p className="m-0 text-white">info@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-items-center justify-content-center bg-secondary mb-4 mb-lg-0" style={{ height: "6.25rem" }}>
                            <div className="d-inline-flex text-left">
                                <i className="fa fa-2x fa-envelope text-white m-0 mr-3"></i>
                                <div className="d-flex flex-column">
                                    <h5 className="text-white font-weight-medium">Call Us</h5>
                                    <p className="m-0 text-white">+012 345 6789</p>
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