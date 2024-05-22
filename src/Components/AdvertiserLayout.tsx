'use client';
import Herosections from './Advertiser/LandinPageSections/Heroscetion';
import SecondSection from './Advertiser/LandinPageSections/SecondSection';
import MainContainer from './Advertiser/LandinPageSections/MainScrolContainer';
import CardsSection from './Advertiser/LandinPageSections/CardsSection';
import FormSection from './Advertiser/LandinPageSections/FormSection';

import ReactFullpage from '@fullpage/react-fullpage';
import Footer from './Footer/Footer';

const LandindLayout = () => {
  return (
    <>
      <ReactFullpage
        navigation={true}
        scrollHorizontally={false}
        credits={{ enabled: false }}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className='section'>
              <Herosections />
            </div>
            <div className='section'>
              <SecondSection />
            </div>
            <div className='section'>
              <CardsSection />
            </div>
            <div className='section'>
              <MainContainer />
            </div>
            <div className='section'>
              <FormSection />
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

export default LandindLayout;
