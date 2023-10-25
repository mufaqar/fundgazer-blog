// MainForm.js
"use client";
import { useState } from 'react'
import Step1 from './step-one';
import Step2 from './step-two';
import Step3 from './step-three';
import Step4 from './step-four';

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
        <Step1 data={data} handleChange={handleChange} />,
        <Step2 data={data} handleChange={handleChange} />,
        <Step3 data={data} handleChange={handleChange} />,
        <Step4 data={data} handleChange={handleChange} />,

    ]

    return (
        <div className='bg-[#F2EDFF] shadow-md max-w-[1137px] mx-auto px-5 rounded-[5px] py-10'>
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
                {
                    activeTab === formElements.length - 1 ? <button className='text-xl font-extrabold font-interMedium text-white rounded-[5px] bg-[#6D44DD] shadow-md md:w-[333px] mx-auto text-center p-5 block mb-5' onClick={() => console.log(data)}>Submit</button> : null
                }
            </div>
        </div>
    )
}

export default MainForm