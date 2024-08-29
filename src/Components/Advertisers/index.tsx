'use client';
import { AdvertiserVideoSection } from "@/Components/Advertisers/VideoSection";
import ReactFullpage from '@fullpage/react-fullpage';
import React, { Suspense, useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import AdvertisingPlatforms from './AdvertisingPlatforms/AdvertisingPlatforms';
import CommunityRoadMap from './CommunityRoadMap/CommunityRoadMap';
import ContactSection from './Contact/Contact';
import AdvertHeroSection from './HeroSection/HeroSection';
import Services from './Services/Services';

const AdvertisersPage = () => {
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
                                <AdvertHeroSection
                                    OnScrollDown={() => {
                                        fullpageApi.moveSectionDown();
                                    }}
                                    isInView={currentSection === 0}
                                />
                            </div>
                            <div className='section'>
                                <AdvertiserVideoSection
                                    OnScrollDown={() => {
                                        fullpageApi.moveSectionDown();
                                    }}
                                    isInView={currentSection === 1}
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
                                    OnScrollDown={() => {
                                        fullpageApi.moveTo(1)
                                    }}
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
