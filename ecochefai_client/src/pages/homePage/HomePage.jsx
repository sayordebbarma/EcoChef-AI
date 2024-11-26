import React from 'react';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import MeetTheTeam from './MeetTheTeam';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-grow'>
        <HeroSection />
        <AboutUs />
        <MeetTheTeam />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
