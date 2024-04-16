import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import Header from '../header/header';
import CtaSection from './ctaSection';
import WhyWeSection from './whyWeSection';
import BenefitsSection from './benefitsSection';
import Funfacts from './factSection';
import Introduction from './introductionSection';
// import Brands from './../elements/brands/brandSection';
// import WebsiteDetailsContent from './websitedesDetailsContent';
import WebSlider from './../elements/sliders/webSlider';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb breadcrumbTitle="Designing a website that is conversion-driven" breadcrumbSubTitle="Website Design" />
                <Introduction introduction="mb--60" />
                {/* <WebsiteDetailsContent /> */}
                <WhyWeSection />
                <WebSlider />
                {/* <Brands /> */}
                <Funfacts />
                <BenefitsSection benefits_section="mb--40" />
                <CtaSection cta_space="cta-area mt-60 mb--60 z-index" />
            </main>
            <Footer />
        </>
    );
};

export default index;