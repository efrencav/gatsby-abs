import React from 'react';
import { Link } from 'gatsby';


const WhyWeThree = () => {
    return (
        <section className="why-we bg-white pt-120 pb-125 pb-md-110 position-relative">
            <div className="wow slideInLeft animated">
                <div className="wow slideInleft animated"></div>
            </div>
            <div className="container z-index">
                <div className="row justify-content-between">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="provide-content">

                            <div className="section-title-wrapper mb-25">
                                {/* <h5 className="section-subtitle mb-20">Branding</h5> */}
                                <h2 className="section-title mb-35">Branding</h2>
                            </div>
                            <p>Enhancing customer experience online and offline by integrating brand strategy with digital initiatives.</p>
                            <div className="web-tab-list fix">
                                <ul>
                                    <li><i className="fal fa-check"></i>Digital strategy</li>
                                    <li><i className="fal fa-check"></i>Brand strategy</li>
                                    <li><i className="fal fa-check"></i>Brand identity</li>
                                    <li><i className="fal fa-check"></i>Logo design</li>
                                </ul>
                            </div>
                            <div className="mt-40">
                                <Link to="/branding" className="theme-btn theme-btn-small">Find Out More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div>
                            <img src="/assets/img/about/_branding.png" alt="img not found" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyWeThree;