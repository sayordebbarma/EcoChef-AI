import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import DialogBox from '../../components/dialogBox/DialogBox';
import GG from '../../assets/gg.png';
import DD from '../../assets/dd.png';
import SS from '../../assets/ss.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faSearch } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  // GSAP Animations
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });

    // Animate tagline
    tl.fromTo(
      '.tagline',
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, stagger: 0.2 }
    );

    // Animate subheading
    tl.fromTo(
      '.subheading',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0 },
      '-=0.5'
    );

    // Animate buttons
    tl.fromTo(
      '.search-options',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.3 }
    );

    // Animate decorative vectors
    gsap.to('.floating-svg', {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <main>
      <section className='relative bg-gradient-to-b bg-amber-100 h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden'>
        {/* Tagline */}
        <h1 className='tagline text-4xl md:text-6xl font-bold text-green-700 mb-4'>
          From Nature to Plate: <br className='hidden md:block' />
          <span className='text-yellow-500'>
            Forage Safely, Cook Creatively
          </span>
        </h1>

        {/* Subheading */}
        <p className='subheading text-lg md:text-xl text-green-800 max-w-2xl mx-auto mb-10'>
          Identify plants, discover recipes, and make sustainable eating
          effortless.
        </p>

        {/* Search Options */}
        <div className='search-options flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-3xl'>
          {/* Text Field: Search by Name */}
          <div className='flex items-center bg-white border border-green-600 rounded-lg px-4 py-3 shadow-md w-full md:w-auto'>
            <FontAwesomeIcon
              icon={faSearch}
              className='w-6 h-6 text-gray-400'
            />
            <input
              type='text'
              placeholder='Search by Plant Name'
              className='flex-grow outline-none px-2'
            />
            <button className='bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 transition ml-3'>
              Search
            </button>
          </div>

          {/* Button: Upload or Take a Picture */}
          <button
            onClick={handleModalToggle}
            className='flex items-center justify-center bg-yellow-300 text-green-800 rounded-lg px-6 py-4 shadow-md hover:bg-yellow-400 transition w-full md:w-auto'
          >
            <FontAwesomeIcon icon={faCameraRetro} className='w-6 h-6 mr-2' />
            Upload/Take a Picture
          </button>
        </div>

        {/* Decorative Vectors */}
        <div className='absolute inset-0 pointer-events-none'>
          <img
            src={GG}
            alt='Leaf Decoration'
            className='floating-svg absolute top-10 left-10 w-60 opacity-75'
          />
          <img
            src={SS}
            alt='Small Leaf Decoration'
            className='floating-svg absolute top-1/2 left-5 w-40 opacity-60'
          />
          <img
            src={SS}
            alt='Flower Decoration'
            className='floating-svg absolute top-20 right-40 w-20 opacity-70'
          />
          {/* <img
            src={DD}
            alt="Berry Decoration"
            className="floating-svg absolute bottom-16 left-16 w-10 opacity-80"
          /> */}
          <img
            src={GG}
            alt='Fruit Decoration 2'
            className='floating-svg absolute bottom-1/3 right-5 w-80 opacity-70'
          />
          {/* <img
            src={DD}
            alt='Fruit Decoration'
            className='floating-svg absolute bottom-0 right-10 w-80 opacity-75'
          /> */}
        </div>
      </section>

      {/* Modal */}
      <DialogBox isOpen={isModalOpen} onClose={handleModalToggle} />
    </main>
  );
};

export default HeroSection;
