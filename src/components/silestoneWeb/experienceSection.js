import { Link } from 'gatsby';
import React from 'react';

const ExperienceSection = () => {
    return (
        <section className="project-details-area pt-120 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="project-big-thumb">
                            <img src="/assets/img/project/project-big-img-silestone-web.jpg" alt="Silestone Website" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                        <div className="p-details-content mb-40">
                            <h3>Silestone Website</h3>
                            <p>The purpose of the redesign is to improve brand equity and online reach through branded storytelling. Improve site conversion of users into contact and, ultimately, customers, implement a search friendly and socially-focused product to drive user engagement and value.</p>
                            <p>Silestone has a clear and recognizable branding, so we worked with the existing color palette to create something more sleek and professional. The redesign included fresh photography, improved copy, icon usage, product displays, and breathing room to make paths to content clearer. The goal for this web design project was to revamp the site's look and feel to reflect the all-new branding and deepen its content.</p>
                            <p>A big part of the Silestone website redesign project was updating the overall look and feel to reflect their current branding. To achieve an elegant look, we played with white space and used blacks and light greys for highlighting sections. The magenta (Pantone 1935) used as a highlight for minimal items. The redesign also features more modern typography that feels more professional; each page uses engaging images and modern typography to convey their welcoming message.</p>
                            <p>The new Silestone website is engaging and intuitive user experience. Integrated filtering displays and customized content for Africa, America, Asia, Europe, and Middle East visitors. The robust new locations page helps customers quickly find the nearest showrooms with the services and amenities they desire. The website is positioned to maximize the benefits of all future digital marketing activities done by the Cosentino Group.</p>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        <div className="sidebar-wrap mb-40">
                            <div className="sidebar-right">
                                <div className="sidebar-single">
                                    <label>Clients:</label>
                                    <span>Cosentino</span>
                                </div>
                                <div className="sidebar-single">
                                    <label>Category:</label>
                                    <span><Link to="/website-design">Website Design, </Link>
                                        <Link to="/branding">Branding</Link></span>
                                </div>
                                <div className="sidebar-single">
                                    <label>Industry:</label>
                                    <span>Kitchen and Bath</span>
                                </div>
                                <div className="sidebar-wrap mb-40">
                                    {/* <p className="mt-60">Website design that works: capture visitors from the first click</p> */}
                                    <h4 className='mt-60'>Your website should be your best employee. Need a Website Design estimate?</h4>
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
