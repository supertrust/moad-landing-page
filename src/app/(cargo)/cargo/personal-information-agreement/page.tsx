import React from 'react';
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

  const rows = [
    {
      id: 1,
      '항목': '아이디(휴대폰 번호), 이름, 이메일, 기타 화물정보',
      '목적': '회원 가입 및 회원 식별, 회원 관리',
      '보유 및 이용 기간': '회원탈퇴시 즉시 파기'
    },
    {
      id: 2,
      '항목': '아이디(휴대폰 번호), 이름, 이메일',
      '목적': '개인화 서비스 제공 (어드민 혹은 광고주의 서비스 제공 및 연락)',
      '보유 및 이용 기간': '회원탈퇴시 즉시 파기'
    },
  ]

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
    <div className='flex gap-8 flex-col w-full justify-center mt-20 mb-32'>
      <p className="w-full text-gray-100 font-medium text-xl  font-Pretendard">
        [필수] 개인정보 수집 및 이용 동의약관
      </p>
      <div className='container mx-auto'>
        <table className='min-w-full bg-white rounded border border-gray-300'>
          <thead>
            <tr className='bg-[#EEEFF3]  text-gray-100 font-bold uppercase text-sm leading-normal border-b border-gray-300'>
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
            {rows.map((row, index) => (
              <tr key={index} className='border-b border-gray-300 text-start px-2'>
                <td className='p-4 border-r border-gray-30'>{row.항목}</td>
                <td className='p-4 border-r border-gray-30'>{row.목적}</td>
                <td className='p-4 border-r border-gray-30'>{row['보유 및 이용 기간']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>제공에 동의하지 않을수 있으나, 미동의시 회원가입에 제한과 함께 서비스를 제공할수 없습니다.</p>
    </div>
  );
};

export default Page;
