import React from 'react'

// service images
import Service1 from "../../assets/img/service/service1.jpg"
import Service2 from "../../assets/img/service/service2.jpg"
import Service3 from "../../assets/img/service/service3.jpg"


const ServiceArea = () => {
    return (
        <section className="service-area section_gap_top">
            <div className="container">
                <div className="row justify-content-center section-title-wrap">
                    <div className="col-lg-12">
                        <h5>Our Offered Services</h5>
                        <h2 className="text-white">
                            We offer Various Services <br />
                            to get you covered
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="single-service col-lg-4 col-md-6">
                        <div className="thumb">
                            <img className="f-img img-fluid mx-auto" src={Service1} alt="" />
                        </div>
                        <div className="service-box">
                            <h3>
                                Did not find <br />
                                your Package
                            </h3>
                            <p>
                                inappropriate behavior is often laughed off as boys will be boys
                                women face in higher conduct standards.
                            </p>
                            <a href="index.html#">Learn More</a>
                        </div>
                    </div>
                    <div className="single-service col-lg-4 col-md-6">
                        <div className="thumb">
                            <img className="f-img img-fluid mx-auto" src={Service2} alt="" />
                        </div>
                        <div className="service-box">
                            <h3>
                                Did not find <br />
                                your Package
                            </h3>
                            <p>
                                inappropriate behavior is often laughed off as boys will be boys
                                women face in higher conduct standards.
                            </p>
                            <a href="index.html#">Learn More</a>
                        </div>
                    </div>
                    <div className="single-service col-lg-4 col-md-6">
                        <div className="thumb">
                            <img className="f-img img-fluid mx-auto" src={Service3} alt="" />
                        </div>
                        <div className="service-box">
                            <h3>
                                Did not find <br />
                                your Package
                            </h3>
                            <p>
                                inappropriate behavior is often laughed off as boys will be boys
                                women face in higher conduct standards.
                            </p>
                            <a href="index.html#">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceArea