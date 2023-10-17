import Image from 'next/image'
import React from 'react'

function Testimonials() {
    return (
        <section className='py-20 px-5 bg-skin-primary'>
            <div className='container mx-auto grid md:grid-cols-3 grid-cols-1 gap-5'>
                <div>
                    <div className='relative max-w-[380px]'>
                        <Image src="/images/qoutel.png" alt="/images/qoutel.png" width={32} height={31} className='absolute left-0 top-2' />
                        <h2 className='md:text-[57px] md:leading-[64px] text-2xl font-semibold font-interMedium grid md:max-w-[280px] max-w-[114px] mx-auto'>
                            <span className='bg-[#E86A34] text-white w-fit p-1'>What</span>
                            <span className='bg-[#E86A34] text-white w-fit p-1 ml-auto mr-0'>people</span>
                            <span className='bg-[#E86A34] text-white w-fit p-1'>are</span>
                            <span className='bg-[#E86A34] text-white w-fit p-1 ml-auto mr-0'>saying</span>
                        </h2>
                        <Image src="/images/qouter.png" alt="/images/qouter.png" width={32} height={31} className='absolute right-0 bottom-5' />
                    </div>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-5 md:col-span-2'>
                    <div>
                        <div className='bg-[#E86A34] w-4 h-1'></div>
                        <p className='text-base font-normal font-interRegular text-white my-5 max-w-[290px]'>
                            Composer gives traders and investors at
                            all levels an easy and intuitive way to
                            develop, trade and automate their
                            investment strategies.
                        </p>
                        <Image src="/images/benz.png" alt="/images/benz.png" width={79} height={20} />
                    </div>
                    <div>
                        <div className='bg-[#E86A34] w-4 h-1'></div>
                        <p className='text-base font-normal font-interRegular text-white my-5 max-w-[290px]'>
                            Composer opens up to anyone the same
                            level (or better) of tools that top
                            quantitative hedge funds hire armies of
                            PhDs and computer scientists to build
                            internally.
                        </p>
                        <Image src="/images/acq.png" alt="/images/acq.png" width={79} height={20} />
                    </div>
                    <div>
                        <div className='bg-[#E86A34] w-4 h-1'></div>
                        <p className='text-base font-normal font-interRegular text-white my-5 max-w-[290px]'>
                            Composer gives traders and investors at
                            all levels an easy and intuitive way to
                            develop, trade and automate their
                            investment strategies.
                        </p>
                        <Image src="/images/benz.png" alt="/images/benz.png" width={79} height={20} />
                    </div>
                    <div>
                        <div className='bg-[#E86A34] w-4 h-1'></div>
                        <p className='text-base font-normal font-interRegular text-white my-5 max-w-[290px]'>
                            Most automations require you to
                            understand detailed spreadsheets and
                            unique coding languages, the learning
                            curve is often intense with these
                            platforms. That’s not the case at all with
                            Composer.
                        </p>
                        <Image src="/images/crasher.png" alt="/images/crasher.png" width={79} height={20} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials