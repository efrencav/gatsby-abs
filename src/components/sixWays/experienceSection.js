import React from 'react';
import { Link } from 'gatsby';

const ExperienceSection = () => {
    return (
        <section className="project-details-area pt-120 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="project-big-thumb">
                            <img src="/assets/img/project/project-big-img-six-ways.jpg" alt="img not found" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                        <div className="p-details-content mb-40">
                            <h3>Six Ways to Reduce Well Intervention Costs</h3>
                            <p>Creating an award-winning brochure requires a combination of well-executed graphic design and compelling content. The challenge is to present the information in a visually appealing and engaging way that captures the reader's interest and communicates the message effectively. In the case of the "Six Ways to Reduce Well Intervention" brochure, the designers have succeeded in doing just that.</p>
                            <p>The brochure features a clean, modern layout with a consistent color palette and typography that reflects the brand image of the company. The cover page sets the tone for the brochure with a striking image that represents the main theme of the content. Using bold typography and a simple layout grabs the reader's attention and entices them to delve deeper into the brochure.</p>
                            <p>The use of infographics and data visualization is a key feature of the brochure. The designers have presented complex data in easy-to-understand charts and graphs that help the reader identify key trends and insights. Using color coding and icons adds an extra layer of clarity to the information presented.</p>
                            <p>The brochure also includes high-quality images that complement the content and help the reader connect with the brand. The photographs are carefully selected and edited to maintain a consistent visual style throughout the brochure.</p>
                            <p>Overall, the "Six Ways to Reduce Well Intervention" brochure is an excellent example of how graphic design can enhance the impact of content marketing. The designers have used a combination of typography, color, imagery, and data visualization to create a visually compelling brochure that effectively communicates the company's message to its target audience. It's no wonder that it won an award for its exceptional design and content.</p>
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
                                    <span>Oil & Gas</span>
                                </div>
                                <div className="sidebar-wrap mb-40">
                                    {/* <p className="mt-60">Website design that works: capture visitors from the first click</p> */}
                                    <h4 className='mt-60'>Your graphic design should be your best employee. Need a Graphic Design estimate?</h4>
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