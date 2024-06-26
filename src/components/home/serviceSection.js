import { Link } from 'gatsby';
import React from 'react';

const ServiceSection = () => {
    return (
        <section className="service-area pt-120 pb-130" style={{ backgroundImage: "url(/assets/img/service/service-bg.jpg)" }}>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xxl-5 col-lg-6">
                        <div className="kservice-text mb-50" data-aos="fade-right" data-aos-duration="1000">
                            <h5 className="kservice-text-subtitle mb-15">Our Services</h5>
                            <h2 className="kservice-text-title mb-40">What We Can Do For You</h2>
                            <p className="mb-45">Abstract Creative helps organizations achieve remarkable things with growth-driven branding and website design. With a purpose-driven website, we convey your brand identity, what you offer, and why you're different. We support your positive efforts with branding and website design experts.</p>
                            <div className="kservice-author">
                                <div className="kservice-author-img mr-30">
                                    <img src="/assets/img/service/service-author.png" className="img-fluid" alt="headshot of a male with blue dress shirt" />
                                </div>
                                <div className="kservice-author-sign">
                                    <span>Efren Cavazos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-lg-6">
                        <div className="row custom-mar-20" data-aos="fade-down" data-aos-duration="1000">
                            
                            <div className="col-sm-6 custom-pad-20">
                                <div className="kservice text-center mb-20">
                                    <div className="kservice-icon">
                                        <i className="flaticon-marketing"></i>
                                    </div>
                                    <div className="kservice-content">
                                        <h5 className="kservice-content-title"><Link to="/branding">Branding <br/></Link></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 custom-pad-20">
                                <div className="kservice text-center mb-20">
                                    <div className="kservice-icon">
                                        <i className="flaticon-website"></i>
                                    </div>
                                    <div className="kservice-content">
                                        <h5 className="kservice-content-title"><Link to="/graphic-design">Graphic <br />Design</Link></h5>
                                    </div>
                                </div>
                            </div>
                                <div className="col-sm-6 custom-pad-20">
                                <div className="kservice text-center mb-20">
                                    <div className="kservice-icon">
                                        <i className="flaticon-analytics"></i>
                                    </div>
                                    <div className="kservice-content">
                                        <h5 className="kservice-content-title"><Link to="/website-design">Website <br />Design</Link></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
