import React from 'react';

const ContactSection = () => {
    return (
        <section className="contact-area pt-120 pb-80 fix">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-5 col-xl-6 col-lg-6">
                        <div className="section-title-wrapper mb-15">
                            <h5 className="section-subtitle mb-20">Get in touch</h5>
                            <h2 className="section-title">Contact Us</h2>
                        </div>
                        <div className="contact-info mr-50 mr-xs-0  mr-md-0">
                            <div className="single-contact-info d-flex align-items-center">
                                <div className="contact-info-icon">
                                    <a href="tell:1-832-370-7322"><i className="fal fa-comments"></i></a>
                                </div>
                                <div className="contact-info-text mt-10">
                                    <span>Call Anytime</span>
                                    <h5><a href="tell:1-832-370-7322">+1-832-370-7322</a></h5>
                                </div>
                            </div>
                            <div className="single-contact-info d-flex align-items-center">
                                <div className="contact-info-icon">
                                    <a href="mailto:info@abstract-creative.com"><i className="fal fa-envelope"></i></a>
                                </div>
                                <div className="contact-info-text mt-10">
                                    <span>send email</span>
                                    <h5><a href="mailto:info@abstract-creative.com">info@abstract-creative.com</a> </h5>
                                </div>
                            </div>
                            <div className="single-contact-info d-flex align-items-center">
                                <div className="contact-info-icon">
                                    <a href="#"><i className="fal fa-map-marker-alt"></i></a>
                                </div>
                                <div className="contact-info-text mt-10">
                                    <span>visit office</span>
                                    <h5><a href="#">Houston, Texas</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-6 col-lg-6">
                        <form
                            name="Contact Us"
                            method="POST"
                            data-netlify="true"
                            onSubmit="submit"
                            data-netlify-honeypot="bot-field">

                            <p hidden>
                                <label>
                                    Don't fill this out: <input name="bot-field" />
                                </label>
                            </p>
                            <input type="hidden" name="form-name" value="Contact Us" />

                            <div className="contact-form">
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="first-name" type="text" placeholder="Your Name" required/>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="email" type="email" placeholder="Email Adress" required/>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="phone" type="text" placeholder="Phone" required/>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 mb-20">
                                        <input name="subject" type="text" placeholder="Subject" required/>
                                    </div>
                                    <div className="col-xxl-12 col-xl-12 col-lg-12 mb-20">
                                        <textarea placeholder="Write Massage" name="massage" required></textarea>
                                    </div>
                                    <div className="col-xxl-12 col-xl-12 mb-20">
                                        <button type="submit" className="theme-btn border-btn">Send a message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ContactSection;
