import React, { useState } from 'react'
import Statics from './statics'
import Holdings from './holdings'
import Link from 'next/link'
import Image from 'next/image'
import MainForm from './steps/mainform'

function Mbl_StaticHolding() {
    const [Static, setStatic] = useState(true)
    const [Holding, setHolding] = useState(false)
    const [openForm, setOpenForm] = useState(false)
    return (
        <>
        <div className={`py-20 px-5 ${openForm ? "hidden" : "block"}`}>
            <ul className='flex w-full'>
                <li onClick={() => { setStatic(true), setHolding(false) }} className={`w-full text-base font-bold text-center pb-2 border-b-2 ${Static ? "text-skin-primary border-[#6F49DD]" : "text-[#9B9797] border-[#9B9797]"}`}>
                    Statics
                </li>
                <li onClick={() => { setHolding(true), setStatic(false) }} className={`w-full text-base font-bold text-center pb-2 border-b-2 ${Holding ? "text-skin-primary border-[#6F49DD]" : "text-[#9B9797] border-[#9B9797]"}`}>
                    Holdings
                </li>
            </ul>
            <div>
                <div className={`${Static ? "block" : "hidden"}`}>
                    <Statics />
                    <div className='mt-8'>
                        <h6 className='text-base font-semibold mb-5'>
                            Download the app
                        </h6>
                        <div className='flex gap-5 justify-between'>
                            <Link href="#" className="inline-flex hover:animate-bounce" >
                                <Image src="/images/google-play.png" alt="/images/google-play.png" width={234} height={62} />
                            </Link>
                            <Link href="#" className="inline-flex hover:animate-bounce" >
                                <Image src="/images/app-store.png" alt="/images/app-store.png" width={234} height={62} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={` ${Holding ? "block" : "hidden"}`}>
                    <Holdings openForm={() => setOpenForm(true)} />
                </div>
            </div>
        </div>
         <section className={`-mt-14 mb-16 ${openForm ? "block" : "hidden"}`}>
         <MainForm />
     </section>
     </>
    )
}

export default Mbl_StaticHolding