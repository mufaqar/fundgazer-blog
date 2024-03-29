import React, { useState } from 'react'
import Models_Slider from '../components/modelSlider'
import Compare_Returns from '../components/compare-returns'
import AnyQuery_Sec from '../components/any-query'
import Mbl_Discover_Models from '../components/mbl-discover-models'
import Spromma from '../pages/spromma'

export default function Discover_Models() {
    const [OpenStatic, setOpenStatic] = useState(false)

    return (
        <main className='relative'>
            <section className={`md:pt-40 pt-32 pb-20 px-5 bg-[#F7F7F9] ${OpenStatic ? "hidden" : "block"}`}>
                <div className='container mx-auto'>
                    <h2 className='md:text-[54px] text-2xl leading-[64px] font-semibold font-interRegular'>
                        Discover <span className='text-skin-primary'>pre-build</span> models
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
            <div className={` ${OpenStatic ? "hidden" : "md:block hidden"}`}>
                <Models_Slider onClick={() => setOpenStatic(true)} />
            </div>
            <div className={` ${OpenStatic ? "hidden" : "md:block hidden"}`}>
                <Compare_Returns />
            </div>
            <div className={`${OpenStatic ? "hidden" : "md:hidden block"}`}>
                <Mbl_Discover_Models onClick={() => setOpenStatic(true)} />
            </div>
            <section className={`${OpenStatic ? "block" : "hidden"}`}>
                <Spromma />
            </section>
            <AnyQuery_Sec />
        </main>
    )
}