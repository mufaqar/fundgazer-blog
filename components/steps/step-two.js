import React from 'react'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'

export default function Step2() {

    return (
        <div className='max-w-[901px] mx-auto'>
            <div className='flex md:flex-row flex-col gap-8 justify-between'>
                <div className='md:w-[68%]'>
                    <h3 className='md:text-4xl md:leading-5 text-base font-semibold font-interMedium text-skin-primary mb-5'>
                        Step 2
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
                    <button className='text-xl font-extrabold font-interRegular text-skin-primary bg-white border border-[#2B195A] py-5 px-8 flex gap-3 items-center rounded-[5px]'>
                        <AiOutlinePlus className='text-2xl text-black' /> Add Stocks
                    </button>
                </div>
            </div>
            <div>
                <div className='bg-[#D9D9D9] grid grid-cols-3 gap-8 py-3 px-4 justify-between w-full mt-8'>
                    <div>
                        <p className='text-xl font-bold font-interMedium flex justify-between'>
                            No. of selected assets <span>:</span>
                        </p>
                    </div>
                    <div>
                        <p className='text-xl font-bold font-interMedium'>
                            30
                        </p>
                    </div>
                    <div>
                        <p className='text-sm font-bold font-interMedium text-[#E04343]'>
                            ( Minimum 30 assets  :   Maximum 100 assets )
                        </p>
                    </div>
                </div>
                <div className='mt-8'>
                    <div className='w-full overflow-x-scroll flex flex-row gap-4'>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((idx) => {
                            return (<ul key={idx} className='w-full flex flex-col gap-x-4 gap-4 pb-4'>
                                <li className='text-base font-normal font-interRegular bg-white rounded-[5px] py-3.5 px-5 flex flex-row min-w-[286px] items-center gap-3 justify-between'>
                                    Stock Name <AiOutlineClose className='text-skin-primary text-xl font-extrabold' />
                                </li>
                                <li className='text-base font-normal font-interRegular bg-white rounded-[5px] py-3.5 px-5 flex flex-row min-w-[286px] items-center gap-3 justify-between'>
                                    Stock Name <AiOutlineClose className='text-skin-primary text-xl font-extrabold' />
                                </li>
                                <li className='text-base font-normal font-interRegular bg-white rounded-[5px] py-3.5 px-5 flex flex-row min-w-[286px] items-center gap-3 justify-between'>
                                    Stock Name <AiOutlineClose className='text-skin-primary text-xl font-extrabold' />
                                </li>
                                <li className='text-base font-normal font-interRegular bg-white rounded-[5px] py-3.5 px-5 flex flex-row min-w-[286px] items-center gap-3 justify-between'>
                                    Stock Name <AiOutlineClose className='text-skin-primary text-xl font-extrabold' />
                                </li>
                            </ul>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}