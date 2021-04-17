import React from 'react';
import Footer from '../Footer/Footer';
import MainHead from '../Header/MainHead/MainHead';
import Partner from '../Partner/Partner';
import Services from '../Services/Services';
import SpecialService from '../SpecialService/SpecialService';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <MainHead></MainHead>
            <Services></Services>
            <SpecialService></SpecialService>
            <Testimonials></Testimonials>
            <Partner></Partner>
            <Footer></Footer>
        </div>
    );
};

export default Home;