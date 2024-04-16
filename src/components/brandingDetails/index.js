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
import BrandingSlider from './../elements/sliders/brandingSlider';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb breadcrumbTitle="Create a brand that reflects your unique personality." breadcrumbSubTitle="Branding" />
                <Introduction introduction="mb--60" />
                {/* <WebsiteDetailsContent /> */}
                <WhyWeSection />
                <BrandingSlider />
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