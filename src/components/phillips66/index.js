import React from 'react';
import Breadcrumb from '../common/breadcrumbtwo';
import Footer from '../footer/footer';
import Header from '../header/header';
import ExperienceSection from './experienceSection';
import PortPagination from './portPagination';
// import RecentWok from './recentWok';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb breadcrumbTitle="Phillips 66 Annual Report" breadcrumbSubTitle="Portfolio" />
                <ExperienceSection />
                <PortPagination />
            </main>
            <Footer />
        </>
    );
};

export default index;
