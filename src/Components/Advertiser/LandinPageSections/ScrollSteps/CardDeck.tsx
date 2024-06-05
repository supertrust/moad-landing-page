import React, { useState, useRef, useEffect } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

const CardDeck = () => {
  const [isVisible, setIsVisible] = useState(false);
  const secondSectionRef = useRef(null);

  return (
    <div ref={secondSectionRef} className={`py-10 px-20 w-full bg-gradient-to-br from-purple-600 to-purple-300  ${isVisible ? 'visible' : ''}`}>
      <ul className=' relative h-[210vh]  m-0'>
        <div className='absolute bg-white rounded-[3.75rem] shadow-2xl w-full  left-0  top-0 h-[90vh]  z-40'>
          <StepOne />
        </div>
        <div className='sticky left-0 z-20 bg-white rounded-[3.75rem] shadow-2xl top-8  w-full '>
          <StepTwo />
        </div>
      </ul>
    </div>
  );
};

export default CardDeck;
