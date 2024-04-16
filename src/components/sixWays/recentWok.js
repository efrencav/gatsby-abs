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
                            <h2 className="section-title">Similar Projects</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6" data-aos="flip-left" data-aos-duration="1000">
                        <div className="kproject kproject-2 mb-30">
                            <img src="/assets/img/project/project-big-img-1.jpg" className="img-fluid" alt="project_img" />
                            <div className="kproject-text kproject-text-2">
                                <div className="kproject-text-content">
                                    <span>Graphic Design</span>
                                    <h5 className="kproject-text-title"><Link to="/muscle-rehab">Muscle Rehab</Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link to="/muscle-rehab"><i className="far fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="flip-up" data-aos-duration="1000">
                        <div className="kproject kproject-2 mb-30">
                            <img src="/assets/img/project/project-big-img-2.jpg" className="img-fluid" alt="project_img" />
                            <div className="kproject-text kproject-text-2">
                                <div className="kproject-text-content">
                                    <span>Graphic Design</span>
                                    <h5 className="kproject-text-title"><Link to="/cafe-diario">Cafe Diario</Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link to="/cafe-diario"><i className="far fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="flip-right" data-aos-duration="1000">
                        <div className="kproject kproject-2 mb-30">
                            <img src="/assets/img/project/project-big-img-4.jpg" className="img-fluid" alt="project_img" />
                            <div className="kproject-text kproject-text-2">
                                <div className="kproject-text-content">
                                    <span>Graphic Design</span>
                                    <h5 className="kproject-text-title"><Link to="/silestone-brochure">Silestone Brochure</Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link to="/silestone-brochure"><i className="far fa-long-arrow-right"></i></Link>
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