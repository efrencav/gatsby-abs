import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

const HeroSection = () => {
    return (
        <section className="slider-area fix position-relative">
            <div className="slider-active">
                <div className="swiper-wrapperr">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                        effect="fade"
                        spaceBetween={30}
                        slidesPerView="auto"
                        autoplaydisableoninteraction={"false"}
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1
                            },
                            1200: {
                                slidesPerView: 1,
                            }
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true
                        }}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <div className="single-slider slider-height swiper-slides" data-swiper-autoplay="10000">
                                <div className="slide-bg" style={{ backgroundImage: "url(/assets/img/slider/slider-1.jpg)" }}></div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="kslider z-index">
                                                <h5 className="kslider--subtitle mb-25">Welcome to Abstract Creative</h5>
                                                <h2 className="kslider--title mb-40">A Digital Design <br />Agency</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="slider-paginations slide-dots"></div>
            </div>
        </section>
    );
};

export default HeroSection;
