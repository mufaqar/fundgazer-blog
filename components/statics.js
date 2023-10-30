import React from 'react'
import AlertBox from './alert-box'
import { BsArrowDownShort, BsQuestionLg } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'
import Progressbar from './steps/progressbar'

function Statics() {
    return (
        <div className='md:bg-[#F2EDFF] md:shadow-md max-w-[1137px] mx-auto md:p-5 rounded-[5px] pb-10'>
            <div className='justify-between items-center max-w-[901px] mx-auto md:flex hidden'>
                <div>
                    <h3 className='text-4xl leading-5 font-semibold font-interMedium'>
                        Statistics
                    </h3>
                    <p className='text-xl font-medium font-interRegular text-[#747474] mt-3'>
                        Add your preferred list of stocks
                    </p>
                </div>
                <div className='md:block hidden'>
                    <AlertBox />
                </div>
            </div>
            <div className='flex justify-between items-center max-w-[901px] mx-auto'>
                <div>
                    <ul className='flex gap-10 my-10'>
                        <li className='grid gap-2 md:w-auto w-full'>
                            <span className='md:text-xl md:leading-4 text-sm font-normal font-interRegular text-[#2B195A] flex gap-2 items-start'>
                                CAGR (5 Yr) <BsQuestionLg className='bg-[#D9D9D9] p-1 rounded-full' />
                            </span>
                            <span className='md:text-2xl md:leading-6 text-xl font-bold font-interMedium text-[#2B195A]'>
                                38%
                            </span>
                        </li>
                        <li className='grid gap-2 md:w-auto w-full'>
                            <span className='md:text-xl md:leading-4 text-sm font-normal font-interRegular text-[#2B195A] flex gap-2 items-start'>
                                Min. Amount <BsQuestionLg className='bg-[#D9D9D9] p-1 rounded-full' />
                            </span>
                            <span className='md:text-2xl md:leading-6 text-xl font-bold font-interMedium text-[#2B195A]'>
                                1000
                            </span>
                        </li>
                        <li className='md:grid hidden gap-2 md:w-auto w-full justify-between'>
                            <span className='md:text-xl md:leading-4 text-sm font-normal font-interRegular text-[#2B195A] flex gap-2 items-start'>
                                Sharpe ratio <BsQuestionLg className='bg-[#D9D9D9] p-1 rounded-full' />
                            </span>
                            <span className='md:text-2xl md:leading-6 text-xl font-bold font-interMedium text-[#2B195A]'>
                                3.2
                            </span>
                        </li>
                    </ul>
                    <p className='md:text-xl md:leading-4 text-sm font-normal font-interRegular text-[#2B195A]'>
                        Current Value of <strong> Rs. 10,000 </strong>  invested at Oct 2022
                    </p>
                    <p className='md:text-xl md:leading-4 text-sm font-normal font-interRegular text-[#747474] mt-5'>
                        Current Value
                    </p>
                    <p className='flex gap-1 items-center md:mt-5 mt-3 mb-2'>
                        <span className='md:text-2xl md:leading-6 text-xl font-bold font-interMedium text-[#2B195A]'>
                            100,000
                        </span>
                        <span className='md:text-xl md:leading-4 text-sm font-normal font-interRegular text-[#2B195A]'>
                            (+31%)
                        </span>
                    </p>
                    <p className='md:text-base text-sm font-bold font-interMedium text-[#2B195A] mt-2'>
                        34.00 (+3%)
                    </p>
                </div>
                <div className='md:block hidden'>
                    <button className='text-2xl font-bold text-[#F3AF00] flex gap-1 items-center underline'>
                        <BsArrowDownShort strokeWidth={1} className='text-4xl' />  Download Trade History
                    </button>
                </div>
            </div>
            <div className='my-10'>
                <Image src="/images/graph.png" alt="/images/graph.png" width={901} height={414} className='mx-auto' />
            </div>
            <div className='flex justify-between items-start max-w-[901px] mx-auto mb-10'>
                <div>
                    <div className='mb-10'>
                        <p className='md:text-xl text-base font-medium font-interRegular text-[#2B195A] flex gap-2 items-end'>
                            Risk Level <span className='bg-[#EF9C20] text-white md:text-base text-[8px] leading-4 font-extrabold font-interMedium rounded-[5px] px-8 py-2'>LOW</span>
                        </p>
                        <p className='md:text-base text-sm font-normal font-interMedium text-[#747474] mt-4'>
                            Use our no-code, visual editor to m
                        </p>
                        <p className='md:text-base text-sm font-normal font-interRegular text-[#747474]'>
                            Use our no-code, visual editor to m
                        </p>
                    </div>
                    <div className='md:block hidden'>
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
                        <span className='md:text-xl md:leading-4 text-sm font-normal font-interRegular text-[#8D8D8D] flex gap-2 items-start'>
                            Max Drawdown <BsQuestionLg className='bg-[#D9D9D9] p-1 rounded-full md:block hidden' />
                        </span>
                        <span className='md:text-2xl md:leading-6 text-xl font-bold font-interMedium text-[#2B195A]'>
                            10000 <span className='text-[#28C300]'>(+31%)</span>
                        </span>
                    </p>
                </div>
            </div>
            <div className='md:hidden block mb-10'>
                <Progressbar />
                <p className='text-sm font-normal font-interRegular text-[#747474] mt-2'>
                    A simple attactive text to why invest in Crypto. A simple
                </p>
            </div>
            <div className='md:hidden block mb-10'>
                <p className='md:text-xl text-base font-medium font-interMedium text-[#2B195A] flex gap-2 items-center'>
                    Order Updates <BsQuestionLg className='bg-[#D9D9D9] p-1 rounded-full' />
                </p>
                <ul className='flex gap-2 items-center justify-between mt-4'>
                    <li className='grid gap-0'>
                        <span className='text-base font-normal font-interMedium text-[#747474]'>
                            Last Order Date
                        </span>
                        <span className='md:text-xl text-base font-medium font-interMedium text-[#2B195A] '>
                            24 Jun 2023
                        </span>
                    </li>
                    <li className='grid gap-0'>
                        <span className='text-base font-normal font-interMedium text-[#747474]'>
                            Next Order Date
                        </span>
                        <span className='md:text-xl text-base font-medium font-interMedium text-[#279145] '>
                            24 Jun 2023
                        </span>
                    </li>
                </ul>
            </div>
            <div>
                <Link href="/customize" className='md:block hidden text-xl font-extrabold font-interMedium text-white rounded-[5px] bg-[#6D44DD] shadow-md md:w-[333px] mx-auto text-center p-5 mb-5'>
                    Start Backtesting
                </Link>
                <Link href="/customize" className='md:hidden block text-xl font-extrabold font-interMedium text-white rounded-[5px] bg-[#6D44DD] shadow-md md:w-[333px] mx-auto text-center p-5 mb-5'>
                    Go back
                </Link>
            </div>
        </div>
    )
}

export default Statics