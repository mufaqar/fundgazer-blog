import React from 'react'
import AlertBox from '../alert-box'
import { BsArrowDownShort, BsQuestionLg } from 'react-icons/bs'
import Image from 'next/image'
import { Statics } from '../statics'

function Step3() {
    return (
        <div className='max-w-[901px] mx-auto'>
            <div className='flex justify-between items-center max-w-[901px] mx-auto'>
                <div>
                    <h3 className='md:text-4xl md:leading-5 text-base font-semibold font-interMedium text-skin-primary mb-5'>
                        Step 3
                    </h3>
                    <p className='text-xl font-medium font-interRegular text-[#747474] mt-3'>
                        Add your preferred list of stocks
                    </p>
                </div>
                <div>
                    <AlertBox />
                </div>
            </div>
            <div className='flex justify-between items-center max-w-[901px] mx-auto'>
                <div>
                    <ul className='flex gap-10 my-10'>
                        <li className='grid gap-2'>
                            <span className='text-xl leading-4 font-normal font-interRegular text-[#2B195A] flex gap-2 items-start'>
                                CAGR (5 Yr) <BsQuestionLg className='bg-[#D9D9D9] p-1 rounded-full' />
                            </span>
                            <span className='text-2xl leading-6 font-bold font-interMedium text-[#2B195A]'>
                                38%
                            </span>
                        </li>
                        <li className='grid gap-2'>
                            <span className='text-xl leading-4 font-normal font-interRegular text-[#2B195A] flex gap-2 items-start'>
                                Min. Amount <BsQuestionLg className='bg-[#D9D9D9] p-1 rounded-full' />
                            </span>
                            <span className='text-2xl leading-6 font-bold font-interMedium text-[#2B195A]'>
                                1000
                            </span>
                        </li>
                        <li className='grid gap-2'>
                            <span className='text-xl leading-4 font-normal font-interRegular text-[#2B195A] flex gap-2 items-start'>
                                Sharpe ratio <BsQuestionLg className='bg-[#D9D9D9] p-1 rounded-full' />
                            </span>
                            <span className='text-2xl leading-6 font-bold font-interMedium text-[#2B195A]'>
                                3.2
                            </span>
                        </li>
                    </ul>
                    <p className='text-xl leading-4 font-normal font-interRegular text-[#2B195A]'>
                        Current Value of <strong> Rs. 10,000 </strong>  invested at Oct 2022
                    </p>
                    <p className='text-xl leading-4 font-normal font-interRegular text-[#747474] mt-5'>
                        Current Value
                    </p>
                    <p className='flex gap-1 items-center mt-5 mb-2'>
                        <span className='text-2xl leading-6 font-bold font-interMedium text-[#2B195A]'>
                            100,000
                        </span>
                        <span className='text-xl leading-4 font-normal font-interRegular text-[#2B195A]'>
                            (+31%)
                        </span>
                    </p>
                    <p className='text-base font-bold font-interMedium text-[#2B195A] mt-2'>
                        34.00 (+3%)
                    </p>
                </div>
                <div>
                    <button className='text-2xl font-bold text-[#F3AF00] flex gap-1 items-center underline'>
                        <BsArrowDownShort strokeWidth={1} className='text-4xl' />  Download Trade History
                    </button>
                </div>
            </div>
            <div className='my-10'>
                <Image src="/images/graph.png" alt="/images/graph.png" width={901} height={414} className='mx-auto' />
            </div>
            <div className='flex justify-between items-start max-w-[901px] mx-auto mb-16'>
                <div>
                    <div className='mb-10'>
                        <p className='text-xl font-medium font-interRegular text-[#2B195A] flex gap-2 items-end'>
                            Risk Level <span className='bg-[#EF9C20] text-white text-base font-extrabold font-interMedium rounded-[5px] px-8 py-2'>LOW</span>
                        </p>
                        <p className='text-base font-normal font-interMedium text-[#747474] mt-4'>
                            Use our no-code, visual editor to m
                        </p>
                        <p className='text-base font-normal font-interRegular text-[#747474]'>
                            Use our no-code, visual editor to m
                        </p>
                    </div>
                    <div>
                        <p className='text-xl font-medium font-interMedium text-[#2B195A] flex gap-2 items-center'>
                            Order Updates <BsQuestionLg className='bg-[#D9D9D9] p-1 rounded-full' />
                        </p>
                        <ul className='flex gap-2 items-center justify-between mt-4'>
                            <li className='grid gap-0'>
                                <span className='text-base font-normal font-interMedium text-[#747474]'>
                                    Last Order Date
                                </span>
                                <span className='text-xl font-medium font-interMedium text-[#2B195A] '>
                                    24 Jun 2023
                                </span>
                            </li>
                            <li className='grid gap-0'>
                                <span className='text-base font-normal font-interMedium text-[#747474]'>
                                    Next Order Date
                                </span>
                                <span className='text-xl font-medium font-interMedium text-[#279145] '>
                                    24 Jun 2023
                                </span>
                            </li>
                        </ul>
                        <p className='text-base font-normal font-interRegular text-[#747474] mt-4'>
                            Use our no-code, visual editor to mdskdm lfmaw infegt
                        </p>
                    </div>
                </div>
                <div>
                    <p className='grid gap-2'>
                        <span className='text-xl leading-4 font-normal font-interRegular text-[#8D8D8D] flex gap-2 items-start'>
                            Max Drawdown <BsQuestionLg className='bg-[#D9D9D9] p-1 rounded-full' />
                        </span>
                        <span className='text-2xl leading-6 font-bold font-interMedium text-[#2B195A]'>
                            10000 <span className='text-[#28C300]'>(+31%)</span>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Step3