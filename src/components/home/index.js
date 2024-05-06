import React from 'react';
import AboutSection from './aboutSection';
import CtaSection from './ctaSection';
import HeroSection from './heroSection';
import ProjectSection from './projectSection';
import ServiceSection from './serviceSection';
import TestimonialSlider from '../elements/testimonials/testimonialSlider';
import QualitySection from './qualitySection';
import Footer from '../footer/footer';
import Header from '../header/header';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <ServiceSection />
                <CtaSection />
                <AboutSection />
                <ProjectSection />
                <TestimonialSlider />
                <QualitySection />
            </main>
            <Footer />
        </>
    );
};

export default index;
