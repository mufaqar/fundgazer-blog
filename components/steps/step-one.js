import React, { useState } from 'react'
import Slider from 'react-slick';
import ModelBox from '../models-box'
import { BsQuestionLg } from 'react-icons/bs';
import Progressbar from './progressbar';
import Link from 'next/link';

export default function Step1() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
    };
    return (
        <div className='max-w-[901px] mx-auto grid-cols-1 grid'>
            <div className='md:hidden block'>
                <p className='text-sm font-bold font-interRegular mb-10'>
                    Start customizing your algo-driven portfolio
                </p>
            </div>
            <div className='flex md:flex-row flex-col gap-8 justify-between'>
                <div className='md:w-[68%]'>
                    <h3 className='text-4xl leading-5 font-semibold font-interMedium text-skin-primary mb-5'>
                        Step 1
                    </h3>
                    <p className='md:text-2xl text-sm font-bold font-interRegular mt-3'>
                        Select your risk level
                    </p>
                    <p className='md:text-xl text-xs font-normal font-interRegular mt-3 max-w-[440px]'>
                        Use our no-code, visual editor to modify
                        symphonies or create your own from scratch.
                    </p>
                </div>
                <div className='md:w-[32%] steps md:block hidden'>
                    <Slider {...settings}>
                        <ModelBox />
                        <ModelBox />
                        <ModelBox />
                        <ModelBox />
                    </Slider>
                </div>
            </div>
            <div className='flex md:flex-row flex-row gap-8 justify-between items-center mt-16 md:order-1 order-2'>
                <div className='md:w-auto w-2/3'>
                    <span className='bg-[#EF9C20] md:text-xl text-[8px] font-extrabold font-interBold text-white block w-fit md:py-[14px] py-1 md:px-16 px-5 rounded-[5px]'>
                        Low
                    </span>
                    <p className='md:text-xl text-xs font-normal font-interRegular mt-3 max-w-[440px]'>
                        Use our no-code, visual editor to modify
                        symphonies or create your own from scratch.
                    </p>
                </div>
                <div className='md:w-auto w-1/3'>
                    <p className='grid gap-2'>
                        <span className='md:text-xl md:leading-4 text-xs font-normal font-interRegular text-[#8D8D8D] flex gap-2 items-start'>
                            Max Drawdown <BsQuestionLg className='bg-[#D9D9D9] p-1 rounded-full md:block hidden' />
                        </span>
                        <span className='md:text-2xl md:leading-6 text-sm font-bold font-interMedium text-[#2B195A]'>
                            10000 <span className='text-[#28C300]'>(+31%)</span>
                        </span>
                    </p>
                </div>
            </div>
            <div className='mt-16 md:order-2 order-1'>
                <Progressbar progressPercentage={50} />
            </div>
        </div>
    )
}