import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'

const TestimonialSlider = ({ testimonial_space }) => {
    return (
        <section className={`${testimonial_space ? testimonial_space : "testimonial-area pt-115 pb-85"}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-wrapper text-center mb-45">
                            <h5 className="section-subtitle mb-20">Client testimonials</h5>
                            <h2 className="section-title mb-35">What they say?</h2>
                        </div>
                    </div>
                </div>

                <div className="testimonial-active">
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
                                    slidesPerView: 1,
                                },
                                1200: {
                                    slidesPerView: 1,
                                },
                                1400: {
                                    slidesPerView: 1
                                }
                            }}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: true
                            }}
                        >
                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slides">
                                    <div className="ktestimonial-text">
                                        <p>I worked with Efren extensively for 6+ years, often traveling with him to various photo shoots around the country. He was fantastically organized, thoughtful, and motivated both me, the crew, and his fellow SLB colleagues with a gentle manner that brought out the best in everyone. Efren is one of those wonderful art directors that you develop a healthy rapport with and that you're more than happy to go the extra mile on his behalf. Traveling for extended periods of time together often shows a person's true colors and personality, and I can say that Efren is a genuinely nice person, interesting, pleasant to be with, and thoughtful about his craft and work. I hope we get to work together again down the road.</p>
                                    </div>
                                    <div className="ktestimonial-author">
                                        <div className="ktestimonial-author-img">
                                            <img src="/assets/img/testimonial/robert-seale.jpeg" className="img-fluid" alt="client-img" />
                                        </div>
                                        <div className="ktestimonial-author-text">
                                            <h5 className="uppercase">Robert Seale</h5>
                                            <span className="uppercase">Owner, Robert Seale Photography, Inc.</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slides">
                                    <div className="ktestimonial-text">
                                        <p>I had the privilege to work with Efren on several projects and he always brought "outside the box" ideas and was quick to construct a plan for implementation. The two years we worked together at Schlumberger, I quickly realized that Efren is very dedicated to his work and has such great work ethic. He is a critical thinker and always delivered the results needed. I found it easy to work with Efren and he enjoyed sharing his knowledge and expertise wherever needed.</p>
                                    </div>
                                    <div className="ktestimonial-author">
                                        <div className="ktestimonial-author-img">
                                            <img src="/assets/img/testimonial/jeanelle-lopez.jpeg" className="img-fluid" alt="client-img" />
                                        </div>
                                        <div className="ktestimonial-author-text">
                                            <h5 className="uppercase">Jeanelle Lopez</h5>
                                            <span className="uppercase">Quality Assurance Specialist at Schlumberger</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slides">
                                    <div className="ktestimonial-text">
                                        <p>It is a real honor for me to have the opportunity to recommend Efren as an excellent professional but even more important as a wonderful human being. During the years we worked together for Schlumberger as Art Directors, Efren demonstrated an impeccable professional ethic, exquisite creativity and above all, adaptability at the different times when the circumstances of "learning & growth" put us to the test. Efren took initiatives for his growth and transition to areas that were out of his comfort zone which position him today as an excellent and versatile creative. I won a friend for life with him and his beautiful family ... ohhh also expect donuts every Friday even though he knows you are on a diet!</p>
                                    </div>
                                    <div className="ktestimonial-author">
                                        <div className="ktestimonial-author-img">
                                            <img src="/assets/img/testimonial/jacqui-vera.jpeg" className="img-fluid" alt="client-img" />
                                        </div>
                                        <div className="ktestimonial-author-text">
                                            <h5 className="uppercase">Jacqueline Vera</h5>
                                            <span className="uppercase">Senior Art Director at Schlumberger</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slides">
                                    <div className="ktestimonial-text">
                                        <p>Efren is a multitalented art director. His ability to combine conceptual, creative and strategic thinking make him an asset to any creative project or campaign.<br />
                                            During our time together at Schlumberger, I found Efren to be very easy to work with. His dedication to his craft was evident and I saw him push himself to constantly add to his skill set. He recently completed a course in full stack web development and was able to immediately start applying his newly acquired skills to his job.<br />
                                            I highly recommend Efren for his ability to be both creative and analytical and proven success at Schlumberger executing creative visions by collaboratively working with marketing managers and strategists and a creative team.</p>
                                    </div>
                                    <div className="ktestimonial-author">
                                        <div className="ktestimonial-author-img">
                                            <img src="/assets/img/testimonial/kirk-eggleston.jpeg" className="img-fluid" alt="client-img" />
                                        </div>
                                        <div className="ktestimonial-author-text">
                                            <h5 className="uppercase">Kirk Eggleston</h5>
                                            <span className="uppercase">Public and Media Relations | Corporate Storytelling | Project Management | Content Strategy</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slides">
                                    <div className="ktestimonial-text">
                                        <p>I worked both directly and indirectly with Efren for more than 6 years. He was an instrumental team member, and lead Art Director for the group. His design skill was a showcase to others on the team. Efren’s desire to always contribute in meaningful ways meant he was proactive on projects within the team, but also in his personal life where he attended school to learn new programming skills. He takes part in AIGA as a board member, and is always trying to improve his skillset. Efren is a punctual, responsive team player, and can run projects from start to completion. He would be an asset on anyone's team.</p>
                                    </div>
                                    <div className="ktestimonial-author">
                                        <div className="ktestimonial-author-img">
                                            <img src="/assets/img/testimonial/andrew-burwell.jpeg" className="img-fluid" alt="client-img" />
                                        </div>
                                        <div className="ktestimonial-author-text">
                                            <h5 className="uppercase">Andrew Burwell</h5>
                                            <span className="uppercase">Digital Strategist at Schlumberger</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slides">
                                    <div className="ktestimonial-text">
                                        <p>I had the pleasure of working with Efren for several years at Schlumberger. Our roles frequently crossed and Efren always provided exactly what I needed, when I needed it. I've always found him to be ambitious, inquisitive, and self-motivated to find creative solutions in challenging conditions. His skillset and personal demeanor are an asset to any team.</p>
                                    </div>
                                    <div className="ktestimonial-author">
                                        <div className="ktestimonial-author-img">
                                            <img src="/assets/img/testimonial/eric-taylor.jpeg" className="img-fluid" alt="client-img" />
                                        </div>
                                        <div className="ktestimonial-author-text">
                                            <h5 className="uppercase">Eric Taylor</h5>
                                            <span className="uppercase">Web Manager at Kelsey Seybold</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;