import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Step4() {
    return (
        <div className='max-w-[901px] mx-auto'>
            <div>
                <h3 className='text-4xl leading-5 font-semibold font-interMedium text-skin-primary mb-5'>
                    Step 4
                </h3>
                <p className='text-xl font-medium font-interRegular text-[#747474] mt-3'>
                    Add your preferred list of stocks
                </p>
            </div>
            <div className='my-8'>
                <p className='text-2xl font-medium font-interRegular text-[#2B195A]'>
                    Add your preferred list of stocks
                </p>
                <p className='text-base font-normal font-interRegular text-[#747474] mt-3'>
                    Use our no-code, visual editor to mdskdm lfmaw infegt
                </p>
            </div>
            <div className='h-[340px] w-full bg-[url("/images/customize-bg.png")] bg-center bg-cover bg-no-repeat flex items-center justify-center'>
                <Link href="#" className='rounded-[5px] bg-gradient-to-b bg-[#EF9C20] from-[#E86A34] shadow-xl md:w-[380px] mx-auto text-center p-4 grid gap-3 mb-5'>
                    <span className='text-xl font-semibold font-interRegular text-white'>
                        Go Live on our Mobile-Application
                    </span>
                    <span className='text-sm font-normal font-interRegular text-white'>
                        Add your broker for real-time execution of portfolio or
                        Add portfolio to watchlist for live testing on virtual amount.
                    </span>
                </Link>
            </div>
            <div className='grid gap-5'>
                <h4 className='text-2xl font-semibold text-[#2B195A] text-center'>
                    Download the app
                </h4>
                <div className='flex gap-6 mx-auto'>
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

export default Step4