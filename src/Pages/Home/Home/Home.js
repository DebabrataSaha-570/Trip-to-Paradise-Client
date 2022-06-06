import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </>
    );
};

export default Home;