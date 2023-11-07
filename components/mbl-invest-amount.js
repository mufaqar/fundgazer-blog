import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Mbl_InvestAmount() {
    return (
        <div className='md:pt-40 pt-24 pb-20 px-5'>
            <p className='text-base font-normal text-[#747474]'>
                Assuming investment amount
            </p>
            <div>
                <p className='md:text-2xl text-xl font-semibold font-interMedium text-[#2B195A] mt-2'>
                    Rs. 10,000
                </p>
            </div>
            <form className='grid md:grid-cols-1 grid-cols-2 justify-between gap-8 items-center mt-8'>
                <div className='w-full'>
                    <label htmlFor="year" className='md:text-xl text-sm font-normal font-interRegular text-[#747474] w-full'>
                        Starting Year
                    </label>
                    <select id="year" className='w-full mt-2 py-2.5 px-4 border border-[#D9D9D9] focus:border focus:outline-0 text-sm font-medium text-skin-primary font-interRegular rounded-[5px]'>
                        <option selected value="2016" className='text-sm font-medium text-skin-primary font-interRegular'>2016</option>
                        <option value="2017" className='text-sm font-medium text-skin-primary font-interRegular'>2017</option>
                        <option value="2018" className='text-sm font-medium text-skin-primary font-interRegular'>2018</option>
                        <option value="2019" className='text-sm font-medium text-skin-primary font-interRegular'>2019</option>
                        <option value="2020" className='text-sm font-medium text-skin-primary font-interRegular'>2020</option>
                    </select>
                </div>
                <div className='w-full'>
                    <button className='md:text-2xl text-base font-bold w-full text-center items-center border-2 border-[#6f49dd] md:py-5 md:px-14 py-2 px-8 rounded-full hover:animate-bounce mt-10 bg-transparent  text-skin-primary '>
                        Calculate
                    </button>
                </div>
                <div className='w-full'>
                    <label htmlFor="type" className='md:text-xl text-sm font-normal font-interRegular text-[#747474] w-full'>
                        Algo Type
                    </label>
                    <select id="type" className='w-full mt-2 py-2.5 px-4 border border-[#D9D9D9] focus:border focus:outline-0 text-sm font-medium text-skin-primary font-interRegular rounded-[5px]'>
                        <option selected value="Growth_Portfolio" className='text-sm font-medium text-skin-primary font-interRegular'>Growth Portfolio</option>
                        <option value="Growth_Portfolio" className='text-sm font-medium text-skin-primary font-interRegular'>Growth Portfolio</option>
                    </select>
                </div>
                <div className='w-full'>
                    <label htmlFor="market" className='md:text-xl text-sm font-normal font-interRegular text-[#747474] w-full'>
                        Market
                    </label>
                    <select id="market" className='w-full mt-2 py-2.5 px-4 border border-[#D9D9D9] focus:border focus:outline-0 text-sm font-medium text-skin-primary font-interRegular rounded-[5px]'>
                        <option selected value="NIFTY" className='text-sm font-medium text-skin-primary font-interRegular'>NIFTY</option>
                        <option value="NIFTY" className='text-sm font-medium text-skin-primary font-interRegular'>NIFTY</option>
                    </select>
                </div>
            </form>
            <div className='mt-10'>
                <h4 className='text-2xl font-semibold font-interRegular '>
                    Results
                </h4>
            </div>
            <div className='mt-6'>
                <div className='flex md:flex-row flex-col gap-8 justify-between md:items-center mb-10'>
                    <div className='flex flex-row gap-10 items-end'>
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
                        <p className='md:text-xl text-sm font-normal font-interRegular text-[#747474] md:mt-5'>
                            VS
                        </p>
                    </div>
                    <div className='flex flex-row gap-10 items-end'>
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
                <p className='text-base font-medium font-interRegular text-black mb-5'>
                    Our Performance vs <span className='text-skin-primary'>NIFTY Index</span>
                </p>
                <Image src="/images/mbl-graph.png" alt="mbl-graph" width={901} height={414} />
            </div>
            <div className='mt-8'>
                <h6 className='text-base font-semibold mb-5'>
                    Download the app
                </h6>
                <div className='flex gap-5 justify-between'>
                    <Link href="#" className="inline-flex hover:animate-bounce" >
                        <Image src="/images/google-play.png" alt="/images/google-play.png" width={234} height={62} />
                    </Link>
                    <Link href="#" className="inline-flex hover:animate-bounce" >
                        <Image src="/images/app-store.png" alt="/images/app-store.png" width={234} height={62} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Mbl_InvestAmount