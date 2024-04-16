import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import BrandSection from '../elements/brands/brandSection';
import Footer from '../footer/footer';
import Header from '../header/header';
import QualitySection from '../home/qualitySection';
import ServiceCategories from './serviceCategories';
import Intro from './intro';
import WebServices from './webServices';
import BrandServices from './brandServices';
import DesignServices from './designServices';
// import ServiceSectionThree from './serviceSectionThree';
import WhyWeThree from './whyWeThree';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb breadcrumbTitle="Services" breadcrumbSubTitle="Services" />
                {/* <ServiceSectionThree /> */}
                <Intro />
                <WebServices />
                <BrandServices />
                <DesignServices />
                {/* <WhyWeThree /> */}
                {/* <ServiceCategories /> */}
                {/* <BrandSection brand_space="brand-area3 pt-100 pb-100" /> */}
                <QualitySection />
            </main>
            <Footer />
        </>
    );
};

export default index;