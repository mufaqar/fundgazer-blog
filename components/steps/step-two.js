import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import Add_Stocks from '../popups/add-stocks'

export default function Step2() {
    const [addStock, setAddStock] = useState(false)
    return (
        <>
            <div className={`max-w-[901px] mx-auto ${addStock ? "hidden" : "block"}`}>
                <div className='flex md:flex-row flex-col gap-8 justify-between'>
                    <div className='md:w-[68%] w-full'>
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
                    <div className='md:w-[32%] w-full steps'>
                        <button className='md:text-xl text-base font-extrabold font-interRegular text-skin-primary md:bg-white md:border border-[#2B195A] md:py-5 md:px-8 flex gap-3 items-center md:rounded-[5px]'
                        onClick={() => setAddStock(true)}>
                            <AiOutlinePlus className='md:text-2xl text-base text-black' /> Add Stocks
                        </button>
                    </div>
                </div>
                <div>
                    <div className='bg-[#D9D9D9] flex gap-8 py-3 px-4 justify-between w-full mt-8 rounded-[5px]'>
                        <div>
                            <p className='text-xl font-bold font-interMedium md:flex justify-between gap-1 hidden'>
                                No. of selected assets <span>:</span>
                            </p>
                            <p className='md:text-xl text-sm font-bold font-interMedium md:hidden flex justify-between gap-1'>
                                selected
                            </p>
                        </div>
                        <div className=''>
                            <p className='text-xl font-bold font-interMedium md:flex hidden justify-between gap-1 items-center'>
                                30 <span className='text-sm font-bold font-interMedium text-[#E04343]'>
                                    ( Minimum 30 assets  :   Maximum 100 assets )
                                </span>
                            </p>
                            <p className='md:text-xl text-base font-bold font-interMedium md:hidden flex justify-between gap-1 items-center'>
                                NO <span className='text-sm font-bold font-interMedium '>
                                    STOCKS SELECTED
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <div className='w-full overflow-x-scroll flex md:flex-row flex-col gap-4'>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((idx) => {
                                return (<ul key={idx} className='w-full flex flex-col gap-x-4 gap-4 pb-4'>
                                    <li className='text-base font-normal font-interRegular md:bg-white bg-[#E7E7FF] rounded-[5px] py-3.5 px-5 flex flex-row min-w-[286px] items-center gap-3 justify-between'>
                                        Stock Name <AiOutlineClose className='text-skin-primary text-xl font-extrabold' />
                                    </li>
                                    <li className='text-base font-normal font-interRegular md:bg-white bg-[#E7E7FF] rounded-[5px] py-3.5 px-5 flex-row min-w-[286px] items-center gap-3 justify-between md:flex hidden'>
                                        Stock Name <AiOutlineClose className='text-skin-primary text-xl font-extrabold' />
                                    </li>
                                    <li className='text-base font-normal font-interRegular md:bg-white bg-[#E7E7FF] rounded-[5px] py-3.5 px-5 flex-row min-w-[286px] items-center gap-3 justify-between md:flex hidden'>
                                        Stock Name <AiOutlineClose className='text-skin-primary text-xl font-extrabold' />
                                    </li>
                                    <li className='text-base font-normal font-interRegular md:bg-white bg-[#E7E7FF] rounded-[5px] py-3.5 px-5 flex-row min-w-[286px] items-center gap-3 justify-between md:flex hidden'>
                                        Stock Name <AiOutlineClose className='text-skin-primary text-xl font-extrabold' />
                                    </li>
                                </ul>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`absolute left-0 right-0 top-32 w-full bg-white z-30 md:py-20 pt-6 ${addStock ? "block" : "hidden"}`} >
                <Add_Stocks addStock={addStock} setAddStock={setAddStock} />
            </div>
        </>
    )
}