import { Link } from 'gatsby';
import React from 'react';

const RecentWok = () => {
    return (
        <section className="project-2 pt-115 pb-90 fix">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title-wrapper mb-50 text-center">
                            <h5 className="section-subtitle mb-20">Our recent work</h5>
                            <h2 className="section-title">Similar projects</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6" data-aos="flip-left" data-aos-duration="1000">
                        <div className="kproject kproject-2 mb-30">
                            <img src="/assets/img/project/project-big-img-5.jpg" className="img-fluid" alt="project_img" />
                            <div className="kproject-text kproject-text-2">
                                <div className="kproject-text-content">
                                    <span>Graphic</span>
                                    <h5 className="kproject-text-title"><Link to="/project-details">Fimlor Experience</Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link to="/project-details"><i className="far fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="flip-up" data-aos-duration="1000">
                        <div className="kproject kproject-2 mb-30">
                            <img src="/assets/img/project/project-big-img-6.jpg" className="img-fluid" alt="project_img" />
                            <div className="kproject-text kproject-text-2">
                                <div className="kproject-text-content">
                                    <span>Design</span>
                                    <h5 className="kproject-text-title"><Link to="/project-details">Fimlor Experience</Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link to="/project-details"><i className="far fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="flip-right" data-aos-duration="1000">
                        <div className="kproject kproject-2 mb-30">
                            <img src="/assets/img/project/project-big-img-7.jpg" className="img-fluid" alt="project_img" />
                            <div className="kproject-text kproject-text-2">
                                <div className="kproject-text-content">
                                    <span>Development</span>
                                    <h5 className="kproject-text-title"><Link to="/project-details">Fimlor Experience</Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link to="/project-details"><i className="far fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentWok;