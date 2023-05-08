import React from 'react'
import Features from '../../components/Features/Features'
import Testimonial from '../../components/Testimonial/Testimonial'


//images
import Brand1 from "../../assets/img/about/brand1.png"
import Brand2 from "../../assets/img/about/brand2.png"
import Brand3 from "../../assets/img/about/brand3.png"
import Brand4 from "../../assets/img/about/brand4.png"
import Brand5 from "../../assets/img/about/brand5.png"
import Brand6 from "../../assets/img/about/brand6.png"

import I1 from "../../assets/img/about/i1.png"
import I2 from "../../assets/img/about/i2.png"
import I3 from "../../assets/img/about/i3.png"
import I4 from "../../assets/img/about/i4.png"





const About = () => {
  return (
    <>
      <section className="home_banner_area banner-area">
        <div className="banner_inner d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner_content d-flex flex-md-row flex-column">
                  <div className="banner-left text-md-right">
                    <h1 className="text-uppercase">About Us</h1>
                  </div>
                  <div className="banner-right position-relative">
                    <p>
                      If you are looking at blank cassettes on the web, you may be very confused.
                    </p>
                    <span className="main_btn mt-4 mt-md-0">
                      <a href="index.html" className="text-white">Home</a>
                      <i className="fa fa-arrow-right mx-2"></i>
                      <a href="about.html" className="text-white">About</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />

      <section className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="row justify-content-center text-left section-title-wrap">
                <div className="col-lg-12">
                  <h5>About Our Company</h5>
                  <h2>
                    Some statistics that we want <br />
                    to show our viewers
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-10">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 single_brand">
                      <img src={Brand1} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6 single_brand">
                      <img src={Brand2} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6 single_brand">
                      <img src={Brand3} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6 single_brand">
                      <img src={Brand4} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6 single_brand">
                      <img src={Brand5} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6 single_brand">
                      <img src={Brand6} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-4">
              <div className="about_box">
                <div className="activity">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="activity_box">
                        <div>
                          <img src={I1} alt="" />
                        </div>
                        <h3>$<span className="counter">2500</span>+</h3>
                        <p>Packages Delivered</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="activity_box" />
                      <div>
                        <img src={I2} alt="" />
                      </div>
                      <h3>$<span className="counter">500</span>+</h3>
                      <p>Satisfied Clients</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="activity_box">
                      <div>
                        <img src={I3} alt="" />
                      </div>
                      <h3>$<span className="counter">70</span>+</h3>
                      <p>Contries reach</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="activity_box">
                      <div>
                        <img src={I4} alt="" />
                      </div>
                      <h3 className="counter">5000</h3>
                      <p>Tons of goods</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

    </>
  )
}

export default About