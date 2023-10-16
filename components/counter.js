import React from 'react'

function Counter_Sec() {
    return (
        <section className='py-16 px-5 bg-[#F1F0F580]'>
            <div className='container mx-auto grid md:grid-cols-3 grid-cols-1 gap-5 items-center md:divide-x-2 divide-x-0 md:divide-y-0 divide-y-2 divide-black/25'>
                <div className='text-center p-4'>
                    <h2 className='text-[32px] leading-[36px] font-semibold font-interBold'>
                        $1B+
                    </h2>
                    <p className='text-xl font-normal font-interRegular mt-2'>
                        trading volume
                    </p>
                </div>
                <div className='text-center p-4'>
                    <h2 className='text-[32px] leading-[36px] font-semibold font-interBold'>
                        900,000+
                    </h2>
                    <p className='text-xl font-normal font-interRegular mt-2'>
                        orders executed
                    </p>
                </div>
                <div className='text-center p-4'>
                    <h2 className='text-[32px] leading-[36px] font-semibold font-interBold'>
                        3M+
                    </h2>
                    <p className='text-xl font-normal font-interRegular mt-2'>
                        backtests run
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Counter_Sec