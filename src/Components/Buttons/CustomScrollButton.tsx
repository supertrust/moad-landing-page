import { DownArrow } from '@/Assets/Svgs';
import Image from 'next/image';

interface Props {
  color?: string;
  OnScrollDown: () => void;
}
export const CustomScrollButton = ({ OnScrollDown, color = "#99A0AE" }: Props) => {
  return (
    <div
      className='w-full cursor-pointer mx-auto flex justify-between items-center'
      onClick={OnScrollDown}>
      <div className='flex flex-col justify-center items-center absolute bottom-[20px] left-[50%]'>
        <span style={{color}} className={`text-[${color}]`}>Scroll Down</span>
        <DownArrow color={color}/>
      </div>
    </div>
  );
};