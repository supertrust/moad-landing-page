import { DownArrow } from '@/Assets/Svgs';

interface Props {
  color?: string;
  OnScrollDown: () => void;
}
export const CustomScrollButton = ({ OnScrollDown, color = "#99A0AE" }: Props) => {
  return (
    <div
      className='w-full z-50 cursor-pointer  justify-center  items-center'
      onClick={OnScrollDown}>
      <div className='flex z-50 flex-col justify-center items-center min-w-[6rem] absolute bottom-[20px] left-[50%] -translate-x-1/2 w-auto'>
        <span style={{ color }} className={`font-[500] text-[${color}] w-auto flex-nowrap`}>Scroll Down</span>
        <DownArrow color={color} />
      </div>
    </div>
  );
};
