import React from 'react';

const QualitySection = () => {
    return (
        <section className="quality-area pt-120 pb-90 fix">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="kquality mb-30" data-aos="zoom-in-right">
                            <div className="kquality-icon">
                                <img src="/assets/img/icon/service-icon-1a.png" className="img-fluid" alt="hands typing on a laptop keyboard with colored penciles around." />
                            </div>
                            <div className="kquality-text fix">
                                <h3 className="mb-20 kquality-text-title">We Deliver the Best Design Quality</h3>
                                <p>Best design demands attention, creativity, and user understanding. We strive for excellence every step of the way to unlock success.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="text-lg-end mb-30" data-aos="zoom-in-left">
                            <div className="kquality-img">
                                <img src="/assets/img/trust/cta-img.jpg" className="img-fluid" alt="cta-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualitySection;
