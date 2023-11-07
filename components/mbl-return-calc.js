import React from 'react'
import { FiAlertTriangle } from 'react-icons/fi'

function Mbl_Return_Calc({onClick}) {
    return (
        <div className='md:pt-40 pt-32 pb-20 px-5'>
            <h3 className='text-2xl font-semibold font-interRegular mb-5'>
                Returns Calculator
            </h3>
            <p className='text-base font-normal text-[#747474]'>
                Assuming investment amount
            </p>
            <div>
                <p className='md:text-2xl text-xl font-semibold font-interMedium text-[#2B195A] mt-2'>
                    Rs. 10,000
                </p>
            </div>
            <div className='md:bg-[#F8F8F8] md:drop-shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-md mt-8'>
                <div className='flex md:flex-row flex-col justify-between gap-8 items-center'>
                    <div className='w-full'>
                        <label htmlFor="year" className='md:text-xl text-base font-normal font-interRegular text-[#747474] w-full'>
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
                        <label htmlFor="type" className='md:text-xl text-base font-normal font-interRegular text-[#747474] w-full'>
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
                        <label htmlFor="market" className='md:text-xl text-base font-normal font-interRegular text-[#747474] w-full'>
                            Market
                        </label>
                        <select id="market" className='w-full mt-2 py-2.5 px-5 border border-[#D9D9D9] focus:border focus:outline-0 text-xl font-medium text-skin-primary font-interRegular'>
                            <option selected value="NIFTY" className='text-xl font-medium text-skin-primary font-interRegular'>NIFTY</option>
                            <option value="NIFTY" className='text-xl font-medium text-skin-primary font-interRegular'>NIFTY</option>
                        </select>
                    </div>
                    <button onClick={onClick} className='md:text-2xl text-sm font-bold inline-flex gap-2 items-center border-2 border-[#6f49dd] md:py-5 md:px-14 py-4 px-8 rounded-full hover:animate-bounce mt-10 bg-transparent  text-skin-primary '>
                        <FiAlertTriangle size={20} strokeWidth={2} className='text-[#E86A34]' />  Calculate
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Mbl_Return_Calc