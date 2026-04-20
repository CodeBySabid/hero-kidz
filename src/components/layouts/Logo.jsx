import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
            <Link href={'/'} className='flex items-center gap-3'>
                <img src='/assets/logo.png' alt="logo-hero-kidz" width={40} height={35} /><h2 className='text-md md:text-xl font-bold'>Hero Kidz</h2>
            </Link>
        </div>
    );
};

export default Logo;