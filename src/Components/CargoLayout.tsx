'use client';
import HeroSection from '../Components/Cargo/LandingSections/HeroSection';
import FAQ from './Cargo/LandingSections/FAQ';
import CargoSecondSection from './Cargo/LandingSections/CargoSecondSection';
import CargoThirSection from './Cargo/LandingSections/CargoThirSection';
import CardDeck from './Cargo/CardDeck/CargoCardDeck';

import CargoFourthSection from './Cargo/LandingSections/CargoFourthSection';
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from './Footer/Footer';
const CargoLayout = () => {
  return (
    <>
      <ReactFullpage
        navigation={true}
        credits={{ enabled: false }}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className='section'>
              <HeroSection />
            </div>
            <div className='section'>
              <CargoSecondSection />
            </div>
            <div className='section'>
              <CargoThirSection />
            </div>
            <div className='section'>
              <CardDeck />
            </div>
            <div className='section'>
              <CargoFourthSection />
            </div>
            <div className='section'>
              <FAQ />
            </div>

            <div className='section custom-footer '>
              <Footer />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </>
  );
};

export default CargoLayout;
