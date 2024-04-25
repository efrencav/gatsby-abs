import React from 'react';
import { Link } from 'gatsby'

const ExperienceSection = () => {
    return (
        <section className="project-details-area pt-120 pb-70">
            <div className="container">
                {/* <div className="row">
                    <div className="col-xxl-12">
                        <div className="project-big-thumb">
                            <img src="/assets/img/project/project-big-img-cafe-diario.jpg" alt="Coffee packaging" />
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                        <div className="p-details-content mb-40">
                            <h3>Enfusia</h3>
                            <img className='mb20' src="/assets/img/project/en-project-big-img-2.jpg" alt="Coffee packaging" />
                            <p>Enfusia is a beauty product brand that has been making waves in the industry. The brand's unique approach to creating products that are both effective and safe has gained it a loyal following.</p>
                            <img className='mb20' src="/assets/img/project/en-project-big-img-1.jpg" alt="Coffee packaging" />
                            <p>Enfusia's branding strategy is centered around the idea of promoting self-care and self-love. </p>
                            <p>The brand's products are not only designed to improve the appearance of the skin, but also to promote a sense of well-being and relaxation. This message is communicated through the use of calming colors, soothing language, and imagery that evokes feelings of peace and tranquility. </p>
                            <img className='mb20' src="/assets/img/project/en-project-big-img-3.jpg" alt="Coffee packaging" />
                            <p>Enfusia strives to create a holistic beauty experience that goes beyond just physical appearance, and this is reflected in its branding efforts.</p>
                            <img className='mb20' src="/assets/img/project/en-project-big-img-4.jpg" alt="Coffee packaging" />
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        <div className="sidebar-wrap mb-40">
                            <div className="sidebar-right">
                                <div className="sidebar-single">
                                    <label>Clients:</label>
                                    <span>Cafe Diario USA</span>
                                </div>
                                <div className="sidebar-single">
                                    <label>Category:</label>
                                    <span><Link to="/graphic-design">Graphic Design</Link>,
                                        <Link to="/branding"> Branding</Link></span>
                                </div>
                                <div className="sidebar-single">
                                    <label>Industry:</label>
                                    <span>Food Industry</span>
                                </div>
                                <div className="sidebar-wrap mb-40">
                                    {/* <p className="mt-60">Website design that works: capture visitors from the first click</p> */}
                                    <h4 className='mt-60'>Your branding should be your best employee. Need a Branding Design estimate?</h4>
                                </div>
                                <div className="widget-btn">
                                    <Link to="/get-a-quote" className="theme-btn border-btn mb-80">Request a Quote</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
