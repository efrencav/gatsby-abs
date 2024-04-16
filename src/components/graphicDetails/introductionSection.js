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
                                <img src="/assets/img/about/_graphic-design.png" className="img-fluid" alt="about-img" />
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
                                    <h2 className="section-title mb-35">Graphic Design</h2>
                                    <p>It's crucial to make a lasting impression in business. We can help. Our team creates graphics that not only catch the eye, but also make an impact.</p>
                                </div>
                                <p className="mb-45">Our graphic designers ensure your project is smooth sailing, from brochures and banner ads to logos, packaging, and company signage. Whether your brand identity is corporate or quirky, our designers can make it come to life with impressive visual storytelling.</p>
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