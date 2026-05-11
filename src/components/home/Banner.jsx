import { BanglaFont } from '@/app/layout';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex px-2 max-sm:flex-col justify-between items-center'>
            <div className='flex-1 space-y-3 sm:space-y-4 lg:space-y-6'>
                <h2 className={`${BanglaFont.className} text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-6xl font-bold max-sm:text-center`}>
                    আপনার শিশুকে দিন একটি <br /><samp className={`${BanglaFont.className} text-primary text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-6xl font-bold max-sm:text-center`}>সুন্দর ভবিষ্যত</samp>
                </h2>
                <p className='text-sm sm:text-sm md:text-lg max-sm:text-center'>
                    Buy Every toy with up to 15% Discount
                </p>
                <button className='max-sm:mx-auto btn btn-primary btn-outline'>
                    Explore Products
                </button>
            </div>
            <div className='flex-1'>
<img src={"/assets/hero.png"} alt="" />
            </div>
        </div>
    );
};

export default Banner;