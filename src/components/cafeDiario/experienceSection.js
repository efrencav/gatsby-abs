import React from 'react';
import { Link } from 'gatsby'

const ExperienceSection = () => {
    return (
        <section className="project-details-area pt-120 pb-70">
            <div className="container">
                {/* <div className="row">
                    <div className="col-xxl-12">
                        <div className="project-big-thumb">
                            <img src="/assets/img/project/project-big-img-cafe-diario.jpg" alt="Coffee packaging" />
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                        <div className="p-details-content mb-40">
                            <h3>Cafe Diario</h3>

                            <img className='mb20' src="/assets/img/project/project-big-img-cafe-diario.jpg" alt="Coffee packaging" />
                            <p>Cafe Diario believes that coffee is an open invitation. That good coffee is for everyone and not just the coffee elite.</p>
                            <img className='mb20' src="/assets/img/project/cd-project-big-img-1.jpg" alt="Coffee packaging" />
                            <p>They dig deep to roast and find the absolute best coffees. The company had the pleasure of extending its existing products with new packaging designs for its coffee labels.</p>
                            <p>The challenge was to come up with a package that would once again stand out from the crowd. Just like coffee, even its packaging design should also be enticing and attractive. The coffee packaging design should link by visual language based on typographic simplicity and overall creativity.</p>
                            <img className='mb20' src="/assets/img/project/cd-project-big-img-2.jpg" alt="Coffee packaging" />
                            <p>In the design, the logo is front and center for greater brand recognition—and a coffee cup highlights the coffee packaging. We developed an appealing coffee label and packaging for each of its blends. In the design, the logo is front and center for greater brand recognition—and a coffee cup that highlights the product. The label educates the customer about coffee as passionate coffee lovers are in trust for information.</p>
                            <img className='mb20' src="/assets/img/project/cd-project-big-img-3.jpg" alt="Coffee packaging" />
                            <p>The new designs redefined Cafe Diario as a serious contender in the grocery store's coffee aisles and allowed for consistent branding across multiple products. The packaging spoke for the quality of its contents and each of its products.</p>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        <div className="sidebar-wrap mb-40">
                            <div className="sidebar-right">
                                <div className="sidebar-single">
                                    <label>Clients:</label>
                                    <span>Cafe Diario USA</span>
                                </div>
                                <div className="sidebar-single">
                                    <label>Category:</label>
                                    <span><Link to="/graphic-design">Graphic Design</Link>,
                                        <Link to="/branding"> Branding</Link></span>
                                </div>
                                <div className="sidebar-single">
                                    <label>Industry:</label>
                                    <span>Food Industry</span>
                                </div>
                                <div className="sidebar-wrap mb-40">
                                    {/* <p className="mt-60">Website design that works: capture visitors from the first click</p> */}
                                    <h4 className='mt-60'>Your branding should be your best employee. Need a Branding Design estimate?</h4>
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
