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
                    <h2 className="section-centered-title mb-35">Website Design Portfolio</h2>
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
                            <img src="/assets/img/project/project-big-img-9.jpg" className="img-fluid" alt="project_img" />
                            <div className="kproject-text">
                                <div className="kproject-text-content">
                                    <span>Website Design</span>
                                    <h5 className="kproject-text-title"><Link to="/kinsmen">Kinsmen Group</Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link to="/kinsmen"><i className="far fa-long-arrow-right"></i></Link>
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
                            <img src="/assets/img/project/project-big-img-10.jpg" className="img-fluid" alt="project_img" />
                            <div className="kproject-text">
                                <div className="kproject-text-content">
                                    <span>Website Design</span>
                                    <h5 className="kproject-text-title"><Link to="/twhe">Texas Women in Higher Education</Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link to="/twhe"><i className="far fa-long-arrow-right"></i></Link>
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
