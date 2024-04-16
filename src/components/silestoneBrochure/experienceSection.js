import React from 'react';
import { Link } from 'gatsby';


const ExperienceSection = () => {
    return (
        <section className="project-details-area pt-120 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="project-big-thumb">
                            <img src="/assets/img/project/project-big-img-silestone-brochure.jpg" alt="Open brochure showing inner pages" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                        <div className="p-details-content mb-40">
                            <h3>Silestone Brochure</h3>
                            <p>Silestone owes its success to its people: a diverse, strong workforce distributed in more than 20 countries and comprehensive distribution centers and service platforms across the globe.</p>
                            <p>To design an elegant sales brochure that would help Silestone communicate behind the company's successes and leadership lies a global team united across borders towards a common goal: Consistently delivering innovative kitchen products.</p>
                            <p>The simplicity of the cover design—clean and elegant—creates immediate impact and generates curiosity. The color is restricted to the brand's red on a fixed spread with a mixture of serif and sans serif fonts to identify the brand's message. Page after page inside, the brochure design is filled with stunning color tones and elegant photography that bring out the complexity behind the Silestone product performance. The style and tone are consistent with Silestone's website, which I was also involved with in the design.</p>
                            <p>The sales brochure includes detailed product information and includes over 60 colors of different surface textures highlighted with unique icon designs.The sales brochure is full of personality—the perfect combination of engaging and memorable imagery and laid out information. The significantly large font use and its simplicity of color use help make a strong and confident statement about the company's passion and commitment to deliver the best solutions for its customers and make a difference to the kitchens of customers all over the world.</p>
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