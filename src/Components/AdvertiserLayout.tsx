'use client'
import React, { Suspense, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from './Footer/Footer';
import { CardDeck, CardsSection, FormSection, HeroSection, SecondSection } from './Advertiser/LandinPageSections';

const LandindLayout = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Suspense fallback={<p className='h-screen w-screen bg-daisyBush-20 text-2xl text-gray-70'>Loading please wait...</p>}>
      <ReactFullpage
        navigation={true}
        scrollHorizontally={false}
        credits={{ enabled: false }}
        afterLoad={(origin, destination) => setActiveSection(destination.index)} // Update active section on load
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className='section w-full'>
              <HeroSection isHovered={isHovered} setIsHovered={setIsHovered} />
            </div>
            <div className='section'>
              <SecondSection />
            </div>
            <div className='section'>
              <CardDeck />
            </div>
            <div className='section'>
              <CardsSection />
            </div>
            <div className='section'>
              <FormSection />
            </div>
            <div className='section custom-footer '>
              <Footer bgColor='#fff' type='light' />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
      <style >{`
        #fp-nav ul li a.active span {
          background-color: ${activeSection === 1 || activeSection === 2 || activeSection === 3 || activeSection === 5 || isHovered ? '#fff' : ''};
        }
        #fp-nav ul li a span {
          background-color: ${activeSection === 1 || activeSection === 2 || activeSection === 3 || activeSection === 5 || isHovered ? '#fff' : ''};
        }
      `}</style>
    </Suspense>
  );
};

export default LandindLayout;
