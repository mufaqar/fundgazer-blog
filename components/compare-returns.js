import React from 'react'
import AlertBox from './alert-box'
import Image from 'next/image'

function Compare_Returns() {
    return (
        <section className='py-20'>
            <div className='container mx-auto md:px-5 px-0'>
                <div className='max-w-[75%] mx-auto md:bg-[#F8F8F8] md:rounded-tr-md rounded-t-md md:p-16 p-5'>
                    <div className='flex md:flex-row flex-col-reverse gap-8 justify-between'>
                        <div>
                            <h2 className='md:text-4xl text-xl font-normal font-interRegular md:text-skin-primary'>
                                <strong>Compare</strong> Returns
                            </h2>
                            <p className='text-base font-normal font-interRegular text-[#747474] mt-2'>
                                Assuming investment amount
                            </p>
                        </div>
                        <div className='md:block hidden'>
                            <AlertBox />
                        </div>
                    </div>
                    <div className='flex flex-row justify-between mt-10'>
                        <div>
                            <p className='text-xl font-normal font-interRegular text-[#747474] md:block hidden'>
                                Assuming investment amount
                            </p>
                            <p className='md:text-2xl text-xl font-semibold font-interMedium text-[#2B195A] mt-2'>
                                Rs. 10,000
                            </p>
                        </div>
                        <button className='text-xl font-extrabold font-interRegular text-white bg-skin-primary p-5 rounded-[5px]'>
                            Calculate
                        </button>
                    </div>
                </div>
                <div className='md:bg-[#F8F8F8] md:drop-shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-md md:p-16 p-5'>
                    <div className='flex md:flex-row flex-col justify-between gap-8 items-center'>
                        <div className='w-full'>
                            <label for="year" className='md:text-xl text-base font-normal font-interRegular text-[#747474] w-full'>
                                Starting Year
                            </label>
                            <select id="year" className='w-full mt-2 py-2.5 px-5 border border-[#D9D9D9] focus:border focus:outline-0 text-xl font-medium text-skin-primary font-interRegular'>
                                <option selected value="2016" className='text-xl font-medium text-skin-primary font-interRegular'>2016</option>
                                <option value="2017" className='text-xl font-medium text-skin-primary font-interRegular'>2017</option>
                                <option value="2018" className='text-xl font-medium text-skin-primary font-interRegular'>2018</option>
                                <option value="2019" className='text-xl font-medium text-skin-primary font-interRegular'>2019</option>
                                <option value="2020" className='text-xl font-medium text-skin-primary font-interRegular'>2020</option>
                            </select>
                        </div>
                        <div className='w-full'>
                            <label for="type" className='md:text-xl text-base font-normal font-interRegular text-[#747474] w-full'>
                                Algo Type
                            </label>
                            <select id="type" className='w-full mt-2 py-2.5 px-5 border border-[#D9D9D9] focus:border focus:outline-0 text-xl font-medium text-skin-primary font-interRegular'>
                                <option selected value="Growth_Portfolio" className='text-xl font-medium text-skin-primary font-interRegular'>Growth Portfolio</option>
                                <option value="Growth_Portfolio" className='text-xl font-medium text-skin-primary font-interRegular'>Growth Portfolio</option>
                            </select>
                        </div>
                        <div className='w-fit'>
                            <p className='text-xl font-normal font-interRegular text-[#838383] mt-5'>
                                VS
                            </p>
                        </div>
                        <div className='w-full'>
                            <label for="market" className='md:text-xl text-base font-normal font-interRegular text-[#747474] w-full'>
                                Market
                            </label>
                            <select id="market" className='w-full mt-2 py-2.5 px-5 border border-[#D9D9D9] focus:border focus:outline-0 text-xl font-medium text-skin-primary font-interRegular'>
                                <option selected value="NIFTY" className='text-xl font-medium text-skin-primary font-interRegular'>NIFTY</option>
                                <option value="NIFTY" className='text-xl font-medium text-skin-primary font-interRegular'>NIFTY</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='max-w-[75%] mx-auto md:bg-[#F8F8F8] md:rounded-br-md rounded-b-md md:p-16 p-5'>
                    <div className='flex md:flex-row flex-col justify-between md:items-center mb-10'>
                        <div className='flex flex-row gap-10 justify-between items-end'>
                            <div>
                                <p className='md:text-2xl text-base font-bold font-interBold text-skin-primary'>
                                    Our Algo Return
                                </p>
                                <p className='md:text-xl text-xs font-normal font-interRegular text-[#747474] mt-5'>
                                    Current Amount
                                </p>
                                <p className='md:text-[32px] md:leading-[32.54px] text-xl font-semibold font-interMedium text-skin-primary mt-2'>
                                    232341.3
                                </p>
                            </div>
                            <div>
                                <p className='md:text-xl text-xs font-normal font-interRegular text-[#747474] mt-5'>
                                    Annual Return
                                </p>
                                <p className='md:text-[32px] md:leading-[32.54px] text-xl font-normal font-interMedium text-skin-primary mt-2'>
                                    34%
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className='md:text-xl text-sm font-normal font-interRegular text-[#747474] mt-5'>
                                VS
                            </p>
                        </div>
                        <div className='flex flex-row gap-10 justify-between items-end'>
                            <div>
                                <p className='md:text-2xl text-base font-bold font-interBold text-[#615F5F]'>
                                    NIFTY Return
                                </p>
                                <p className='md:text-xl text-xs font-normal font-interRegular text-[#747474] mt-5'>
                                    Current Amount
                                </p>
                                <p className='md:text-[32px] md:leading-[32.54px] text-xl font-normal font-interRegular text-[#575757] mt-2'>
                                    232341.3
                                </p>
                            </div>
                            <div>
                                <p className='md:text-xl text-xs font-normal font-interRegular text-[#747474] mt-5'>
                                    Annual Return
                                </p>
                                <p className='md:text-[32px] md:leading-[32.54px] text-xl font-normal font-interRegular text-[#575757] mt-2'>
                                    34%
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image src="/images/graph.png" alt="/images/graph.png" width={901} height={414} />
                </div>
            </div>
        </section>
    )
}

export default Compare_Returns