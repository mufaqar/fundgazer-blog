// MainForm.js
"use client";
import { useState } from 'react'
import Step1 from './step-one';
import Step2 from './step-two';
import Statics from '../statics';
import Holdings from '../holdings';
import { BsCheck } from 'react-icons/bs';
import LoadingComp from './loadingComp';

const FormWith_Loading = () => {

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
    const [stepCompleted, setStepCompleted] = useState([false, false, false, false]); // Initialize with as many elements as there are steps
    const handleClickStep = (stepIndex) => {
        // Update the stepCompleted state when a step is clicked
        const updatedStepCompleted = [...stepCompleted];
        updatedStepCompleted[stepIndex] = true;
        setStepCompleted(updatedStepCompleted);
    };

    const [showComponent, setShowComponent] = useState(false);

    const startDelay = () => {
        setShowComponent(true); // Show the component when the delay starts

        setTimeout(() => {
            setShowComponent(false); // Hide the component when the delay ends
            setActiveTab(activeTab + 1); // Automatically move to the next step
        }, 5000); // Set the delay time in milliseconds (5 seconds in this example)
    };
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
                        <ul className='flex flex-row overflow-hidden w-full [&>*:nth-child(1)>div]:w-0 md:pt-20'>
                            {formElements.map((item, idx) => {
                                const isCompleted = stepCompleted[idx];
                                const isActive = activeTab === idx;
                                return (
                                    <li key={idx} className={`w-full flex flex-col justify-center items-center relative`}>
                                        {
                                            isCompleted && <BsCheck className={`text-3xl mb-6 absolute top-[-60px] bg-[#279145] rounded-full text-white font-extrabold h-12 w-12`} />
                                        }
                                        <div className={`${isActive && "bg-skin-primary"} ${isCompleted ? "bg-[#279145]" : "bg-[#747474]"} w-full h-1 absolute top-[9px] left-[-53%] `}></div>
                                        <span className={`${isActive && "bg-skin-primary"} ${isCompleted ? "bg-[#279145]" : "bg-[#747474]"} h-[22px] w-[22px] mx-auto rounded-full block z-10`}></span>
                                        <p className={`text-2xl font-bold ${isActive && "text-skin-primary"} ${isCompleted ? "text-[#279145]" : "text-[#747474]"}  grid text-center`}>
                                            Step {item.key}.
                                            <span className={`text-xl font-bold ${isActive && "text-black"} ${isCompleted ? "text-black" : "text-[#747474]"}`}>
                                                {isCompleted ? "Step Completed" : "Select your risk level"}
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
                            !showComponent && formElements[activeTab]
                        }

                        {activeTab === 1 && !showComponent && (
                            <button className={`text-xl font-extrabold font-interMedium text-white rounded-[5px] bg-[#6D44DD] shadow-md md:w-[333px] mx-auto text-center p-5 block mb-5 ${showComponent && "bg-red-900"}`}
                                disabled={activeTab === formElements.length - 1 ? "disabled" : ""}
                                onClick={startDelay}>
                                {activeTab === formElements.length - 1 ? (<span>Start Backtesting</span>) : (<span>Step {activeTab + 2}</span>)}
                            </button>
                        )}

                        {showComponent && <LoadingComp />}
                    </div>
                    <div className='flex flex-wrap gap-x-6 mx-auto mt-10'>

                        {
                            activeTab === 1 && !showComponent || activeTab === formElements.length == 0 && <button className={`text-xl font-extrabold font-interMedium text-white rounded-[5px] bg-[#6D44DD] shadow-md md:w-[333px] mx-auto text-center p-5 block mb-5 ${showComponent && "bg-[#9E9E9E]"}`}
                                disabled={activeTab === formElements.length - 1 ? "disabled" : ""}
                                onClick={() => { setActiveTab(prev => prev + 1), handleClickStep(activeTab) }}>
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

export default FormWith_Loading
