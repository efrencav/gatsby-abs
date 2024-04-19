import { Link } from 'gatsby';
import React from 'react';

const SignUpMain = () => {
    return (
        <div className="signup-page-area pt-120 pb-120">
            <div className="signup-page-area-wrapper">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-10">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="signup-box text-center">
                                        <div className="signup-text">
                                            <h3>Get a Quote</h3>
                                        </div>
                                        <div className="signup-message">
                                            <img src="/assets/img/bg/sign-up-message.png" alt="img not found" />
                                        </div>
                                        <div className="signup-thumb">
                                            <img src="/assets/img/bg/sign-up.png" alt="img not found" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <form
                                        name="Get a Quote"
                                        method="POST"
                                        data-netlify="true"
                                        onSubmit="submit"
                                        data-netlify-honeypot="bot-field">

                                        <p hidden>
                                            <label>
                                                Don't fill this out: <input name="bot-field" />
                                            </label>
                                        </p>

                                        <input type="hidden" name="form-name" value="Get a Quote" />

                                        <div className="signup-form-wrapper">
                                            <div className="signup-input-wrapper">
                                                <input type="text" placeholder="First Name" name="first-name" />
                                                <input type="text" placeholder="Last Name" name="last-name" />
                                            </div>
                                            <div className="signup-wrapper">
                                                <input type="text" placeholder="Company / Organization Name" name="company-organization" />
                                                <input type="text" placeholder="What's Your Role?" name="role" />
                                            </div>
                                            <div className="signup-input-wrapper">
                                                <input type="email" placeholder="Email" name="email" />
                                                <input type="text" placeholder="Phone Number" name="phone-number" />
                                            </div>
                                            <div className="signup-input-wrapper signup-box-small mb-30">
                                                <label for="services">Type of Project?</label>
                                                <select className="select-form" id="services" name="Type of Services">
                                                    <option className="option-form" value="branding">Branding</option>
                                                    <option value="graphicDesign">Graphic Design</option>
                                                    <option value="websiteDesign">Website Design</option>
                                                </select>
                                            </div>
                                            <div className="signup-input-wrapper signup-box-small mb-30">
                                                <label for="budget">What is your Budget?</label>
                                                <select className="select-form" id="budget" name="budget">
                                                    <option value="2500"> more than $2,500</option>
                                                    <option value="5000">$2,500 - $5,000</option>
                                                    <option value="7500">$5,001 - $7,500</option>
                                                    <option value="10000">$7,501 - $10,000</option>
                                                    <option value="more10000">$10,000 +</option>
                                                </select>
                                            </div>
                                            <div className="signup-wrapper">
                                                <input type="message" placeholder="Project Description" name="project-description" />
                                            </div>
                                            <div className="sing-buttom mb-20">
                                                <button type='submit' className="theme-btn theme-btn-small border-btn">Get A Quote</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpMain;
