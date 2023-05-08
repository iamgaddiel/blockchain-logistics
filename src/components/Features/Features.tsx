import React from 'react'

//feature images
import Feature1 from "../../assets/img/feature/f1.png"
import Feature2 from "../../assets/img/feature/f2.png"
import Feature3 from "../../assets/img/feature/f3.png"
import Feature4 from "../../assets/img/feature/f4.png"



const Features = () => {
    return (
        <section className="feature-area section_gap_top">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="single-feature">
                                    <img src={Feature1} alt="" />
                                    <h4>Shipment Tracking</h4>
                                    <p>
                                        The French Revolutioncons tituted for the conscience of the dominant the French Revolutioncons.
                                    </p>
                                    <a href="index.html#">Find your cargo</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="single-feature">
                                    <img src={Feature2} alt="" />
                                    <h4>Have a Question?</h4>
                                    <p>
                                        The French Revolutioncons tituted for the conscience of the dominant the French Revolutioncons.
                                    </p>
                                    <a href="index.html#">Contact Us</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="single-feature">
                                    <img src={Feature3} alt="" />
                                    <h4>Get a Quote</h4>
                                    <p>
                                        The French Revolutioncons tituted for the conscience of the dominant the French Revolutioncons.
                                    </p>
                                    <a href="index.html#">Start a quote</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="single-feature">
                                    <img src={Feature4} alt="" />
                                    <h4>Shipping Calculator</h4>
                                    <p>
                                        The French Revolutioncons tituted for the conscience of the dominant the French Revolutioncons.
                                    </p>
                                    <a href="index.html#">Get Estimate</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-md-0 col-md-12 text-left section-title-wrap mt-4 mt-lg-0">
                        <h5>About Our Company</h5>
                        <h2> We’re Carefully <br />  Delivering your <br /> happiness. </h2>
                        <h4>f you are looking at blank cassettes on the web lorem ipsum dolor sit consectetur adipisicing elit,
                            eiusmod tempor incididunt.</h4>
                        <p>
                            If you are looking at blank cassettes on the web lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Eiusmod tempor
                            incididunt ut labore et dolore magna aliqua consectetur adipisicing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                        </p>
                        <a href="index.html#" className="main_btn">Learn More About Us</a>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Features