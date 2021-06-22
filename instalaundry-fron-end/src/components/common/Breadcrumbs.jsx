import React from 'react';

function Breadcrumbs({ title, previousPages = [], currentPage }) {

    return (
        <div key={title + 3} className="page-header container-fluid bg-secondary pt-2 pt-lg-4 pb-2 mb-5">
            <div className="container py-1">
                <div className="row  align-items-center py-4">
                    <div className="col-md-6 text-center text-md-left">
                        <h1
                            className="mb-4 mb-md-0 text-white"
                            className="sliderMainHeading"
                            style={{ fontSize: '2.5rem', marginTop: '6rem' }}
                        >
                            {title}
                        </h1>
                    </div>
                    <div className="col-md-6 text-center text-md-right">
                        <div className="d-inline-flex align-items-center">
                            {previousPages.map((item, index) =>
                                <div key={index} >
                                    <a className="btn text-white">{item}</a>
                                    <i className="fas fa-angle-right text-white"></i>
                                </div>
                            )}
                            <a className="btn text-white disabled">{currentPage}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumbs;