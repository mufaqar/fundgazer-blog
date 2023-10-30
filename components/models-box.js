import Link from 'next/link'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

export default function ModelBox() {
    return (
        <Link href="/spromma">
            <div className='md:bg-white bg-[#F2EDFF] p-7 shadow-md rounded-md relative'>
                <h4 className='md:text-2xl text-xl font-medium md:text-skin-primary text-black font-interMedium flex justify-between'>
                    Spromma
                </h4>
                <BiChevronRight className='text-black text-3xl absolute md:top-7 bottom-7 md:right-5 right-2' />
                <p className='text-sm font-normal font-interRegular mt-3 max-w-[278px]'>
                    A simple attractive text to why invest in Crypto
                </p>
                <div className='mt-5 flex gap-5'>
                    <p className='grid gap-1'>
                        <span className='md:text-sm text-xs font-normal font-interRegular text-[#8D8D8D]'>
                            Min. Amount
                        </span>
                        <span className='md:text-2xl text-xl font-extrabold font-interMedium'>
                            1,000
                        </span>
                    </p>
                    <p className='grid gap-1'>
                        <span className='md:text-sm text-xs font-normal font-interRegular text-[#8D8D8D]'>
                            CAGR (5 Yr)
                        </span>
                        <span className='md:text-2xl text-xl font-extrabold font-interMedium'>
                            32%
                        </span>
                    </p>
                    <p className='grid gap-1'>
                        <span className='md:text-sm text-xs font-normal font-interRegular text-[#8D8D8D]'>
                            Risk
                        </span>
                        <span className='text-xs leading-[24px] font-semibold font-interRegular text-center text-white bg-[#28C300] px-2 rounded-[5px]'>
                            Very Low
                        </span>
                    </p>
                </div>
            </div>
        </Link>
    )
}
