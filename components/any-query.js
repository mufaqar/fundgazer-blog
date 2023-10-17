import React from 'react'

function AnyQuery_Sec() {
    return (
        <section className='bg-[#F7F7F9] py-20 px-5'>
            <div className='container mx-auto grid md:grid-cols-3 grid-cols-1 gap-5 items-center'>
                <div>
                    <h2 className='md:text-[32px] md:leading-[64px] text-2xl font-semibold font-interRegular'>
                        Have Any Queries ?
                    </h2>
                    <p className='md:text-base text-sm font-normal font-interRegular max-w-[300px] mt-5'>
                        From building your diversified long-term portfolio and tracking you.
                    </p>
                </div>
                <div className='md:col-span-2'>
                    <form className="flex md:flex-row flex-col md:gap-3 gap-5" >
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Enter Phone no."
                            name="phone"
                            value=""
                            className="font-interLight bg-skin-light text-skin-muted text-xl font-normal outline-[#6F49DD] focus:outline-[#6F49DD] py-3 px-4 rounded-md md:max-w-[395px] w-full"
                        />
                        <button
                            type="submit"
                            className="flex items-center cursor-pointer px-8 py-3 text-xl w-full justify-center md:w-auto font-medium rounded-md font-interMedium bg-[#E86A34] text-skin-light hover:opacity-90 transition ease-in-out delay-75 hover:scale-110 duration-200"
                        >
                            Get Call-back
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AnyQuery_Sec