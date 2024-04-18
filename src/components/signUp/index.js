import React from 'react';
import Breadcrumb from '../common/breadcrumb';
import Footer from '../footer/footer';
import Header from '../header/header';
import SignUpMain from './signUpMain';
import WhyWeTwo from './whyWeTwo';

const index = () => {
    return (
        <>
            <Header />
            <main>
                <Breadcrumb breadcrumbTitle="Get a Quote" breadcrumbSubTitle="Get a Quote" />
                <SignUpMain />
                <WhyWeTwo />
            </main>
            <Footer />
        </>
    );
};

export default index;
