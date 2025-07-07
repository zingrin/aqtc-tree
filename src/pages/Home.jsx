import React from 'react';
import HeroSection from '../components/HeroSection';
import About from './About';
import ServiceCards from '../components/ServiceCards';
import Footer from '../components/Footer';
import WhyChoose from '../components/WhyChoose';
import ReviewsSection from './ReviewsSection';
import CustomerFeedback from './CustomerFeedback';

const Home = () => {
    return (
        <div>
          <>
           <HeroSection></HeroSection> 
           <About></About>
           <ServiceCards></ServiceCards>
           <WhyChoose></WhyChoose>
           <ReviewsSection></ReviewsSection>
           <CustomerFeedback></CustomerFeedback>
           <Footer></Footer>
          </>
        </div>
    );
};

export default Home;