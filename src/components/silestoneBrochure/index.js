import React from 'react';
import Breadcrumb from '../common/breadcrumbtwo';
import Footer from '../footer/footer';
import Header from '../header/header';
import ExperienceSection from './experienceSection';
import PortPagination from './portPagination';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb breadcrumbTitle="Silestone Brochure" breadcrumbSubTitle="Portfolio" />
                <ExperienceSection />
                <PortPagination />
            </main>
            <Footer />
        </>
    );
};

export default index;
