import React from 'react'
import Holdings from '../components/holdings'
import Step1 from '../components/steps/step-one'

export default function Customize() {
    return (
        <main>
            <section className='md:pt-40 pt-32 pb-32 px-5 bg-[#F7F7F9]'>
                <div className='container mx-auto'>
                    <h2 className='md:text-[48px] text-2xl leading-[64px] font-semibold font-interRegular text-skin-primary'>
                        Customize
                    </h2>
                    <div className='grid md:grid-cols-3 grid-cols-1 md:gap-16 gap-0 mt-5'>
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
                        <p className='md:text-[22px] md:leading-[36.4px] text-sm font-normal font-interRegular max-w-[392px]'>
                            Every strategy on Composer is fully
                            editable. Swap out assets, adjust
                            programmatic logic, and tweak
                            parameters.
                        </p>
                    </div>
                </div>
            </section>
            <section className='-mt-14 mb-16 hidden'>
                <Holdings />
            </section>
            <section className='-mt-14 mb-16'>
               <Step1 />
            </section>
        </main>
    )
}
