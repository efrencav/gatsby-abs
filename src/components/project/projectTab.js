import { Link } from 'gatsby';
import React from 'react';

const ProjectTab = () => {
    return (
        <section className="project-2 pt-115 pb-90">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="aportfolio-menu aportfolio-menu2 text-center mb-50">
                            <nav>
                                <div id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                        aria-selected="true">All</button>
                                    <button className="nav-link" id="nav-branding-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-branding" type="button" role="tab" aria-controls="nav-branding"
                                        aria-selected="false">Branding</button>
                                    <button className="nav-link" id="nav-graphic-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-graphic" type="button" role="tab" aria-controls="nav-graphic"
                                        aria-selected="false">Graphic Design</button>
                                    <button className="nav-link" id="nav-web-tab" data-bs-toggle="tab" data-bs-target="#nav-web"
                                        type="button" role="tab" aria-controls="nav-web" aria-selected="false">Website Design</button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* ================================ */}
                <div className="aportfolio-active">
                    <div className="tab-content" id="nav-graphic-design">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className='row'>
                                <div className="col-lg-4 col-md-6">
                                    <div className="kproject kproject-2 mb-30">
                                        <img src="/assets/img/project/project-big-img-1.jpg" className="img-fluid" alt="Muscle Rehab bath bombs packaging" />
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
                                <div className="col-lg-4 col-md-6">
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
                                <div className="col-lg-4 col-md-6">
                                    <div className="kproject kproject-2 mb-30">
                                        <img src="/assets/img/project/project-big-img-3.jpg" className="img-fluid" alt="project_img" />
                                        <div className="kproject-text kproject-text-2">
                                            <div className="kproject-text-content">
                                                <span>Graphic Design</span>
                                                <h5 className="kproject-text-title"><Link to="/patco">Patco Manufacturing</Link></h5>
                                            </div>
                                            <div className="kproject-text-icon">
                                                <Link to="/patco"><i className="far fa-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="kproject kproject-2 mb-30">
                                        <img src="/assets/img/project/project-big-img-4.jpg" className="img-fluid" alt="project_img" />
                                        <div className="kproject-text kproject-text-2">
                                            <div className="kproject-text-content">
                                                <span>Graphic Design</span>
                                                <h5 className="kproject-text-title"><Link to="/silestone-brochure">Silestone Kitchen and Bath Brochure</Link></h5>
                                            </div>
                                            <div className="kproject-text-icon">
                                                <Link to="/silestone-brochure"><i className="far fa-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="kproject kproject-2 mb-30">
                                        <img src="/assets/img/project/project-big-img-10.jpg" className="img-fluid" alt="project_img" />
                                        <div className="kproject-text kproject-text-2">
                                            <div className="kproject-text-content">
                                                <span>Website Design</span>
                                                <h5 className="kproject-text-title"><Link to="/twhe">Texas Women in Higher Education</Link></h5>
                                            </div>
                                            <div className="kproject-text-icon">
                                                <Link to="/twhe"><i className="far fa-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="kproject kproject-2 mb-30">
                                        <img src="/assets/img/project/project-big-img-5.jpg" className="img-fluid" alt="project_img" />
                                        <div className="kproject-text kproject-text-2">
                                            <div className="kproject-text-content">
                                                <span>Graphic Design</span>
                                                <h5 className="kproject-text-title"><Link to="/six-ways">Six Ways to Reduce Well Intervention</Link></h5>
                                            </div>
                                            <div className="kproject-text-icon">
                                                <Link to="/six-ways"><i className="far fa-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="kproject kproject-2 mb-30">
                                        <img src="/assets/img/project/project-big-img-7.jpg" className="img-fluid" alt="project_img" />
                                        <div className="kproject-text kproject-text-2">
                                            <div className="kproject-text-content">
                                                <span>Graphic Design</span>
                                                <h5 className="kproject-text-title"><Link to="/phillips66">Annual Report</Link></h5>
                                            </div>
                                            <div className="kproject-text-icon">
                                                <Link to="/phillips66"><i className="far fa-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="kproject kproject-2 mb-30">
                                        <img src="/assets/img/project/project-big-img-8.jpg" className="img-fluid" alt="project_img" />
                                        <div className="kproject-text kproject-text-2">
                                            <div className="kproject-text-content">
                                                <span>Graphic Design</span>
                                                <h5 className="kproject-text-title"><Link to="/slb-catalog">Well Intervention Catalog</Link></h5>
                                            </div>
                                            <div className="kproject-text-icon">
                                                <Link to="/slb-catalog"><i className="far fa-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="kproject kproject-2 mb-30">
                                        <img src="/assets/img/project/project-big-img-9.jpg" className="img-fluid" alt="project_img" />
                                        <div className="kproject-text kproject-text-2">
                                            <div className="kproject-text-content">
                                                <span>Website Design</span>
                                                <h5 className="kproject-text-title"><Link to="/kinsmen">Kinsmen Group Website</Link></h5>
                                            </div>
                                            <div className="kproject-text-icon">
                                                <Link to="/kinsmen"><i className="far fa-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Branding */}
                        <div className="tab-pane fade" id="nav-branding" role="tabpanel" aria-labelledby="nav-branding-tab">
                            <div className='row'>
                                <div className="col-lg-4 col-md-6">
                                    <div className="kproject kproject-2 mb-30">
                                        <img src="/assets/img/project/project-big-img-1.jpg" className="img-fluid" alt="project_img" />
                                        <div className="kproject-text kproject-text-2">
                                            <div className="kproject-text-content">
                                                <span>Branding</span>
                                                <h5 className="kproject-text-title"><Link to="/muscle-rehab">Muscle Rehab</Link></h5>
                                            </div>
                                            <div className="kproject-text-icon">
                                                <Link to="/muscle-rehab"><i className="far fa-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="kproject kproject-2 mb-30">
                                        <img src="/assets/img/project/project-big-img-2.jpg" className="img-fluid" alt="project_img" />
                                        <div className="kproject-text kproject-text-2">
                                            <div className="kproject-text-content">
                                                <span>Branding</span>
                                                <h5 className="kproject-text-title"><Link to="/cafe-diario">Cafe Diario</Link></h5>
                                            </div>
                                            <div className="kproject-text-icon">
                                                <Link to="/cafe-diario"><i className="far fa-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="kproject kproject-2 mb-30">
                                        <img src="/assets/img/project/project-big-img-6.jpg" className="img-fluid" alt="project_img" />
                                        <div className="kproject-text kproject-text-2">
                                            <div className="kproject-text-content">
                                                <span>Branding</span>
                                                <h5 className="kproject-text-title"><Link to="/slb-brand">SLB Branding Guidelines</Link></h5>
                                            </div>
                                            <div className="kproject-text-icon">
                                                <Link to="/slb-brand"><i className="far fa-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="kproject kproject-2 mb-30">
                                        <img src="/assets/img/project/project-big-img-90.jpg" className="img-fluid" alt="project_img" />
                                        <div className="kproject-text kproject-text-2">
                                            <div className="kproject-text-content">
                                                <span>Branding</span>
                                                <h5 className="kproject-text-title"><Link to="/enfusia">Enfusia</Link></h5>
                                            </div>
                                            <div className="kproject-text-icon">
                                                <Link to="/enfusia"><i className="far fa-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Graphic Design */}
                        <div className="tab-pane fade" id="nav-graphic" role="tabpanel" aria-labelledby="nav-graphic-tab">
                            <div className='row'>
                                <div className="col-lg-4 col-md-6">
                                    <div className="kproject kproject-2 mb-30">
                                        <img src="/assets/img/project/project-big-img-1.jpg" className="img-fluid" alt="Muscle Rehab bath bombs packaging" />
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
                                <div className="col-lg-4 col-md-6">
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
                                <div className="col-lg-4 col-md-6">
                                    <div className="kproject kproject-2 mb-30">
                                        <img src="/assets/img/project/project-big-img-4.jpg" className="img-fluid" alt="project_img" />
                                        <div className="kproject-text kproject-text-2">
                                            <div className="kproject-text-content">
                                                <span>Graphic Design</span>
                                                <h5 className="kproject-text-title"><Link to="/silestone-brochure">Silestone Kitchen and Bath Brochure</Link></h5>
                                            </div>
                                            <div className="kproject-text-icon">
                                                <Link to="/silestone-brochure"><i className="far fa-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="kproject kproject-2 mb-30">
                                        <img src="/assets/img/project/project-big-img-5.jpg" className="img-fluid" alt="project_img" />
                                        <div className="kproject-text kproject-text-2">
                                            <div className="kproject-text-content">
                                                <span>Graphic Design</span>
                                                <h5 className="kproject-text-title"><Link to="/six-ways">Six Ways to Reduce Well Intervention</Link></h5>
                                            </div>
                                            <div className="kproject-text-icon">
                                                <Link to="/six-ways"><i className="far fa-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="kproject kproject-2 mb-30">
                                        <img src="/assets/img/project/project-big-img-7.jpg" className="img-fluid" alt="project_img" />
                                        <div className="kproject-text kproject-text-2">
                                            <div className="kproject-text-content">
                                                <span>Graphic Design</span>
                                                <h5 className="kproject-text-title"><Link to="/phillips66">Annual Report</Link></h5>
                                            </div>
                                            <div className="kproject-text-icon">
                                                <Link to="/phillips66"><i className="far fa-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="kproject kproject-2 mb-30">
                                        <img src="/assets/img/project/project-big-img-8.jpg" className="img-fluid" alt="project_img" />
                                        <div className="kproject-text kproject-text-2">
                                            <div className="kproject-text-content">
                                                <span>Graphic Design</span>
                                                <h5 className="kproject-text-title"><Link to="/slb-catalog">Well Intervention Catalog</Link></h5>
                                            </div>
                                            <div className="kproject-text-icon">
                                                <Link to="/slb-catalog"><i className="far fa-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Website Design */}
                        <div className="tab-pane fade" id="nav-web" role="tabpanel" aria-labelledby="nav-web-tab">
                            <div className='row'>
                                <div className="col-lg-4 col-md-6">
                                    <div className="kproject kproject-2 mb-30">
                                        <img src="/assets/img/project/project-big-img-9.jpg" className="img-fluid" alt="project_img" />
                                        <div className="kproject-text kproject-text-2">
                                            <div className="kproject-text-content">
                                                <span>Website Design</span>
                                                <h5 className="kproject-text-title"><Link to="/kinsmen">Kinsmen Group Website</Link></h5>
                                            </div>
                                            <div className="kproject-text-icon">
                                                <Link to="/kinsmen"><i className="far fa-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="kproject kproject-2 mb-30">
                                        <img src="/assets/img/project/project-big-img-3.jpg" className="img-fluid" alt="project_img" />
                                        <div className="kproject-text kproject-text-2">
                                            <div className="kproject-text-content">
                                                <span>Website Design</span>
                                                <h5 className="kproject-text-title"><Link to="/patco">Patco Manufacturing</Link></h5>
                                            </div>
                                            <div className="kproject-text-icon">
                                                <Link to="/patco"><i className="far fa-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="kproject kproject-2 mb-30">
                                        <img src="/assets/img/project/project-big-img-10.jpg" className="img-fluid" alt="project_img" />
                                        <div className="kproject-text kproject-text-2">
                                            <div className="kproject-text-content">
                                                <span>Website Design</span>
                                                <h5 className="kproject-text-title"><Link to="/twhe">Texas Women in Higher Education Website</Link></h5>
                                            </div>
                                            <div className="kproject-text-icon">
                                                <Link to="/twhe"><i className="far fa-long-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectTab;