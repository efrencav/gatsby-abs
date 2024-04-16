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
                                <h2 className="section-title mb-35">Our Website Design Process</h2>
                                <p>Our cutting-edge digital experiences are expertly crafted using a combination of proprietary processes and industry-standard methods, ensuring top-notch performance that will exceed your expectations.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="web-we-tab mb-40" data-aos="fade-up-left" data-aos-duration="1000">
                            <ul className="nav web-tabs mb-30" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="web-tab" data-bs-toggle="tab" data-bs-target="#web"
                                        type="button" role="tab" aria-controls="web" aria-selected="true">Web Strategy</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#planning"
                                        type="button" role="tab" aria-controls="profile" aria-selected="false">Planning & Information</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="professional-tab" data-bs-toggle="tab" data-bs-target="#professional"
                                        type="button" role="tab" aria-controls="professional" aria-selected="false">Professional Design</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="quality-tab" data-bs-toggle="tab" data-bs-target="#quality"
                                        type="button" role="tab" aria-controls="quality" aria-selected="false">Quality Assurance</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="launch-tab" data-bs-toggle="tab" data-bs-target="#launch"
                                        type="button" role="tab" aria-controls="launch" aria-selected="false">Launch & Optimization</button>
                                </li>
                            </ul>

                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="web" role="tabpanel" aria-labelledby="web-tab">
                                    <div className="row">
                                        <h4>Web Strategy</h4>
                                        <div className="column"><p className="mb-30">Creating a website is a complicated process, so it is important to start with a strategy. We use thorough research and detailed analysis to create a plan for your digital growth.</p>
                                            <div className="web-tab-list fix">
                                                <ul>
                                                    <li><i className="fal fa-check"></i>Determine your target audience</li>
                                                    <li><i className="fal fa-check"></i>Discover current user pain points</li>
                                                    <li><i className="fal fa-check"></i>Create a unique value proposition (UVP)</li>
                                                    <li><i className="fal fa-check"></i>Outline your key performance indicators (KPIs)</li>
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
                                        <h4>Planning & Information Arquitecture</h4>
                                        <div className="column">
                                            <p className="mb-30">We craft tailor-made solutions for web design projects using proven techniques and bespoke analysis. This stage focuses on optimizing conversion funnels and user journeys.</p>
                                            <div className="web-tab-list fix">
                                                <ul>
                                                    <li><i className="fal fa-check"></i>Developing a user-flow and sitemap</li>
                                                    <li><i className="fal fa-check"></i>Wireframing to create a seamless conversion funnel</li>
                                                    <li><i className="fal fa-check"></i>Adding on-brand messaging throughout your structure</li>
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
                                        <h4>Professional Design</h4>
                                        <div className="column">
                                            <p className="mb-30">Your custom website will now be created by our web design experts, ensuring a lasting impression on your target audience.</p>
                                            <div className="web-tab-list fix">
                                                <ul>
                                                    <li><i className="fal fa-check"></i>Strategically add design features to support your user journey</li>
                                                    <li><i className="fal fa-check"></i>Implement high-quality images</li>
                                                    <li><i className="fal fa-check"></i>Create custom animations and micro-interactions</li>
                                                    <li><i className="fal fa-check"></i>Make sure your design features are accessible</li>
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
                                        <h4>Quality Assurance</h4>
                                        <div className="column">
                                            <p className="mb-30">Measurable results are the focus of our custom websites. In order to accomplish this, we ensure your website is tested to the nth degree, providing you with the best possible user experience (UX).</p>
                                            <div className="web-tab-list fix">
                                                <ul>
                                                    <li><i className="fal fa-check"></i>Consistent communication throughout the process and total transparency</li>
                                                    <li><i className="fal fa-check"></i>Ensure code and design errors are caught with meticulous testing</li>
                                                    <li><i className="fal fa-check"></i>Feedback from clients</li>
                                                    <li><i className="fal fa-check"></i>Tried-and-tested tools to delve beyond the eye test</li>
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
                                <div className="tab-pane fade" id="launch" role="tabpanel" aria-labelledby="launch-tab">
                                    <div className="row">
                                        <h4>Launch & Optimization</h4>
                                        <div className="column">
                                            <p className="mb-30">The performance of a website depends on the support it receives. Our ongoing maintenance and support services help your website stay up to date with the latest trends by testing, upgrading, and optimizing it.</p>
                                            <div className="web-tab-list fix">
                                                <ul>
                                                    <li><i className="fal fa-check"></i>A strict post-launch website protocol</li>
                                                    <li><i className="fal fa-check"></i>Daily, weekly and monthly maintenance and optimization tasks</li>
                                                    <li><i className="fal fa-check"></i>Digital marketing and supporting solutions to grow your business online</li>
                                                    {/* <li><i className="fal fa-check"></i>Make sure your design features are accessible</li> */}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="web-tab-wrapper">
                                                <div className="web-tab-img">
                                                    <img src="/assets/img/about/abstract_web_launch.png" className="img-fluid" alt="about-img" />
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