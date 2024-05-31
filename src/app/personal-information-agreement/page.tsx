import React from 'react';
import Nav from '@/Components/PagesNavbar/Nav';
import Footer from '@/Components/Footer/Footer';
import ColorNavbar from '../../Components/Navbar/ColorNavbar';
interface TableDataItem {
  id: number;
  label: string;
}

const Page: React.FC = () => {
  const TableHeadData: TableDataItem[] = [
    { id: 1, label: '항목' },
    { id: 2, label: '목적' },
    { id: 3, label: '보유 및 이용 기간' },
  ];

  const TableBodyData: TableDataItem[] = [
    { id: 1, label: '아이디(휴대폰 번호), 이름, 이메일, 기타 화물정보' },
    { id: 2, label: '회원 가입 및 회원 식별, 회원 관리' },
    { id: 3, label: '회원탈퇴시 즉시 파기' },
    { id: 4, label: '아이디(휴대폰 번호), 이름, 이메일' },
    {
      id: 5,
      label: '개인화 서비스 제공 (어드민 혹은 광고주의 서비스 제공 및 연락)',
    },
    { id: 6, label: '회원탈퇴시 즉시 파기' },
  ];

  // Function to chunk the array into groups of 3
  const chunkArray = (
    arr: TableDataItem[],
    size: number,
  ): TableDataItem[][] => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) => {
      const start = index * size;
      return arr.slice(start, start + size);
    });
  };

  const chunkedTableBodyData: TableDataItem[][] = chunkArray(TableBodyData, 3);

  return (
    <>
      <ColorNavbar />
      <Nav />
      <div className='flex justify-center mt-20'>
        <div className='w-[1170px] h-[322px] flex-col justify-start items-start gap-20 inline-flex'>
          <div className='w-[1170px] h-[241px] flex-col justify-start items-start gap-6 inline-flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              [필수] 개인정보 수집 및 이용 동의약관
            </div>
            <div className='container mx-auto'>
              <table className='min-w-full bg-white rounded border border-gray-300'>
                <thead>
                  <tr className='bg-[#EEEFF3]  text-gray-600 uppercase text-sm leading-normal border-b border-gray-300'>
                    {TableHeadData.map((item) => (
                      <th
                        key={item.id}
                        className='py-3 w-[200px] px-6 text-center border-r border-gray-300'>
                        {item.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className='text-gray-600 text-sm font-light'>
                  {chunkedTableBodyData.map((row, index) => (
                    <tr key={index} className='border-b border-gray-300 '>
                      {row.map((item) => (
                        <td
                          key={item.id}
                          className='py-3 px-5 text-left border-r border-gray-300'>
                          {item.label}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              제공에 동의하지 않을수 있으나, 미동의시 회원가입에 제한과 함께
              서비스를 제공할수 없습니다.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
