import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Link } from 'gatsby';

const ProjectSlider = () => {
    return (
        <div className="project-active">
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
                            <img src="/assets/img/project/project-big-img-1.jpg" className="img-fluid" alt="project_img" />
                            <div className="kproject-text">
                                <div className="kproject-text-content">
                                    <span>Graphic Design</span>
                                    <h5 className="kproject-text-title"><Link to="/muscle-rehab">Muscle Rehab</Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link to="/muscle-rehab"><i className="far fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slides">
                            <img src="/assets/img/project/project-big-img-2.jpg" className="img-fluid" alt="project_img" />
                            <div className="kproject-text">
                                <div className="kproject-text-content">
                                    <span>Branding</span>
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
                            <img src="/assets/img/project/project-big-img-3.jpg" className="img-fluid" alt="project_img" />
                            <div className="kproject-text">
                                <div className="kproject-text-content">
                                    <span>Website Design</span>
                                    <h5 className="kproject-text-title"><Link to="/patco">Patco Manufacturing</Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link to="/patco"><i className="far fa-long-arrow-right"></i></Link>
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
                                    <h5 className="kproject-text-title"><Link to="/silestone-brochure">Silestone Kitchen and Bath Brochure</Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link to="/silestone-brochure"><i className="far fa-long-arrow-right"></i></Link>
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
                                    <h5 className="kproject-text-title"><Link to="/six-ways">Six Ways to Reduce Well Intervention</Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link to="/six-ways"><i className="far fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slides">
                            <img src="/assets/img/project/project-big-img-6.jpg" className="img-fluid" alt="project_img" />
                            <div className="kproject-text">
                                <div className="kproject-text-content">
                                    <span>Branding</span>
                                    <h5 className="kproject-text-title"><Link to="/project-details">Schlumberger Branding Guidelines</Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link to="/project-details"><i className="far fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* <SwiperSlide>
                        <div className="kproject swiper-slides">
                            <img src="/assets/img/project/project-img-3.jpg" className="img-fluid" alt="project_img" />
                            <div className="kproject-text">
                                <div className="kproject-text-content">
                                    <span>Web Devolopment</span>
                                    <h5 className="kproject-text-title"><Link to="/project-details">Fimlor Experience</Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link to="/project-details"><i className="far fa-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> */}
                </Swiper>
            </div>
        </div>
    );
};

export default ProjectSlider;