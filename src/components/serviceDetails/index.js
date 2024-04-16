import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import Header from '../header/header';
// import ServiceMain from './serviceMain';
import ServiceDetailsContent from './serviceDetailsContent';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb breadcrumbTitle="Service Details" breadcrumbSubTitle="Service Details" />
                <ServiceDetailsContent />
            </main>
            <Footer />
        </>
    );
};

export default index;