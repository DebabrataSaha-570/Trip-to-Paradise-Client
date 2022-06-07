import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Gutters from '../Gutters/Gutters';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <Gutters></Gutters>
            <AboutUs></AboutUs>
            <Services></Services>
            <Footer></Footer>
        </>
    );
};

export default Home;