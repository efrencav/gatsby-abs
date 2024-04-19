import { Link } from 'gatsby';
import React from 'react';

const AboutSection = () => {
    return (
        <section className="about-area pt-120 pb-70 fix">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="kabout-img mb-50 mr-70" data-aos="zoom-out-up" data-swiper-autoplay="10000">
                            <div className="kabout-img-shape"></div>
                            <img src="/assets/img/about/about-img-1.jpg" className="img-fluid z-index" alt="about-img" />
                            <div className="kabout-img-small">
                                <img src="/assets/img/about/about-img-2.jpg" className="img-fluid" alt="about-img" />
                                <div className="kabout-img-small-icon play_btn">
                                    <span>
                                        <img src="/assets/img/icon/about-icon.png" className="img-fluid" alt="about-icon" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="kabout mb-50" data-aos="zoom-out-down" data-swiper-autoplay="10000">
                            <div className="section-title-wrapper mb-45">
                                <h5 className="section-subtitle mb-20">get to know us</h5>
                                <h2 className="section-title mb-35">Welcome to Abstract Creative</h2>
                                <p>Abstract Creative is a results-driven creative agency specializing in impactful digital experiences, brand storytelling, and graphic design for small businesses.</p>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="kabout-service mb-30">
                                        <h4 className="kabout-service-title">The Best Services</h4>
                                        <p>Abstract Creative has worked with countless organizations, helping them power up their outstanding work with growth-driven branding, website design, and graphic design services. We help our clients do more positive things through exceptional branding and design.</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="kabout-service mb-30">
                                        <h4 className="kabout-service-title">Expert Designers</h4>
                                        <p>We place a high value on relationships and community. Our clients' success is our success, and we are their biggest cheerleaders. For designs that reflect your organization's true essence, we work as an extension of your graphic design team and get to know your company inside and out.</p>
                                    </div>
                                </div>
                            </div>
                            <ul className="mt-20 mb-55">
                                <li><i className="fal fa-check"></i>Communicating Your Impact: Sharing your story and demonstrating the real impact you're having is tough.</li>
                                <li><i className="fal fa-check"></i>Your organization may struggle to stand out online due to the ever-evolving digital landscape.</li>
                                <li><i className="fal fa-check"></i>Managing countless roles and tasks leaves little time for the necessary design and strategy to enhance your organization's presence and create a cohesive brand identity.</li>
                            </ul>
                            <div className="kabout-btn">
                                <Link to="/about" className="theme-btn border-btn">Discover more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
