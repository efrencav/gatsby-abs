import React from 'react';
import { Link } from 'gatsby'

const ExperienceSection = () => {
    return (
        <section className="project-details-area pt-120 pb-70">
            <div className="container">
                {/* <div className="row">
                    <div className="col-xxl-12">
                        <div className="project-big-thumb">
                            <img src="/assets/img/project/project-big-img-muscle-rehab.jpg" alt="img not found" />
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                        <div className="p-details-content mb-40">
                            <h3>Muscle Rehab</h3>
                            <p>Muscle Rehab, as a brand, has expanded quite well and claims assurance in its quality.</p>
                            <p>Muscle Rehab was preparing to launch with a line of premium bath bombs and bath salts for athletes. They faced an industry that focused on the female audience. They needed to chart a new course.</p>
                            <img className="mb-20" src="/assets/img/project/mr-project-big-img-1.jpg" alt="img not found" />
                            <p>Confident, unexpected, enticing, the creative concept draws your attention by showing the product in its use. We created a brand, from strategy and narrative to visual identity and packaging, that merges all audiences—ideal for a product that's both rigorous and tended by hand.</p>
                            <img className="mb-20" src="/assets/img/project/mr-project-big-img-2.jpg" alt="img not found" />
                            <p>Premium within reach. Muscle Rehab's market to young adult athletes, ages 18 to 35, where sore muscles are a part of an active lifestyle. To reach them, we needed to create more than a bath bomb brand. We needed to stand for something greater. So we designed a brand for the doers—something to live up to. The result is a lifestyle brand that values ambition and hard work, as well as unwinding time and connecting with friends.</p>
                            <img className="mb-20" src="/assets/img/project/mr-project-big-img-3.jpg" alt="img not found" />
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        <div className="sidebar-wrap mb-40">
                            <div className="sidebar-right">
                                <div className="sidebar-single">
                                    <label>Clients:</label>
                                    <span>Enfusia</span>
                                </div>
                                <div className="sidebar-single">
                                    <label>Category:</label>
                                    <span><Link to="/graphic-design">Graphic Design</Link>,
                                        <Link to="/branding"> Branding</Link></span>
                                </div>
                                <div className="sidebar-single">
                                    <label>Industry:</label>
                                    <span>Beauty Products</span>
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
