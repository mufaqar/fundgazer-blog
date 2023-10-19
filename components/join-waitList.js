import React from 'react'
import JoinForm from './joinForm'

function Join_WaitList() {
    return (
        <section className="bg-skin-primary cta " id="cta">
            <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 items-center gap-5 py-16">
                <div className="">
                    <h1 className="text-[32px] leading-9 md:text-6xl font-normal text-white font-interRegular">
                        <span className='bg-[#E86A34] text-white w-fit p-1 font-bold'>Join</span> Waitlist
                    </h1>
                    <p className="mt-3 text-[15px] md:text-xl font-normal text-skin-light font-interRegular max-w-[500px]">
                        From building your diversified long-term portfolio and tracking
                        you.
                    </p>
                </div>
                <div className="md:col-span-2">
                    <JoinForm />
                </div>
            </div>
        </section>
    )
}

export default Join_WaitList