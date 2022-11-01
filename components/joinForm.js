import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef } from 'react';
import { sendMail } from '../services/sendMail';

export default function JoinForm() {

    const [isVarified, setIsVarified] = useState(false);
    //console.log("🚀 ~ file: Hero.js ~ line 15 ~ Posts ~ isVarified", isVarified)
    const [getMailValue, setGetMailValue] = useState();

    const captcha = useRef(null);

    const handleChange = event => {
        setGetMailValue(event.target.value);
    };

    const handleOnChange = () => {
        if (captcha.current.getValue()) {
            console.log('captcha value');
            setIsVarified(true);
        } else {
            setIsVarified(false);
        }
    };

    async function handleSubmit(e) {
        e.preventDefault();
        if (captcha.current.getValue()) {
            console.log(getMailValue);
            console.log('submit');
            let response = await sendMail(getMailValue);
            console.log(response);
            setGetMailValue('')
            alert('Submited')
        } else {
            alert('Please varify you are not robot.!');
        }
    };

    return (
        <>
            
                <form
                    onSubmit={handleSubmit}
                    className="space-x-0 space-y-2 md:flex md:space-x-2 md:space-y-0"
                >
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter Email"
                        name="email"
                        value={getMailValue}
                        onChange={handleChange}
                        className="font-interRegular bg-skin-light text-skin-muted text-2xl font-normal outline-[#6F49DD] focus:outline-[#6F49DD] py-3 px-4 rounded-md md:max-w-[395px] w-full"
                    />
                    {/* <button
                  type="submit"
                  className="text-[#D1C6FF] font-interRegular border border-[#D1C6FF] bg-transparent md:hidden hover:bg-skin-buttonAccent hover:border-transparent text-base font-normal flex items-center py-3 px-12 rounded-md captcha"
                >
                  I am not a robot
                </button> */}

                    <button
                        type="submit"
                        className="flex items-center cursor-pointer px-12 py-3 text-[20px] w-full justify-center md:w-auto font-medium rounded-md font-interMedium bg-skin-dark text-skin-light hover:opacity-75 transition ease-in-out delay-75  hover:scale-110  duration-200"
                    >
                        Join
                    </button>
                </form>
                {/* <button type="submit" className="text-[#D1C6FF] hidden md:flex font-interRegular border border-[#D1C6FF] bg-transparent hover:bg-skin-buttonAccent hover:border-transparent text-base font-normal items-center py-3 px-12 rounded-md mt-5"
              >
                I am not a robot
              </button> */}
                <div className="mt-2 captch">
                    <ReCAPTCHA
                        ref={captcha}
                        sitekey="6Lc_b6ghAAAAAO4qDTfLsI44NR5guKc56BzSGkSY"
                        onChange={handleOnChange}
                    />
                </div>
   
        </>
    )
}
