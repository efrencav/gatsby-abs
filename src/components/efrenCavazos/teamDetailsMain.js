import { Link } from 'gatsby';
import React from 'react';
// import TeamAchivement from './teamAchivement';
// import TeamSkill from './teamSkill';

const TeamDetailsMain = () => {
    return (
        <>
            <section className="founder__area pt-120 pb-40">
                <div className="container">
                    <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-6">
                            <div className="team__founder-thumb w-img mb-60">
                                <img src="/assets/img/team/team-img-4.jpg" alt="img not found" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="team__founder-main mb-60">
                                <div className="section__title-wrapper mb-35">
                                    <div className="section-title-wrapper">
                                        <h5 className="section-subtitle mb-20">Creative Director</h5>
                                        <h2 className="section-title mb-35">Efren Cavazos</h2>
                                    </div>
                                    <p className="paragraph-2">Over 20 years of experience as a Design Director and Leadership. A multi-award-winning digital and print artist with excellent skills in communication, presentation, and teamwork. Creative director, layout designer, and typographical expert, with extensive experience using Adobe Creative Suite software. Produced a variety of marketing collateral for print, web, and digital channels, including email automation, web design, and photography.</p>
                                </div>
                                <div className="team__founder-info">
                                    <div className="team__founder-item">
                                        <div className="team__founder-item-icon">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="team__founder-text">
                                            <span className="title">Phone Number</span>
                                            <h4 className="contact"><a href="tel:8323707322">832-370-7322</a></h4>
                                        </div>
                                    </div>
                                    <div className="team__founder-item">
                                        <div className="team__founder-item-icon">
                                            <i className="fas fa-envelope-open"></i>
                                        </div>
                                        <div className="team__founder-text">
                                            <span className="title">Email Address</span>
                                            <h4 className="contact"><a href="mailto:efren@abstract-creative.com">efren@abstract-creative.com</a></h4>
                                        </div>
                                    </div>
                                    <div className="team__founder-item">
                                        <div className="team__founder-item-icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="team__founder-text">
                                            <span className="title">Office Location</span>
                                            <h4 className="contact">Houston, TX</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="team__founder-btn">
                                    <Link to="/contact" className="theme-btn border-btn">Get In Touch</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container small-container">
                <div className="hr-1"></div>
            </div>

            {/* <TeamSkill /> */}

            <div className="container">
                <div className="hr-1"></div>
            </div>

            {/* <TeamAchivement /> */}
        </>
    );
};

export default TeamDetailsMain;