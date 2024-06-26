import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Link } from 'gatsby';

const BlogSlider = () => {
    return (
        <section className="blog-area pt-120 fix" style={{ backgroundImage: "url(/assets/img/blog/blog-bg-1.jpg)" }}>
            <div className="container pb-120">
                <div className="blog-border">
                    <div className='row'>
                        <div className='col-xl-4'>
                            <div className="blog-text pt-60" data-aos="zoom-in">
                                <div className="section-title-wrapper pr-25 mb-50">
                                    <h5 className="section-subtitle mb-20">recent blog posts</h5>
                                    <h2 className="section-title mb-35">Latest News & Articles</h2>
                                    <p className="pr-50">Check out the latest news regularly. Ensure you're informed and up-to-date by utilizing online sources.</p>
                                </div>
                                <div className="kblog-arrow">
                                    <div className="blog-button-prev slide-prev"><i className="far fa-long-arrow-left"></i></div>
                                    <div className="blog-button-next slide-next"><i className="far fa-long-arrow-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-8'>
                            <div className="blog-active swiper-container">
                                <div>
                                    <Swiper
                                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                        spaceBetween={30}
                                        speed={1500}
                                        slidesPerView="auto"
                                        autoplaydisableoninteraction={"false"}
                                        loop={true}
                                        breakpoints={{
                                            320: {
                                                slidesPerView: 1,
                                            },
                                            576: {
                                                slidesPerView: 1,
                                            },
                                            768: {
                                                slidesPerView: 2,
                                            },
                                            1200: {
                                                slidesPerView: 2,
                                            },
                                            1400: {
                                                slidesPerView: 3
                                            }
                                        }}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: true
                                        }}
                                        navigation={{
                                            clickable: true,
                                            nextEl: '.blog-button-next',
                                            prevEl: '.blog-button-prev',
                                        }}
                                    >
                                        <SwiperSlide>
                                            <div className="kblog swiper-slides">
                                                <div className="kblog-img">
                                                    <Link to="/blog-details"><img src="/assets/img/blog/blog-img-1.jpg" className="img-fluid" alt="blog-img" /></Link>
                                                    <span>20 May</span>
                                                </div>
                                                <div className="kblog-text">
                                                    {/* <div className="kblog-meta">
                                                        <Link to="/blog-details"><i className="fal fa-user-circle"></i> by Admin</Link>
                                                        <Link to="/blog-details"><i className="fal fa-comments"></i> 2 Comments</Link>
                                                    </div> */}
                                                    <h3 className="kblog-text-title mb-20">
                                                        <Link to="/blog-details">Your business needs graphic design more than you realize</Link>
                                                    </h3>
                                                    <div className="kblog-text-link">
                                                        <Link to="/blog-details">Read more <i className="far fa-chevron-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="kblog swiper-slides">
                                                <div className="kblog-img">
                                                    <Link to="/blog-details"><img src="/assets/img/blog/blog-img-2.jpg" className="img-fluid" alt="blog-img" /></Link>
                                                    <span>21 May</span>
                                                </div>
                                                <div className="kblog-text">
                                                    {/* <div className="kblog-meta">
                                                        <Link to="/blog-details"><i className="fal fa-user-circle"></i> by Admin</Link>
                                                        <Link to="/blog-details"><i className="fal fa-comments"></i> 2 Comments</Link>
                                                    </div> */}
                                                    <h3 className="kblog-text-title mb-20">
                                                        <Link to="/blog-details">What is rebranding, and when is it to be used?</Link>
                                                    </h3>
                                                    <div className="kblog-text-link">
                                                        <Link to="/blog-details">Read more <i className="far fa-chevron-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="kblog swiper-slides">
                                                <div className="kblog-img">
                                                    <Link to="/blog-details"><img src="/assets/img/blog/blog-img-3.jpg" className="img-fluid" alt="blog-img" /></Link>
                                                    <span>22 May</span>
                                                </div>
                                                <div className="kblog-text">
                                                    {/* <div className="kblog-meta">
                                                        <Link to="/blog-details"><i className="fal fa-user-circle"></i> by Admin</Link>
                                                        <Link to="/blog-details"><i className="fal fa-comments"></i> 2 Comments</Link>
                                                    </div> */}
                                                    <h3 className="kblog-text-title mb-20">
                                                        <Link to="/blog-details">Things to consider when designing a website</Link>
                                                    </h3>
                                                    <div className="kblog-text-link">
                                                        <Link to="/blog-details">Read more <i className="far fa-chevron-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        {/* <SwiperSlide>
                                            <div className="kblog swiper-slides">
                                                <div className="kblog-img">
                                                    <Link to="/blog-details"><img src="/assets/img/blog/blog-img-4.jpg" className="img-fluid" alt="blog-img" /></Link>
                                                    <span>24 May</span>
                                                </div>
                                                <div className="kblog-text">
                                                    <div className="kblog-meta">
                                                        <Link to="/blog-details"><i className="fal fa-user-circle"></i> by Admin</Link>
                                                        <Link to="/blog-details"><i className="fal fa-comments"></i> 2 Comments</Link>
                                                    </div>
                                                    <h3 className="kblog-text-title mb-20">
                                                        <Link to="/blog-details">Our Strategy Create Business Growth</Link>
                                                    </h3>
                                                    <div className="kblog-text-link">
                                                        <Link to="/blog-details">Read more <i className="far fa-chevron-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="kblog swiper-slides">
                                                <div className="kblog-img">
                                                    <Link to="/blog-details"><img src="/assets/img/blog/blog-img-5.jpg" className="img-fluid" alt="blog-img" /></Link>
                                                    <span>25 May</span>
                                                </div>
                                                <div className="kblog-text">
                                                    <div className="kblog-meta">
                                                        <Link to="/blog-details"><i className="fal fa-user-circle"></i> by Admin</Link>
                                                        <Link to="/blog-details"><i className="fal fa-comments"></i> 2 Comments</Link>
                                                    </div>
                                                    <h3 className="kblog-text-title mb-20">
                                                        <Link to="/blog-details">We work with change oriented executives</Link>
                                                    </h3>
                                                    <div className="kblog-text-link">
                                                        <Link to="/blog-details">Read more <i className="far fa-chevron-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide> */}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSlider;