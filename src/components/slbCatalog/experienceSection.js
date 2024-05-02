import React from 'react';
import { Link } from 'gatsby';


const ExperienceSection = () => {
    return (
        <section className="project-details-area pt-120 pb-70">
            <div className="container">
                {/* <div className="row">
                    <div className="col-xxl-12">
                        <div className="project-big-thumb">
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                        <div className="p-details-content mb-40">
                            <h3>Well Intervention Catalog</h3>
                            <img className='mb-20' src="/assets/img/project/well-intervention-1.jpg" alt="Open brochure showing inner pages" />
                            <p>Schlumberger had a new segment that needed to inform its audience of its tools, products, and services. The goal was to create new content and visual references for data information of its products, original content for case studies, and tech reports for existing services.</p>
                            <img className='mb-20' src="/assets/img/project/well-intervention-2.jpg" alt="Open brochure showing inner pages" />
                            <p>Art directed the design of a 3-book edition catalog and a book insert to hold the books that carried over 750 pages of new content, detailing all data of its products, case study, and tech reports information. A mix of photoshoots, custom tool illustrations, and renderings was required to highlight each tool element, resulting in a well-documented catalog design.</p>
                            <img className='mb-20' src="/assets/img/project/well-intervention-3.jpg" alt="Open brochure showing inner pages" />
                            <p>The Well Intervention Catalog was well received. We shipped 1,500 copies to different customers across the globe. The catalog design received five awards for the following: BMA Lantern Award, Best of Category - Digital - GEA, Best of Category - Offset - GEA, Division 1 - Best of Division - GEA, and Digital Division - Gold Award - GEA.</p>
                            <img className='mb-20' src="/assets/img/project/well-intervention-4.jpg" alt="Open brochure showing inner pages" />
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        <div className="sidebar-wrap mb-40">
                            <div className="sidebar-right">
                                <div className="sidebar-single">
                                    <label>Clients:</label>
                                    <span>Schlumberger</span>
                                </div>
                                <div className="sidebar-single">
                                    <label>Category:</label>
                                    <span><Link to="/graphic-design">Graphic Design</Link>,
                                        <Link to="/branding"> Branding</Link></span>
                                </div>
                                <div className="sidebar-single">
                                    <label>Industry:</label>
                                    <span>Oil and Gas</span>
                                </div>
                                {/* <div className="sidebar-single">
                                    <label>Date:</label>
                                    <span>22 Feb, 2022</span>
                                </div> */}
                                <div className="sidebar-wrap mb-40">
                                    {/* <p className="mt-60">Website design that works: capture visitors from the first click</p> */}
                                    <h4 className='mt-60'>Your graphic design should be your best employee. Need a Graphic Design estimate?</h4>
                                </div>
                                <div className="widget-btn">
                                    <Link to="/get-a-quote" className="theme-btn border-btn mb-80">Request a Quote</Link>
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
