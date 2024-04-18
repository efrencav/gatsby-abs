import React from 'react';
import Breadcrumb from '../common/breadcrumbtwo';
import Footer from '../footer/footer';
import Header from '../header/header';
import PolicyDetails from './policyDetails';
// import ExperienceSection from './experienceSection';
// import PortPagination from './portPagination';
// import RecentWok from './recentWok';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb breadcrumbTitle="Privacy Policy" breadcrumbSubTitle="Privacy Policy" />
                <PolicyDetails />
            </main>
            <Footer />
        </>
    );
};

export default index;