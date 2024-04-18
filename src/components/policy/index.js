import React from 'react';
import Breadcrumb from '../common/breadcrumbtwo';
import Footer from '../footer/footer';
import Header from '../header/header';
import TermDetails from './termDetails';
// import ExperienceSection from './experienceSection';
// import PortPagination from './portPagination';
// import RecentWok from './recentWok';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb breadcrumbTitle="Terms and Conditions" breadcrumbSubTitle="Terms and Conditions" />
                <TermDetails />
            </main>
            <Footer />
        </>
    );
};

export default index;