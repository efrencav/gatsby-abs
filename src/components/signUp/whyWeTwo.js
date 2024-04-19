import React from 'react';

const WhyWeTwo = () => {
    return (
        <section className="why-we bg-grey pt-125 pb-75 position-relative fix">
            <div className="common-shape-wrapper wow slideInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="common-shape-inner"></div>
            </div>
            <div className="container z-index">
                <div className="row justify-content-between">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="choose-left mb-40 mr-xs-0 mr-md-0 mr-lg-0 mr-90" data-aos="fade-up-right" data-aos-duration="1000">
                            <div className="section-title-wrapper">
                                <h5 className="section-subtitle mb-20">All Categories List</h5>
                                <h2 className="section-title mb-35">Why Choose our agency</h2>
                            </div>
                            <p>When it comes to choosing a design agency, there are many factors to consider. You want an agency that is reliable, creative, and professional – and that is exactly what you will get when you choose our design agency.
                            </p>
                            <div className="why-tab-list">
                                <ul>
                                    <li><i className="far fa-check"></i>We pride ourselves on delivering high-quality design services that exceed our clients' expectations.</li>
                                    <li><i className="far fa-check"></i>One of our biggest strengths is our ability to create custom designs.</li>
                                    <li><i className="far fa-check"></i>we also place a strong emphasis on communication and collaboration.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="choose-right" data-aos="fade-left" data-aos-duration="1000">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Quality Work
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Our graphic design agency takes pride in delivering exceptional quality work that exceeds our clients' expectations. Our experienced graphic designers use the latest software and tools to create designs that are visually stunning and effective in communicating our clients' messages.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Customer Satisfaction
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>We place a high priority on customer satisfaction and work closely with our clients to understand their needs and preferences. We provide regular updates and revisions to ensure that the final product meets their expectations.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Competitive Pricing
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Our graphic design agency offers competitive pricing without compromising on quality. We believe in providing our clients with affordable design solutions that are tailored to their specific needs and budget.</p>
                                        </div>
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

export default WhyWeTwo;
