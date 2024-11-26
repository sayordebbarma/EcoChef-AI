import React from 'react';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import MeetTheTeam from './MeetTheTeam';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <MeetTheTeam />
      <Footer />
    </>
  );
};

export default HomePage;
