import React from 'react';

const TeamAchivement = () => {
    return (
        <section className="archivement__area pt-100 pb-40">
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-xl-6 col-lg-6">
                        <div className="archivement-wrapper mb-60">
                            <div className="archivement__thumb w-img">
                                <img src="/assets/img/team/team-img-10.jpg" alt="img not found" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="archivement__box mb-30">
                            <div className="archivement__title">
                                <h3>Great Archivements</h3>
                                <p>Over 20 years of experience as a Senior Art Director. A multi-award-winning digital and print artist with excellent skills in communication, presentation, and teamwork. Art director, layout designer, and typographical expert, with extensive experience using Adobe Creative Suite software. Produced a variety of marketing collateral for print, web, and digital channels, including email automation, web design, and photography.</p>
                            </div>
                            <div className="archivement__thumb-wrapper">
                                <div className="row gx-4">
                                    <div className="col-xxl-4 col-sm-4">
                                        <div className="archivement__thumb w-img mb-30">
                                            <img src="/assets/img/team/01.jpg" alt="img not found" />
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-sm-4">
                                        <div className="archivement__thumb w-img mb-30">
                                            <img src="/assets/img/team/02.jpg" alt="img not found" />
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-sm-4">
                                        <div className="archivement__thumb w-img mb-30">
                                            <img src="/assets/img/team/03.jpg" alt="img not found" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamAchivement;