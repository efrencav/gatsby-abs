import React from 'react';
import { Link } from 'gatsby';


const WhyWeThree = () => {
    return (
        <section className="why-we bg-grey pt-120 pb-125 pb-md-110 position-relative">
            <div className="wow slideInLeft animated">
                <div className="wow slideInleft animated"></div>
            </div>
            <div className="container z-index">
                <div className="row justify-content-between">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div>
                            <img src="/assets/img/about/_web-design.png" alt="img not found" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="provide-content">
                            <div className="section-title-wrapper mb-25">
                                {/* <h5 className="section-subtitle mb-20">Website Design</h5> */}
                                <h2 className="section-title mb-35">Website Design</h2>
                            </div>
                            <p>With strategic insights, we develop custom websites & apps that increase brand engagement, conversion rates, and ROI.</p>

                            <div className="web-tab-list fix">
                                <ul>
                                    <li><i className="fal fa-check"></i>Determine your target audience</li>
                                    <li><i className="fal fa-check"></i>Discover current user pain points</li>
                                    <li><i className="fal fa-check"></i>Create a unique value proposition (UVP)</li>
                                    <li><i className="fal fa-check"></i>Outline your key performance indicators (KPIs)</li>
                                </ul>
                            </div>
                            <div className="mt-40">
                                <Link to="/website-design" className="theme-btn theme-btn-small">Find Out More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWeThree;