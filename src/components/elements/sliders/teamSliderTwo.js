import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'
import { Link } from 'gatsby';

const TeamSliderTwo = () => {
    return (
        <div className="team-active">
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
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        }
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true
                    }}
                    navigation={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className="kteam swiper-slides mb-30">
                            <div className="kteam-img">
                                <img src="/assets/img/team/team-img-4.jpg" className="img-fluid" alt="team-img" />
                                <div className="kteam-img-social">
                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link to="/efren-cavazos">Efren Cavazos</Link></h4>
                                <span className="uppercase">Creative Director</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slides mb-30">
                            <div className="kteam-img">
                                <img src="/assets/img/team/team-img-5.jpg" className="img-fluid" alt="team-img" />
                                <div className="kteam-img-social">
                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link to="/angela-cavazos">Angela Carrasco-Cavazos</Link></h4>
                                <span className="uppercase">Porject Manager</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slides mb-30">
                            <div className="kteam-img">
                                <img src="/assets/img/team/team-img-3.jpg" className="img-fluid" alt="team-img" />
                                <div className="kteam-img-social">
                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link to="/allen-van-luu">Allen Van Luu</Link></h4>
                                <span className="uppercase">Art Director</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* <SwiperSlide>
                        <div className="kteam swiper-slides mb-30">
                            <div className="kteam-img">
                                <img src="/assets/img/team/team-img-4.jpg" className="img-fluid" alt="team-img" />
                                <div className="kteam-img-social">
                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link to="/team-details">John Smith</Link></h4>
                                <span className="uppercase">artist</span>
                            </div>
                        </div>
                    </SwiperSlide> */}

                    {/* <SwiperSlide>
                        <div className="kteam swiper-slides mb-30">
                            <div className="kteam-img">
                                <img src="/assets/img/team/team-img-5.jpg" className="img-fluid" alt="team-img" />
                                <div className="kteam-img-social">
                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link to="/team-details">melinda albert</Link></h4>
                                <span className="uppercase">writter</span>
                            </div>
                        </div>
                    </SwiperSlide> */}
                </Swiper>
            </div>
        </div>
    );
};

export default TeamSliderTwo;