import Image from 'next/image';
import DownArrow from '../../Assets/downarrow.svg';
export const CustomScrollButton = ({ OnScrollDown } : { OnScrollDown : ()=>void}) => {
  return (
    <div
      className='w-[90%] mx-auto flex justify-between items-center'
      onClick={OnScrollDown}>
      <div className='flex flex-col justify-center items-center absolute bottom-[20px] left-[50%]'>
        <span className='text-[#99A0AE]'>Scroll Down</span>
        <Image alt='icon' src={DownArrow} />
      </div>
    </div>
  );
};
