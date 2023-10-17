import React from 'react'

function Counter_Sec() {
    return (
        <section className='py-16 px-5 bg-[#F1F0F580]'>
            <div className='container mx-auto grid grid-cols-3 gap-5 items-center divide-x-2 divide-black/25'>
                <div className='text-center md:p-4 p-2'>
                    <h2 className='md:text-[32px] md:leading-[36px] text-sm font-semibold font-interBold'>
                        $1B+
                    </h2>
                    <p className='md:text-xl text-xs font-normal font-interRegular mt-2'>
                        trading volume
                    </p>
                </div>
                <div className='text-center md:p-4 p-2'>
                    <h2 className='md:text-[32px] md:leading-[36px] text-sm font-semibold font-interBold'>
                        900,000+
                    </h2>
                    <p className='md:text-xl text-xs font-normal font-interRegular mt-2'>
                        orders executed
                    </p>
                </div>
                <div className='text-center md:p-4 p-2'>
                    <h2 className='md:text-[32px] md:leading-[36px] text-sm font-semibold font-interBold'>
                        3M+
                    </h2>
                    <p className='md:text-xl text-xs font-normal font-interRegular mt-2'>
                        backtests run
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Counter_Sec