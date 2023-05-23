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
                                        Monitor your shipment using a unique shipping ID personal to your wallet.
                                    </p>
                                    <a href="index.html#">Find your cargo</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="single-feature">
                                    <img src={Feature2} alt="" />
                                    <h4>Have a Question?</h4>
                                    <p>
                                        Get in touch with our customer service personnel and get answers to all your questions or complaints.
                                    </p>
                                    <a href="index.html#">Contact Us</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="single-feature">
                                    <img src={Feature3} alt="" />
                                    <h4>Leverage Blockchain</h4>
                                    <p>
                                        Utilize the Ethereum Blockchain to manage your transactions privately, make payments with cryptocurrency and be in charge of your shipment.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="single-feature">
                                    <img src={Feature4} alt="" />
                                    <h4>Work with us</h4>
                                    <p>
                                        Be a part of our story as we make worthwhile business transactions that are shaping the future.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-md-0 col-md-12 text-left section-title-wrap mt-4 mt-lg-0">
                        <h5>About Our Company</h5>
                        <h2>WE ARE USING BLOCKCHAIN TO REDEFINE LOGISTICS. </h2>
                        <p>
                            Blockchain enables a shared, decentralized ledger that records and verifies transactions across multiple participants. This transparency allows all stakeholders, including manufacturers, suppliers, distributors, and customers, to have real-time visibility into the movement and status of goods.
                        </p>
                        <a href="index.html#" className="main_btn">Learn More About Us</a>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Features