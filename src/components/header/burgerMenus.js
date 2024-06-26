import { Link } from 'gatsby';
import React, { useState } from 'react';

const BurgerMenus = ({ setMenuOpen, menuOpen }) => {
    const [home, setHome] = useState(false)
    const [courses, setcourses] = useState(false)
    const [pages, setPages] = useState(false)
    const [project, setProject] = useState(false)

    const openMobileMenu = menu => {

        if (menu === 'home') {
            setHome(!home)
            setcourses(false)
            setBlog(false)
            setPages(false)
            setProject(false)
        }
        else if (menu === 'courses') {
            setHome(false)
            setcourses(!courses)
            setBlog(false)
            setPages(false)
            setProject(false)
        }
        else if (menu === 'pages') {
            setHome(false)
            setcourses(false)
            setBlog(false)
            setProject(false)
            setPages(!pages)
        }
        else if (menu === 'project') {
            setHome(false)
            setcourses(false)
            setBlog(false)
            setPages(false)
            setProject(!project)
        }
    };

    return (
        <div className="fix">
            <div className={menuOpen ? "side-info info-open" : "side-info"}>
                <button className="side-info-close" onClick={() => setMenuOpen(false)}><i className='far fa-times'></i></button>
                <div className="side-info-content">
                    <div className="mm-menu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li className={courses ? "has-droupdown active" : "has-droupdown"}>
                                <a onClick={() => { openMobileMenu('courses'); }}>Services</a>
                                <ul className={courses ? "sub-menu active" : "sub-menu"}>
                                    <li><Link to="/branding">Branding</Link></li>
                                    <li><Link to="/graphic-design">Graphic Design</Link></li>
                                    <li><Link to="/website-design">Website Design</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/projects">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="contact-infos mb-30">
                        <div className="contact-list mb-30">
                            <h4>Contact Info</h4>
                            <ul>
                                <li><img src="/assets/img/icon/sidebar-icon-1.png" className="img-fluid" alt="icon-img" />Houston, Texas</li>
                                <li><img src="/assets/img/icon/footer-icon-1.png" className="img-fluid" alt="icon-img" /><a href="mailto:info@abstract-creative.com">info@abstract-creative.com</a></li>
                                <li><img src="/assets/img/icon/footer-icon-2.png" className="img-fluid" alt="icon-img" /><a href="tel:8323707322">832-370-7322</a></li>
                            </ul>
                            <div className="sidebar__menu--social">
                                <a href="https://www.facebook.com/AbstractCreative" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com/abstr8ct/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenus;
