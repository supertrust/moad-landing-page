'use client';
import React, { useState, useEffect, Suspense } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import AdvertHeroSection from './HeroSection/HeroSection';
import Services from './Services/Services';
import CommunityRoadMap from './CommunityRoadMap/CommunityRoadMap';
import Footer from '../Footer/Footer';
import AdvertisingPlatforms from './AdvertisingPlatforms/AdvertisingPlatforms';
import ContactSection from './Contact/Contact';

const AdvertisersPage = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
        setCurrentSection(0)
    }, [])

    if (!isMounted) return null
    console.log(currentSection, 'adver')
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
                                <Footer page='advertisers' />
                            </div>
                        </ReactFullpage.Wrapper>
                    )}
                />
            </Suspense>
        </>
    );
};

export default AdvertisersPage;