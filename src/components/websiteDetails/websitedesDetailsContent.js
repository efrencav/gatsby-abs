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
                                <h3 className="service-title">Website Design</h3>
                                <h4 className="mt-60">There is no such thing as a wrong first impression in a world where goldfish outlive human attention spans.</h4>
                                <p>How long has it been since you read an entire article? Have you been able to read this far? Could you take this page as an example? Does this content interest you, or are you just skimming the headlines? How do you stay engaged on a website without delving deep into the content? The design of a company's website is the only factor users consider when judging credibility. I want you to know that potential clients are discouraged before considering your services due to an outdated or unprofessional website. You must deliver a powerful, memorable first impression to capture your audience in a fast-paced digital world.</p>
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
                                        <h4>What we offer</h4>
                                        <p>Can't find what you're looking for? Learn how we can help by scheduling a free consultation.</p>
                                        <ul>
                                            <li><i className="fal fa-check"></i>Website design</li>
                                            <li><i className="fal fa-check"></i>Copywriting</li>
                                            <li><i className="fal fa-check"></i>Branding</li>
                                            {/* <li><i className="fal fa-check"></i>Graphic Design</li> */}
                                            <li><i className="fal fa-check"></i>Integrations</li>
                                            <li><i className="fal fa-check"></i>Maintenance</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xxl-12">
                                    <div className="plan-content pr-10 pt-xs-30 pt-md-30 pb-15">
                                        {/* <p className="mt-60">Website design that works: capture visitors from the first click</p> */}
                                        <p className='mt-60'>In the digital world, your website should be your best employee. Effective websites are like finely tuned machines strategically designed to drive conversions and engage users. Our aim is not just to make your website look flashy and eye-catching (though that doesn't hurt) but to set you apart from your competition with thoughtful copywriting, user experience, and design.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="choose-right aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                            <div className="accordion" id="accordionExample">
                                <h3>Offering The Web Design Experience You Deserve</h3>
                                <p className="plan-content mb-40">We offer hassle-free web design thanks to proven processes we've developed over many years. Every step is clearly explained, you are always listened to, and we keep communication lines open and honest. With our caring support, you'll receive a world-class website with everything you want.</p>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button show" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            01  - DISCOVERY
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>After reviewing your questionnaire and Pinterest board, we will create a design concept for your website's home page to illustrate the proposed design direction.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            02 - DESIGN & DEVELOPMENT
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>For each page of your site, we create a custom design mockup. Using WordPress, we develop the site once those are designed.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            03 - LAUNCH & AFTERCARE
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Before launching a site, it goes through a 30-point checklist. After launch, we will offer a monthly care plan to handle all website maintenance tasks.</p>
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
                                    <li><Link to="/branding">Branding<i className="far fa-long-arrow-right"></i></Link></li>
                                    <li><Link to="/graphic-design">Graphic Design<i className="far fa-long-arrow-right"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebsiteDesDetailsContent;