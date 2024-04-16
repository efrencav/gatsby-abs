import React from 'react';
import { Link } from 'gatsby'

const ExperienceSection = () => {
    return (
        <section className="project-details-area pt-120 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="project-big-thumb">
                            <img src="/assets/img/project/project-big-img-twhe.jpg" alt="Website screen closeup" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                        <div className="p-details-content mb-40">
                            <h3>Texas Women in Higher Education Website</h3>
                            <p>Guide to the World has the guts to design and develop the impossible. With passion and a lot of expertise we create a surprisingly timeless collection of beautiful functional furniture, made with innovative and sustainable materials. Our brand represents connection.</p>
                            <p>Our brand represents connection. With passion and a lot of expertise we create a surprisingly timeless collection of beautiful functional furniture, made with innovative and sustainable materials. Our brand represents connection.</p>
                            <p>The challenge was to come up with a package that would once again stand out from the crowd. Just like coffee, even its packaging design should also be enticing and attractive. The coffee packaging design should link by visual language based on typographic simplicity and overall creativity.</p>
                            <p>In the design, the logo is front and center for greater brand recognition—and a coffee cup highlights the coffee packaging. We developed an appealing coffee label and packaging for each of its blends. In the design, the logo is front and center for greater brand recognition—and a coffee cup that highlights the product. The label educates the customer about coffee as passionate coffee lovers are in trust for information.</p>
                            <p>The new designs redefined Cafe Diario as a serious contender in the grocery store's coffee aisles and allowed for consistent branding across multiple products. The packaging spoke for the quality of its contents and each of its products.</p>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        <div className="sidebar-wrap mb-40">
                            <div className="sidebar-right">
                                <div className="sidebar-single">
                                    <label>Clients:</label>
                                    <span>Texas Women in Higher Education</span>
                                </div>
                                <div className="sidebar-single">
                                    <label>Category:</label>
                                    <span><Link to="/website-design">Website Design</Link>,
                                        <Link to="/branding"> Branding</Link></span>
                                </div>
                                <div className="sidebar-single">
                                    <label>Industry:</label>
                                    <span>Education</span>
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