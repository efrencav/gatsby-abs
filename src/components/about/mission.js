import { Link } from 'gatsby';
import React from 'react';

const Mission = () => {
    return (
        <section className="mission-area pt-120 fix">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="kintro-text mr-xs-0 mr-md-0 mr-lg-0 mr-70 mb-30" data-aos="fade-left" data-aos-duration="1000">
                            <div className="section-title-wrapper mb-25">
                                <h5 className="section-subtitle mb-20">get to know us</h5>
                                <h2 className="section-title mb-35">Our Mission is to
                                    become the best agency</h2>
                                <p>Award-winning creatives that thrive on your success.</p>
                            </div>
                            <p className="mb-45">At the heart of our work lies a powerful mission - to craft designs that look stunning andnot only look stunning but also convey our clients' messages with impact. We aim to help them surpass their objectives and reach new heights of success. Let's embark on this creative journey together and create designs that leave a lasting impression!
                            </p>
                            <div className="ktrust-btn">
                                <Link to="/services" className="theme-btn border-btn">Discover more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="kintro-img mb-30" data-aos="fade-right" data-aos-duration="1000">
                            <img src="/assets/img/about/about-img-6.jpg" className="img-fluid" alt="about-img" />
                            <div className="mission-img-text">
                                <h4>Boost your impact with branding and website design that converts.
                                </h4>
                                <Link to="/projects">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;