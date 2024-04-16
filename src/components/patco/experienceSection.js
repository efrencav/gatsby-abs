import { Link } from 'gatsby';
import React from 'react';

const ExperienceSection = () => {
    return (
        <section className="project-details-area pt-120 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="project-big-thumb">
                            <img src="/assets/img/project/project-big-img-patco.jpg" alt="Patco manufacturing website" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                        <div className="p-details-content mb-40">
                            <h3>Patco Manufacturing Website</h3>
                            <p>Patco Manufacturing is a Houston-based engineered turnkey solutions manufacturing facility for Oil & Gas industries.</p>
                            <p>Patco's old website did little to speak to the uniqueness of its brand, and the site was slow in loading. In addition, their services were not clearly stating the benefits of buying it. These issues came together, and many potential customers left before reaching the sales team.</p>
                            <p>We re-designed the current website to provide individuals with more meaningful information about engineered turnkey solutions and quality management systems. This approach would help establish confidence in potential clients, increase awareness, and ultimately empower individuals to get involved.</p>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        <div className="sidebar-wrap mb-40">
                            <div className="sidebar-right">
                                <div className="sidebar-single">
                                    <label>Clients:</label>
                                    <span><Link to="https://patcomfg.com/" target="_blank">Patco Manufacturing</Link></span>
                                </div>
                                <div className="sidebar-single">
                                    <label>Category:</label>
                                    <span><Link to="/website-design">Website Design, </Link>
                                        <Link to="/branding">Branding</Link></span>
                                </div>
                                <div className="sidebar-single">
                                    <label>Industry:</label>
                                    <span>Engineering</span>
                                </div>
                                <div className="sidebar-wrap mb-40">
                                    <h4 className='mt-60'>Your website should be your best employee. Need a Website Design estimate?</h4>
                                </div>
                                <div className="widget-btn">
                                    <Link to="/about" className="theme-btn border-btn mb-80">get a free estimate</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ExperienceSection;