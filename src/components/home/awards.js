// import { Link } from 'gatsby';
import React from 'react';

const Awards = () => {
    return (
                <section className="awards-section space" style={{ backgroundImage: "url(/assets/img/bg/breadcrumb-bg4.jpg)" }}>
            <div className="container-style1">
                <div className="title-area white">
                    <span className="sub-title">Winning Awards</span>
                    <h2 className="sec-title vs_fade_bottom vs-char-animation">We Create Award <br />Winning Projects
                    </h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-12">
                        <div className="fact-counter-two">
                            <div className="counter-block-two vs_fade_bottom">
                                <div className="content">
                                    <i className="icon flaticon-router"></i>
                                    <div className="persent">
                                        <span className="counter" data-counterup-time="1500"
                                            data-counterup-delay="0" data-counterup-beginat="0">20</span>
                                        <span className="persent-tag">+</span>
                                    </div>
                                    <h6 className="counter-title">years of experience</h6>
                                </div>
                            </div>
                            <div className="counter-block-two vs_fade_bottom">
                                <div className="content">
                                    <i className="icon flaticon-router"></i>
                                    <div className="persent">
                                        <span className="counter" data-counterup-time="1500"
                                            data-counterup-delay="0" data-counterup-beginat="0">40</span>
                                        <span className="persent-tag">+</span>
                                    </div>
                                    <h6 className="counter-title">satisfied customers</h6>
                                </div>
                            </div>
                            <div className="counter-block-two vs_fade_bottom">
                                <div className="content">
                                    <i className="icon flaticon-router"></i>
                                    <div className="persent">
                                        <span className="counter" data-counterup-time="1500"
                                            data-counterup-delay="0" data-counterup-beginat="0">13</span>
                                        <span className="persent-tag">+</span>
                                    </div>
                                    <h6 className="counter-title">earned awards</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-12">
                        <ul className="award-list">
                            <li>
                                <div className="award-content vs_fade_bottom mb-20">
                                    <div className="award-info">
                                        <span>2021</span>
                                        <h4 className="title">3 ANA Lantern Awards</h4>
                                    </div>
                                    <div className="award-img">
                                        <img src="assets/img/about/award1-2.png" className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="award-content vs_fade_bottom mb-20">
                                    <div className="award-info v2">
                                        <span>2018</span>
                                        <h4 className="title">1 AMA Crystal Award</h4>
                                    </div>
                                    <div className="award-img">
                                        <img src="assets/img/about/award1-3.png" className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="award-content vs_fade_bottom mb-20">
                                    <div className="award-info">
                                        <span>2017</span>
                                        <h4 className="title">5 BMA Lantern Awards</h4>
                                    </div>
                                    <div className="award-img">
                                        <img src="assets/img/about/award1-1.png" className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="award-content vs_fade_bottom mb-20">
                                    <div className="award-info">
                                        <span>2015</span>
                                        <h4 className="title">5 Graphic Excellence Awards</h4>
                                    </div>
                                    <div className="award-img">
                                        <img src="assets/img/about/award1-4.png" className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards;
