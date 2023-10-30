import React, { useState } from 'react'
import ModelBox from './models-box'
import { BiChevronDown } from 'react-icons/bi'
import Mbl_Return_Calc from './mbl-return-calc'
import Mbl_InvestAmount from './mbl-invest-amount'

function Mbl_Discover_Models() {
    const [openCalc, setOpenCalc] = useState(false)
    const [openInvestPlan, setOpenInvestPlan] = useState(false)
    return (
        <>
            <section className={`'py-16 px-5 md:bg-[#F2EDFF] relative ${openCalc ? "hidden" : "block"}`}>
                <div className='container mx-auto grid gap-5'>
                    <ModelBox />
                    <ModelBox />
                    <ModelBox />
                    <ModelBox />
                    <div>
                        <button className='text-sm font-normal text-skin-primary font-interRegular flex w-fit ml-auto mr-0 items-center mt-5 md:hidden'>
                            See More Comments <BiChevronDown className='text-4xl animate-bounce' />
                        </button>
                    </div>
                </div>
            </section>
            <section className={`bg-[#D1C6FF80] ${openCalc ? "hidden" : "block"}`}>
                <div className='container mx-auto md:px-16 md:py-20 py-10 px-5'>
                    <div className='lg:w-1/3 md:hidden block'>
                        <h3 className='md:text-4xl text-xl font-normal font-interRegular'>
                            <strong>Compare</strong> Returns
                        </h3>
                        <p className='md:text-base text-xs font-normal font-interRegular my-5'>
                            From building your diversified long-term portfolio and tracking you.From building your diversified long-term portfolio and tracking you.
                        </p>
                        <button onClick={() => setOpenCalc(true)} className='md:text-2xl text-sm font-bold inline-flex gap-2 items-center border-2 border-[#6f49dd] md:py-5 md:px-14 py-4 px-8 rounded-full hover:animate-bounce mt-10 md:bg-white bg-skin-primary md:text-skin-dark text-skin-light'>
                            Return Calculator
                        </button>
                    </div>
                </div>
            </section>
            <section className={`${openCalc ? "block" : "hidden"} ${openInvestPlan ? "hidden" : "block"}`}>
                <Mbl_Return_Calc onClick={() => setOpenInvestPlan(true)} />
            </section>
            <section className={`${openInvestPlan ? "block" : "hidden"}`}>
                <Mbl_InvestAmount />
            </section>
        </>
    )
}

export default Mbl_Discover_Models