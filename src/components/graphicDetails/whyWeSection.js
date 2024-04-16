import React from 'react';

const WhyWeSection = () => {
    return (
        <section className="why-we bg-grey pt-120 pb-70 position-relative fix">
            <div className="common-shape-wrapper wow slideInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="common-shape-inner wow slideInleft animated" data-wow-delay="0ms" data-wow-duration="1500ms"></div>
            </div>
            <div className="container z-index">
                <div className="row justify-content-between">
                    <div className="col-xl-12">
                        <div className="why-we-left mb-40 mr-90" data-aos="fade-up-right" data-aos-duration="1000">
                            <div className="section-title-wrapper">
                                <h5 className="section-subtitle mb-20">Why we are good</h5>
                                <h2 className="section-title mb-35">Our Working Process</h2>
                                <p>The graphic design process can be broadly defined in three steps:</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="why-we-tab mb-40" data-aos="fade-up-left" data-aos-duration="1000">
                            <ul className="nav why-tabs mb-30" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="why-tab" data-bs-toggle="tab" data-bs-target="#why"
                                        type="button" role="tab" aria-controls="why" aria-selected="true">Planning & Research</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#planning"
                                        type="button" role="tab" aria-controls="profile" aria-selected="false">Design & Creation</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="professional-tab" data-bs-toggle="tab" data-bs-target="#professional"
                                        type="button" role="tab" aria-controls="professional" aria-selected="false">Implementation & Delivery</button>
                                </li>
                            </ul>

                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="why" role="tabpanel" aria-labelledby="why-tab">
                                    <div className="row">
                                        <h4>Planning & Research</h4>
                                        <div className="column"><p className="mb-30">This involves understanding the client's needs, researching the target audience, and identifying the design requirements.</p>
                                            <div className="why-tab-list fix">
                                                <ul>
                                                    <li><i className="fal fa-check"></i>Identify the clients needs</li>
                                                    <li><i className="fal fa-check"></i>Review project resources</li>
                                                    <li><i className="fal fa-check"></i>Strategize content messaging</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="column"><div className="why-tab-wrapper">
                                            <div className="web-tab-img">
                                                <img src="/assets/img/about/abstract_web_strategy.png" className="img-fluid" alt="about-img" />
                                            </div>
                                        </div></div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="planning" role="tabpanel" aria-labelledby="planning-tab">
                                    <div className="row">
                                        <h4>Design & Creation</h4>
                                        <div className="column">
                                            <p className="mb-30">This involves creating a visual concept, developing the design elements, and refining the design until it meets the client's expectations.</p>
                                            <div className="why-tab-list fix">
                                                <ul>
                                                    <li><i className="fal fa-check"></i>Develop concept layouts</li>
                                                    <li><i className="fal fa-check"></i>Review design options with the client</li>
                                                    <li><i className="fal fa-check"></i>Finalize and implement final messaging</li>
                                                    {/* <li><i className="fal fa-check"></i>Suspe ndisse suscipit sagittis leo</li> */}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="web-tab-wrapper">
                                                <div className="web-tab-img">
                                                    <img src="/assets/img/about/abstract_web_planning.png" className="img-fluid" alt="about-img" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="professional" role="tabpanel" aria-labelledby="professional-tab">
                                    <div className="row">
                                        <h4>Implementation & Delivery</h4>
                                        <div className="column">
                                            <p className="mb-30">This involves preparing the design for print or digital delivery, ensuring the design is technically sound, and delivering the final product to the client.</p>
                                            <div className="why-tab-list fix">
                                                <ul>
                                                    <li><i className="fal fa-check"></i>Prepare files for final use</li>
                                                    <li><i className="fal fa-check"></i>Confirm files are accurate and free of errors</li>
                                                    <li><i className="fal fa-check"></i>Submit final files</li>
                                                    {/* <li><i className="fal fa-check"></i>Make sure your design features are accessible</li> */}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="web-tab-wrapper">
                                                <div className="web-tab-img">
                                                    <img src="/assets/img/about/abstract_web_design.png" className="img-fluid" alt="about-img" />
                                                </div>
                                            </div>
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

export default WhyWeSection;