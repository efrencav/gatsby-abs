import { Link } from 'gatsby';
import React from 'react';
import FooterBottom from './footerBottom';

const Footer = ({ footer_space }) => {
    return (
        <footer className={`${footer_space ? footer_space : "pt-95 position-relative"}`} style={{ backgroundImage: "url(/assets/img/bg/footer-bg.jpg)" }}>
            <div className="common-shape-wrapper">
                <div className="common-shape-inner"></div>
            </div>
            <div className="footer-area pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            <div className="widget mb-30">
                                <div className="footer-logo mb-25">
                                    <Link to="/"><img src="/assets/img/logo/logo-light.png" className="img-fluid" alt="footer-logo" /></Link>
                                </div>
                                <p className="mb-20 pr-35">Our clients hire us to supplement their in-house marketing team. Our specialty services are website design, branding, and graphic design.</p>
                                <div className="footer-social">
                                    {/* <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a> */}
                                    <a href="https://www.facebook.com/AbstractCreative" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                                    {/* <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"></i></a> */}
                                    <a href="https://www.instagram.com/abstr8ct/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div className="widget mb-30">
                                <h4 className="widget-title mb-35">Links</h4>
                                <ul>
                                    <li><Link to="/services">Our Services</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/projects">Our Portfolio</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    {/* <li><Link to="/contact">Help</Link></li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="widget widget-contact mb-30">
                                <h4 className="widget-title mb-35">Contact</h4>
                                <ul>
                                    <li className="pb-10">Houston, Texas</li>
                                    <li><img src="/assets/img/icon/footer-icon-1.png" className="img-fluid" alt="icon-img" /><a href="mailto:info@abstract-creative.com">info@abstract-creative.com</a></li>
                                    <li><img src="/assets/img/icon/footer-icon-2.png" className="img-fluid" alt="icon-img" /><a href="tel:926668880000">+1-832-370-7322</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </footer>
    );
};

export default Footer;
