import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import Header from '../header/header';
import TeamDetailsMain from './teamDetailsMain';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb breadcrumbTitle="Exclusive Team" breadcrumbSubTitle="Angela Carrasco-Cavazos" />
                <TeamDetailsMain />
            </main>
            <Footer />
        </>
    );
};

export default index;