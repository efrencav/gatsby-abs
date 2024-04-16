import { Link } from 'gatsby';
import React from 'react';

const ExperienceSection = () => {
    return (
        <section className="project-details-area pt-120 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="project-big-thumb">
                            <img src="/assets/img/project/project-big-img-kinsmen-web.jpg" alt="Silestone Website" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                        <div className="p-details-content mb-40">
                            <h3>Kinsmen Group Website</h3>
                            <p>The Kinsmen Group understands the importance of having a website that accurately represents your brand and communicates your message effectively. That's why we offer comprehensive website design services to ensure that your online presence is professional, user-friendly, and visually appealing.</p>
                            <p>Our team of experienced designers will work closely with you to understand your business and your customers, and develop a website that is tailored to your specific needs. We use the latest design tools and techniques to create a website that is not only beautiful to look at, but also easy to navigate and optimized for search engines.</p>
                            <p>We also understand the importance of having a website that is mobile-responsive, as more and more people are accessing the internet on their smartphones and tablets. That's why we ensure that your website is fully responsive and optimized for all devices, so your customers can easily access your site no matter where they are.</p>
                            <p>But our services don't stop at website design. We also offer ongoing website maintenance and support to ensure that your site remains secure, up-to-date, and fully functional. And with our competitive pricing and fast turnaround times, you can be confident that you're getting the best value for your investment.</p>
                            <p>So why wait? Contact Abstract Creative today to learn more about our website design services and how we can help you create an online presence that truly represents your brand.</p>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        <div className="sidebar-wrap mb-40">
                            <div className="sidebar-right">
                                <div className="sidebar-single">
                                    <label>Clients:</label>
                                    <span>Kinsmen Group</span>
                                </div>
                                <div className="sidebar-single">
                                    <label>Category:</label>
                                    <span><Link to="/website-design">Website Design, </Link>
                                        <Link to="/branding">Branding</Link></span>
                                </div>
                                <div className="sidebar-single">
                                    <label>Industry:</label>
                                    <span>Document Control</span>
                                </div>
                                <div className="sidebar-wrap mb-40">
                                    {/* <p className="mt-60">Website design that works: capture visitors from the first click</p> */}
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