import { Link } from 'gatsby';
import React from 'react';

const WebsiteDesDetailsContent = () => {
    return (
        <section className="service-detals pt-120 pb-100 fix">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-8">
                        <div className="develop-wrapper">
                            <div className="develop-thumb">
                                <img src="/assets/img/service/website-design.jpg" alt="" />
                            </div>
                            <div className="develop-content">
                                <h3 className="service-title">Web Design</h3>
                                <p>Need something changed or is there something not quite working the way you envisaged? Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>

                        <div className="planning-wrapper pt-50">
                            <div className="row">
                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                    <div className="plan-thumb mb-md-40 mb-xs-40">
                                        <img src="/assets/img/service/service-img-6.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6">
                                    <div className="plan-content">
                                        <h4>planning & strategy</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        <ul>
                                            <li><i className="fal fa-check"></i>Research beyond the business plan</li>
                                            <li><i className="fal fa-check"></i>Marketing options and rates</li>
                                            <li><i className="fal fa-check"></i>The ability to turnaround consulting</li>
                                            <li><i className="fal fa-check"></i>Customer engagement matters</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xxl-12">
                                    <div className="plan-content pr-10 pt-50 pt-xs-30 pt-md-30 pb-15">
                                        <p>Need something changed or is there something not quite working the way you envisaged? Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="choose-right aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            How to process the funtion for development?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>There are many variations of passages of available but the majority have suffered alteration in that some form by injected randomised words which don’t look even as slightly believable.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Where should I incorporate my business?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Web fonts are often terrible for web performance and none of the font loading strategies are particularly effective to address that. Upcoming font options may finally deliver on the promise.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            How there are many variations of passages
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Front-end and design are remarkably complex these days. That’s why we invite kind, smart folks from the community to run online workshops for all of us to learn together. And we have new ones.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4">
                        <div className="sidebar-wrap">
                            <div className="widget_categories grey-bg">
                                <h4 className="bs-widget-title pl-20">Categories</h4>
                                <ul>
                                    <li><Link to="/services">Web Developement <i className="far fa-long-arrow-right"></i></Link></li>
                                    <li><Link to="/services">Graphic Design <i className="far fa-long-arrow-right"></i></Link></li>
                                    <li><Link to="/services">SEO & Content Writting <i className="far fa-long-arrow-right"></i></Link></li>
                                    <li><Link to="/services">Digital Marketing <i className="far fa-long-arrow-right"></i></Link></li>
                                    <li><Link to="/services">App Development <i className="far fa-long-arrow-right"></i></Link></li>
                                </ul>
                            </div>
                            <div className="widget-btn mt-30">
                                <Link to="/about" className="theme-btn border-btn">get a free estimate</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebsiteDesDetailsContent;