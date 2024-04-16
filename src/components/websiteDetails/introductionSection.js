import React from 'react';

const IntroductionSection = () => {
    return (
        <section className="intro-area z-index fix mb-80">
            <img src="/assets/img/about/intro-bg.png" className="intro-bg img-fluid" alt="intro-bg" />
            <div className="intro-space pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="kintro-img mb-40" data-aos="fade-right" data-aos-duration="1000">
                                <img src="/assets/img/about/web_service.png" className="img-fluid" alt="about-img" />
                                {/* <div className="kintro-img-text">
                                    <div className="kintro-img-text-icon mr-20">
                                        <i className="flaticon-reaction"></i>
                                    </div>
                                    <h5>Trusted by <br />8800 Clients</h5>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="kintro-text ml-70" data-aos="fade-left" data-aos-duration="1000">
                                <div className="section-title-wrapper mb-25">
                                    <h5 className="section-subtitle mb-20">Our services</h5>
                                    <h2 className="section-title mb-35">Website Design</h2>
                                    <p>There is no such thing as a wrong first impression in a world where goldfish outlive human attention spans.</p>
                                </div>
                                <p className="mb-45"><strong>How long has it been since you read an entire article?</strong><br />Have you been able to read this far? Could you take this page as an example? Does this content interest you, or are you just skimming the headlines? How do you stay engaged on a website without delving deep into the content? The design of a company's website is the only factor users consider when judging credibility. I want you to know that potential clients are discouraged before considering your services due to an outdated or unprofessional website. You must deliver a powerful, memorable first impression to capture your audience in a fast-paced digital world.</p>
                                {/* <div className="skill--content">
                                    <div className="skill__wrapper mb-20">
                                        <div className="skill--title__wrapper">
                                            <h5 className="skill--title">Web Design</h5>
                                            <span>90%</span>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-theme wow slideInLeft"></div>
                                        </div>
                                    </div>
                                    <div className="skill__wrapper mb-60">
                                        <div className="skill--title__wrapper">
                                            <h5 className="skill--title">Web Development</h5>
                                            <span>68%</span>
                                        </div>
                                        <div className="progress progress-two">
                                            <div className="progress-bar bg-theme wow slideInLeft"></div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="kservice-author">
                                    <div className="kservice-author-img mr-30">
                                        <img src="/assets/img/service/service-author.png" className="img-fluid" alt="author-img" />
                                    </div>
                                    <div className="kservice-author-sign kservice-author-sign-2">
                                        <span>Jessica Brown</span>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroductionSection;