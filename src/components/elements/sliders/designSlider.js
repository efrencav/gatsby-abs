import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Link } from 'gatsby';

const ProjectSlider = () => {
    return (
        <div className="project-active">
            <div className="why-we-left mt-60 mb-40 mr-90" data-aos="fade-up-right" data-aos-duration="1000">
                <div className="section-title-wrapper centered">
                    <h5 className="section-centered-subtitle mb-20">Our Work</h5>
                    <h2 className="section-centered-title mb-35">Graphic Design Portfolio</h2>
                    <p className='centered'>Solutions for B2C, B2B, and eCommerce<br />
                        <strong>Conversion, engagement, and traffic optimization.</strong>
                    </p>
                </div>
            </div>
            <div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={30}
                    slidesPerView="auto"
                    speed={1500}
                    autoplaydisableoninteraction={"false"}
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                        1400: {
                            slidesPerView: 4,
                        }
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true
                    }}
                    navigation={{
                        clickable: true,
                        nextEl: '.project-button-next',
                        prevEl: '.project-button-prev',
                    }}
                >

                    <SwiperSlide>
                        <div className="kproject swiper-slides">
                            <img src="/assets/img/project/project-big-img-7.jpg" className="img-fluid" alt="project_img" />
                            <div className="kproject-text">
                                <div className="kproject-text-content">
                                    <span>Graphic Design</span>
                                    <h5 className="kproject-text-title"><Link to="/phillips66">Phillips 66 Annual Report</Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link to="/phillips66"><i className="far fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slides">
                            <img src="/assets/img/project/project-big-img-2.jpg" className="img-fluid" alt="project_img" />
                            <div className="kproject-text">
                                <div className="kproject-text-content">
                                    <span>Graphic Design</span>
                                    <h5 className="kproject-text-title"><Link to="/cafe-diario">Cafe Diario</Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link to="/cafe-diario"><i className="far fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slides">
                            <img src="/assets/img/project/project-big-img-5.jpg" className="img-fluid" alt="project_img" />
                            <div className="kproject-text">
                                <div className="kproject-text-content">
                                    <span>Graphic Design</span>
                                    <h5 className="kproject-text-title"><Link to="/six-ways">Six Ways to Save on Well Intervention</Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link to="/six-ways"><i className="far fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slides">
                            <img src="/assets/img/project/project-big-img-4.jpg" className="img-fluid" alt="project_img" />
                            <div className="kproject-text">
                                <div className="kproject-text-content">
                                    <span>Graphic Design</span>
                                    <h5 className="kproject-text-title"><Link to="/silestone-brochure">Silestone Brochure</Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link to="/silestone-brochure"><i className="far fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default ProjectSlider;
