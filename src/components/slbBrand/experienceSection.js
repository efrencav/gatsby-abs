import { Link } from 'gatsby';
import React from 'react';

const ExperienceSection = () => {
    return (
        <section className="project-details-area pt-120 pb-70">
            <div className="container">
                {/* <div className="row">
                    <div className="col-xxl-12">
                        <div className="project-big-thumb">
                            <img src="/assets/img/project/six-ways-1.jpg" alt="Well Intervention Catalog" />
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                        <div className="p-details-content mb-40">
                            <h3>Schlumberger Branding Guidelines</h3>
                            <div className="row">
                                <div className="col">
                                    <img className='mb-20' src="/assets/img/project/slb-brand-2.jpg" alt="Coffee packaging" />
                                </div>
                                <div className="col">
                                    <img className='mb-20' src="/assets/img/project/slb-brand-1.jpg" alt="Coffee packaging" />
                                </div>
                            </div>
                            <p>Schlumberger is a multinational oilfield services company that provides a range of technology, project management, and information solutions to the oil and gas industry. As one of the world's largest oilfield services companies, Schlumberger has a strong brand presence in the industry.
                            </p> <div className="row">
                                <div className="col">
                                    <img className='mb-20' src="/assets/img/project/slb-brand-3.jpg" alt="Coffee packaging" />
                                </div>
                                <div className="col">
                                    <img className='mb-20' src="/assets/img/project/slb-brand-4.jpg" alt="Coffee packaging" />
                                </div>
                            </div>
                            <p>To maintain and strengthen its brand image, Schlumberger has established a set of branding guidelines that ensure consistency in the use of its brand assets across all communication channels. The guidelines provide clear instructions on the use of the Schlumberger logo, typography, color palette, imagery, and other visual elements.</p> <div className="row">
                                <div className="col">
                                    <img className='mb-20' src="/assets/img/project/slb-brand-5.jpg" alt="Coffee packaging" />
                                </div>
                                <div className="col">
                                    <img className='mb-20' src="/assets/img/project/slb-brand-6.jpg" alt="Coffee packaging" />
                                </div>
                            </div>
                            <p>The Schlumberger logo is a distinctive symbol that represents the company's values, expertise, and innovation. It consists of the company name in a bold, sans-serif font, accompanied by a stylized red symbol that resembles a wave or a drilling bit. The logo should always be used in its original form, without any modifications or alterations.</p> <div className="row">
                                <div className="col">
                                    <img className='mb-20' src="/assets/img/project/slb-brand-7.jpg" alt="Coffee packaging" />
                                </div>
                                <div className="col">
                                    <img className='mb-20' src="/assets/img/project/slb-brand-8.jpg" alt="Coffee packaging" />
                                </div>
                            </div>
                            <p>The color palette used in Schlumberger's branding is a combination of blue and gray. Red is the primary color, symbolizing energy, passion, and innovation, while blue represents stability, reliability, and trust. Gray is used as a neutral color for background elements and typography</p> <div className="row">
                                <div className="col">
                                    <img className='mb-20' src="/assets/img/project/slb-brand-9.jpg" alt="Coffee packaging" />
                                </div>
                                <div className="col">
                                    <img className='mb-20' src="/assets/img/project/slb-brand-10.jpg" alt="Coffee packaging" />
                                </div>
                            </div>
                            <p>Overall, the Schlumberger branding guidelines are designed to ensure consistency and coherence in the company's visual identity across all communication channels. By following these guidelines, the company can maintain a strong and recognizable brand image that reflects its values and expertise in the oil and gas industry.</p>
                            <p>So why wait? Contact Abstract Creative today to learn more about our website design services and how we can help you create an online presence that truly represents your brand.</p>
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
                                    <span><Link to="/graphic-design">Graphic Design, </Link>
                                        <Link to="/branding">Branding</Link></span>
                                </div>
                                <div className="sidebar-single">
                                    <label>Industry:</label>
                                    <span>Oil and Gas</span>
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
