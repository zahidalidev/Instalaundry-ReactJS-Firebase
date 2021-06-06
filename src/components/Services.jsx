import React from 'react';

function Services(props) {
    return (
        <div className="container-fluid pt-5 pb-3">
            <div className="container">
                <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">Our Services</h6>
                <h1 className="display-4 text-center mb-5">What We Offer</h1>
                <div className="row">
                    <div onMouseLeave={() => console.log("hover")} className="col-lg-3 col-md-6 pb-1">
                        <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4" style={{ height: "18.75rem" }}>
                            <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4" style={{ width: "6.25rem", height: "6.25rem" }}>
                                <i className="fa fa-3x fa-cloud-sun text-secondary"></i>
                            </div>
                            <h4 className="font-weight-bold m-0">Dry Cleaning</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 pb-1">
                        <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4" style={{ height: "18.75rem" }}>
                            <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4" style={{ width: "6.25rem", height: "6.25rem" }}>
                                <i className="fas fa-3x fa-soap text-secondary"></i>
                            </div>
                            <h4 className="font-weight-bold m-0">Wash & Laundry</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 pb-1">
                        <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4" style={{ height: "18.75rem" }}>
                            <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4" style={{ width: "6.25rem", height: "6.25rem" }}>
                                <i className="fa fa-3x fa-burn text-secondary"></i>
                            </div>
                            <h4 className="font-weight-bold m-0">Curtain Laundry</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 pb-1">
                        <div className="d-flex flex-column align-items-center justify-content-center text-center bg-light mb-4 px-4" style={{ height: "18.75rem" }}>
                            <div className="d-inline-flex align-items-center justify-content-center bg-white shadow rounded-circle mb-4" style={{ width: "6.25rem", height: "6.25rem" }}>
                                <i className="fa fa-3x fa-tshirt text-secondary"></i>
                            </div>
                            <h4 className="font-weight-bold m-0">Suits Cleaning</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Services;