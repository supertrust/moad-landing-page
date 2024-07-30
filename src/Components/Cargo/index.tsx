'use client';
import React, { useState, useEffect, Suspense } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { FifthSection, FourthSection, Header, SecondSection, ThirdSection } from './cargoSections';
import Footer from '../Footer/Footer';

const CargoLayout = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true)
    setCurrentSection(0)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <Suspense fallback={<p>Loading feed...</p>}>
        <ReactFullpage
          scrollHorizontally={true}
          credits={{ enabled: false }}
          scrollingSpeed={500}
          fitToSection={true}
          fitToSectionDelay={1000}
          afterLoad={(origin, destination) => {
            setCurrentSection(destination.index);
          }}
          onLeave={(origin, destination, direction) => {
            setCurrentSection(destination.index);
          }
          }
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
                    fullpageApi.moveTo(0)
                  }}
                  isInView={currentSection === 3}
                />
              </div>
              <div className='section'>
                <FifthSection
                  setCurrentSection={setCurrentSection}
                  OnScrollDown={() => {
                    fullpageApi.moveTo(1)
                  }}
                />
              </div>
              <div className='section  custom-footer '>
                <Footer page='cargo' />
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      </Suspense>
    </>
  );
};

export default CargoLayout;
