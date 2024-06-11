
import Footer from '@/Components/Footer/Footer';
import { ColorNavbar } from '@/Components/Navbar';
import Nav from '@/Components/PagesNavbar/Nav';
import React from 'react';

export default function OthersLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='flex flex-col justify-start  w-full overflow-auto'>
            <ColorNavbar />
            <div className='px-4 md:px-6 lg:px-10 xl:px-28 '>
                <Nav page='cargo'/>
                {children}
            </div>
            <div className='custom-footer '>
                <Footer page='cargo'/>
            </div>
        </div>
    );
}
