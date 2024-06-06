'use client';
import React, { useState, useEffect, Suspense } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import AdvertHeroSection from './HeroSection/HeroSection';
import Services from './Services/Services';
import CommunityRoadMap from './CommunityRoadMap/CommunityRoadMap';
import Footer from '../Footer/Footer';
import AdvertisingPlatforms from './AdvertisingPlatforms/AdvertisingPlatforms';
import ContactSection from './Contact/Contact';
// import { FifthSection, FourthSection, Header, SecondSection, ThirdSection } from './Cargo/cargoSections';

const AdvertisersPage = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <>
            <Suspense fallback={<p>Loading feed...</p>}>
                <ReactFullpage
                    lazyLoading={true}
                    scrollHorizontally={true}
                    credits={{ enabled: false }}
                    render={({ state, fullpageApi }) => (
                        <ReactFullpage.Wrapper>
                            <div className='section'>
                                <AdvertHeroSection
                                    OnScrollDown={() => {
                                        fullpageApi.moveSectionDown();
                                    }}
                                    isInView={currentSection === 0}
                                />
                            </div>
                            <div className='section'>
                                <Services
                                    OnScrollDown={() => {
                                        fullpageApi.moveSectionDown();
                                    }}
                                    isInView={currentSection === 1}
                                />
                            </div>
                            <div className='section'>
                                <CommunityRoadMap
                                    OnScrollDown={() => {
                                        fullpageApi.moveSectionDown();
                                    }}
                                    isInView={currentSection === 2}
                                />
                            </div>
                            <div className='section'>
                                <AdvertisingPlatforms
                                    OnScrollDown={() => {
                                        fullpageApi.moveSectionDown();
                                    }}
                                    isInView={currentSection === 3}
                                />
                            </div>
                            <div className='section'>
                                <ContactSection
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

export default AdvertisersPage;
