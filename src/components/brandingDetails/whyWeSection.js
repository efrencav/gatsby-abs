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
                                <p>Explore our branding process to learn more about how we drive growth for brands of all sizes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="web-we-tab mb-40" data-aos="fade-up-left" data-aos-duration="1000">
                            <ul className="nav web-tabs mb-30" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="web-tab" data-bs-toggle="tab" data-bs-target="#web"
                                        type="button" role="tab" aria-controls="web" aria-selected="true">Brand Discovery</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#planning"
                                        type="button" role="tab" aria-controls="profile" aria-selected="false">Brand Strategy</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="professional-tab" data-bs-toggle="tab" data-bs-target="#professional"
                                        type="button" role="tab" aria-controls="professional" aria-selected="false">Logo & Visual Identity</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="quality-tab" data-bs-toggle="tab" data-bs-target="#quality"
                                        type="button" role="tab" aria-controls="quality" aria-selected="false">Brand Book & Style Guide</button>
                                </li>
                            </ul>

                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="web" role="tabpanel" aria-labelledby="web-tab">
                                    <div className="row">
                                        <h4>Brand Discovery</h4>
                                        <div className="column"><p className="mb-30">As part of the brand discovery process, we learn about your brand's ins and outs. Once we understand you, your audience, and your needs, our team will help you define your ideal market position to create a space for your brand.</p>
                                            <div className="web-tab-list fix">
                                                <ul>
                                                    <li><i className="fal fa-check"></i>Identify your target audience</li>
                                                    <li><i className="fal fa-check"></i>Defining your brand's mission</li>
                                                    <li><i className="fal fa-check"></i>Establish the goals of your project</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="column"><div className="web-tab-wrapper">
                                            <div className="web-tab-img">
                                                <img src="/assets/img/about/abstract_web_strategy.png" className="img-fluid" alt="about-img" />
                                            </div>
                                        </div></div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="planning" role="tabpanel" aria-labelledby="planning-tab">
                                    <div className="row">
                                        <h4>Brand Strategy</h4>
                                        <div className="column">
                                            <p className="mb-30">At this stage, our brand strategy experts deliver a comprehensive brand strategy framework. Your project's actionable roadmap helps us outline the path to measurable results.</p>
                                            <div className="web-tab-list fix">
                                                <ul>
                                                    <li><i className="fal fa-check"></i>Establish KPIs</li>
                                                    <li><i className="fal fa-check"></i>Analyze opportunities for brand development</li>
                                                    <li><i className="fal fa-check"></i>Develop impactful messages</li>
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
                                        <h4>Logo & Visual Identity</h4>
                                        <div className="column">
                                            <p className="mb-30">The brand strategists and designers begin working on your visual identity when you meet them. As part of our logo design process, we brainstorm, sketch, and create multiple logo concepts along with supporting visual identity elements for both online and offline channels.</p>
                                            <div className="web-tab-list fix">
                                                <ul>
                                                    <li><i className="fal fa-check"></i>Present logo designs</li>
                                                    <li><i className="fal fa-check"></i>Define and shape the visual elements of your brand</li>
                                                    <li><i className="fal fa-check"></i>Create memorable branding elements that connect with your audience</li>
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
                                <div className="tab-pane fade" id="quality" role="tabpanel" aria-labelledby="quality-tab">
                                    <div className="row">
                                        <h4>Brand Book & Style Guide</h4>
                                        <div className="column">
                                            <p className="mb-30">It provides employees and stakeholders access to all the information they need about the brand in one place. A logo is only one component of your brand; others include typography, primary and secondary color palettes, imagery selection, and iconography.</p>
                                            <div className="web-tab-list fix">
                                                <ul>
                                                    <li><i className="fal fa-check"></i>Build a go-to guide for your brand</li>
                                                    <li><i className="fal fa-check"></i>Define proper and improper usage of your brand elements</li>
                                                    <li><i className="fal fa-check"></i>Identify guidelines to create consistency across channels</li>
                                                    {/* <li><i className="fal fa-check"></i>Tried-and-tested tools to delve beyond the eye test</li> */}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="web-tab-wrapper">
                                                <div className="web-tab-img">
                                                    <img src="/assets/img/about/abstract_web_quality.png" className="img-fluid" alt="about-img" />
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