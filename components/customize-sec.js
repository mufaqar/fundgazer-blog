import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsCameraVideo } from 'react-icons/bs'

function Customize_Sec() {
    return (
        <section>
            <div className='px-5 pt-16 pb-24 bg-[#F7F7F9] '>
                <div className='container mx-auto'>
                    <h2 className='md:text-[54px] text-2xl leading-[64px] font-semibold font-interRegular'>
                        <span className='text-skin-primary'>Customize</span>  and Create
                    </h2>
                    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-0 mt-5'>
                        <p className='md:text-[22px] md:leading-[36.4px] text-sm font-normal font-interRegular max-w-[392px]'>
                            Every strategy on Composer is fully
                            editable. Swap out assets, adjust
                            programmatic logic, and tweak
                            parameters.
                        </p>
                        <p className='md:text-[22px] md:leading-[38.4px] text-sm font-normal font-interRegular max-w-[392px]'>
                            Use our no-code, visual editor to modify
                            symphonies or create your own from
                            scratch.
                        </p>
                    </div>
                </div>
            </div>
            <div className='px-5 pb-16 -mt-12'>
                <div className='container mx-auto bg-[#D1C6FF80] rounded-[5px] md:px-16 md:py-20 p-10'>
                    <div className='flex lg:flex-row flex-col md:justify-end gap-5'>
                        <div className='lg:w-1/3 md:hidden block text-center'>
                            <h3 className='md:text-4xl text-xl font-normal font-interRegular text-center'>
                                <strong>Compare</strong> Returns
                            </h3>
                            <p className='md:text-base text-xs font-normal font-interRegular my-5 text-center'>
                                From building your diversified long-term portfolio and tracking you.From building your diversified long-term portfolio and tracking you.
                            </p>
                            <div className='flex bg-black rounded-md'>
                                <Image src="/images/calcu1.png" alt="/images/calcu1.png" width={87} height={51} />
                                <Image src="/images/calcu2.png" alt="/images/calcu2.png" width={87} height={51} />
                                <Image src="/images/calcu3.png" alt="/images/calcu3.png" width={87} height={51} />
                            </div>
                            <Link href="#" className='md:text-2xl text-sm font-bold inline-flex gap-2 items-center border-2 border-[#6f49dd] md:py-5 md:px-14 py-4 px-8 rounded-full hover:animate-bounce mt-10 md:bg-white bg-skin-primary md:text-skin-dark text-skin-light'>
                                Return Calculator
                            </Link>
                        </div>
                        <div className='lg:w-1/3 md:block hidden'>
                            <h3 className='md:text-4xl text-xl font-bold font-interBold'>
                                Check out our returns
                            </h3>
                            <p className='md:text-base text-xs font-normal font-interRegular mt-5'>
                                From building your diversified long-term portfolio and tracking you.From building your diversified long-term portfolio and tracking you.
                            </p>
                            <Link href="#" className='md:text-2xl text-sm font-bold inline-flex gap-2 items-center border-2 border-[#6f49dd] md:py-5 md:px-14 py-4 px-8 rounded-full hover:animate-bounce mt-10 bg-white'>
                                <BsCameraVideo strokeWidth={1.1} className='text-skin-primary md:text-3xl text-xl' /> Watch Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customize_Sec