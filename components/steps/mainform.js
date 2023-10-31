// MainForm.js
"use client";
import { useState } from 'react'
import Step1 from './step-one';
import Step2 from './step-two';
import Step3 from './step-three';
import Step4 from './step-four';
import Statics from '../statics';
import Holdings from '../holdings';

const MainForm = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        dob: "",
        gender: "male",
        address: "",
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value,
        });
    };
    const [activeTab, setActiveTab] = useState(0)
    const formElements = [
        <Step1 data={data} handleChange={handleChange} key="1" />,
        <Step2 data={data} handleChange={handleChange} key="2" />,
        <Statics data={data} handleChange={handleChange} key="3" />,
        <Holdings data={data} handleChange={handleChange} key="4" />,

    ]

    return (
        <main>
            <section className={`pt-40 md:pb-32 px-5 md:bg-[#F7F7F9] md:block hidden`}>
                <div className='container mx-auto'>
                    <h2 className='md:text-[48px] text-2xl leading-[64px] font-semibold font-interRegular text-skin-primary'>
                        Customize <span className='text-black'>
                            and Create
                        </span>
                    </h2>
                    <div className={`grid md:grid-cols-3 grid-cols-1 md:gap-16 gap-0 mt-5 ${activeTab === 0 ? "block" : "md:hidden block"}`}>
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
                    <div className={`mt-5 ${activeTab >= 1 ? "md:block hidden" : "hidden"}`}>
                        <ul className='flex flex-row overflow-hidden w-full [&>*:nth-child(4)>div]:w-0'>
                            {formElements.map((item, idx) => {
                                return (
                                    <li key={idx} className={`w-full flex flex-col justify-center items-center relative`}>
                                        <div className={`${activeTab === item.key ? "bg-red-900" : "bg-black"} bg-[#747474] w-full h-1 absolute top-[9px] left-[53%] `}></div>
                                        <span className={`bg-[#747474] h-[22px] w-[22px]  mx-auto rounded-full block`}></span>
                                        <p className={`text-2xl font-bold text-[#747474] grid text-center`}>
                                            Step {item.key}.
                                            <span className={`text-xl font-bold text-[#747474]`}>
                                                Select your risk level
                                            </span>
                                        </p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>

            <section className={`md:-mt-14 mb-16`}>
                <div className='md:bg-[#F2EDFF] md:shadow-md max-w-[1137px] mx-auto px-5 rounded-[5px] py-10'>
                    <div>
                        {
                            formElements[activeTab]
                        }
                    </div>
                    <div className='flex flex-wrap gap-x-6 mx-auto mt-10'>
                        {
                            activeTab === formElements.length == 0 && <button className='text-xl font-extrabold font-interMedium text-white rounded-[5px] bg-[#6D44DD] shadow-md md:w-[333px] mx-auto text-center p-5 block mb-5'
                                disabled={activeTab === formElements.length - 1 ? "disabled" : ""}
                                onClick={() => setActiveTab(prev => prev + 1)}>
                                {activeTab === formElements.length - 1 ? (<span>Start Backtesting</span>) : (<span>Proceed : Step {activeTab + 2}</span>)}
                            </button>
                        }
                        {/* {
                            activeTab === formElements.length - 1 ? <button className='text-xl font-extrabold font-interMedium text-white rounded-[5px] bg-[#6D44DD] shadow-md md:w-[333px] mx-auto text-center p-5 block mb-5' onClick={() => console.log(data)}>Submit</button> : null
                        } */}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default MainForm