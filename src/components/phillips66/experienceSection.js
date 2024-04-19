import React from 'react';
import { Link } from 'gatsby';


const ExperienceSection = () => {
    return (
        <section className="project-details-area pt-120 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="project-big-thumb">
                            <img src="/assets/img/project/project-big-img-p66.jpg" alt="Open brochure showing inner pages" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                        <div className="p-details-content mb-40">
                            <h3>Phillips 66 Annual Report</h3>
                            <p>As one of the largest energy companies in the world, Phillips 66 has a lot to showcase in its annual report. Well-designed and visually appealing information is essential to convey the company's message and financial performance to its stakeholders. That's where graphic designing comes into play.</p>
                            <p>The Phillips 66 annual report is an excellent example of effective graphic design in financial reporting. The piece features a clean, modern layout reflecting the company's brand image. A consistent color palette, typography, and imagery create a cohesive look and feel throughout the report.</p>
                            <p>The cover page sets the tone for the report with a striking image representing the company's commitment to innovation. Using bold typography and a simple layout makes the cover page stand out and grabs the reader's attention.</p>
                            <p>The use of infographics and data visualization is another highlight of the report. The designers have presented complex financial data in easy-to-understand charts and graphs. Using color coding and icons helps the reader quickly identify key trends and insights.</p>
                            <p>The report also includes high-quality images of the company's operations and employees, which adds a personal touch and helps the reader connect with the brand. The photographs are carefully selected and edited to maintain a consistent visual style throughout the report.</p>
                            <p>Overall, the Phillips 66 annual report is an excellent example of how graphic design can enhance the impact of financial reporting. The designers have used a combination of typography, color, imagery, and data visualization to create a visually compelling report that effectively communicates the company's message to its stakeholders.</p>
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
                                    <span><Link to="/graphic-design">Graphic Design</Link>,
                                        <Link to="/branding"> Branding</Link></span>
                                </div>
                                <div className="sidebar-single">
                                    <label>Industry:</label>
                                    <span>Kitchen and Bath</span>
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
