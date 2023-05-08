import React from 'react'
import TestiAuthor from "../../assets/img/testi-author.png"

const Testimonial = () => {
    return (
        <section className="testimonial-area section_gap_top">
            <div className="container">
                <div className="row justify-content-center section-title-wrap">
                    <div className="col-lg-12">
                        <h5>User Feedback</h5>
                        <h2>
                            What our customers feedback <br />
                            for amazing service.
                        </h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="owl-carousel active_testimonial">

                            <div className="single_testi">
                                <div className="testi_content">
                                    <p>
                                        “Us multiply given in all hath given may meat god won't abundantly appear lights fourth madman man
                                        said god dominion great. Gathering called very. Midst shall after created from fruitful. Place sea
                                        upon air. Female beast midst fly morning after light creepeth”
                                    </p>
                                </div>
                                <div className="testi_author d-flex justify-content-center align-items-center">
                                    <div className="thumb mr-4"><img src={TestiAuthor} alt="" /></div>
                                    <div className="a-desc text-left">
                                        <h6>Marvel Maison</h6>
                                        <p>Chief Executive, Amazon</p>
                                    </div>
                                </div>
                            </div>

                            <div className="single_testi">
                                <div className="testi_content">
                                    <p>
                                        “Us multiply given in all hath given may meat god won't abundantly appear lights fourth madman man
                                        said god dominion great. Gathering called very. Midst shall after created from fruitful. Place sea
                                        upon air. Female beast midst fly morning after light creepeth”
                                    </p>
                                </div>
                                <div className="testi_author d-flex justify-content-center align-items-center">
                                    <div className="thumb mr-4"><img src={TestiAuthor} alt="" /></div>
                                    <div className="a-desc text-left">
                                        <h6>Marvel Maison</h6>
                                        <p>Chief Executive, Amazon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial