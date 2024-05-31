'use client';
import React, { useState, useEffect, Suspense } from 'react';

import ReactFullpage from '@fullpage/react-fullpage';
import Footer from './Footer/Footer';
import SecondSection from '../Components/Cargo/cargoSections/SecondSections';
import Header from '../Components/Cargo/cargoSections/Header';
import ThirdSection from '../Components/Cargo/cargoSections/ThirdSection';
import FourthSection from '../Components/Cargo/cargoSections/FourthSecction';
import FifthSection from '../Components/Cargo/cargoSections/FifthSection';
const CargoLayout = () => {
  const [currentSection, setCurrentSection] = useState(0);
  // const onClickScroll = (fullpageApi) => {
  //   // alert('helo');
  //   fullpageApi.moveSectionDown();
  // };
  return (
    <>
      <Suspense fallback={<p>Loading feed...</p>}>
        <ReactFullpage
          scrollHorizontally={true}
          credits={{ enabled: false }}
          afterLoad={(origin, destination) => {
            setCurrentSection(destination.index);
          }}
          render={({ state, fullpageApi }) => (
            <ReactFullpage.Wrapper>
              <div className='section'>
                <Header
                  OnScrollDown={() => {
                    fullpageApi.moveSectionDown();
                  }}
                  isInView={currentSection === 0}
                />
              </div>
              <div className='section'>
                <SecondSection
                  OnScrollDown={() => {
                    fullpageApi.moveSectionDown();
                  }}
                  isInView={currentSection === 1}
                />
              </div>
              <div className='section'>
                <ThirdSection
                  OnScrollDown={() => {
                    fullpageApi.moveSectionDown();
                  }}
                  isInView={currentSection === 2}
                />
              </div>
              <div className='section'>
                <FourthSection
                  OnScrollDown={() => {
                    fullpageApi.moveSectionDown();
                  }}
                  isInView={currentSection === 3}
                />
              </div>
              <div className='section'>
                <FifthSection
                  OnScrollDown={() => {
                    fullpageApi.moveSectionDown();
                  }}
                />
              </div>

              <div className='section custom-footer '>
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      </Suspense>
    </>
  );
};

export default CargoLayout;
