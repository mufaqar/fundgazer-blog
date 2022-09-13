import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useInView } from 'react-hook-inview'; // use current active screen Area

export default function BlogFooter() {
    const [ref, inView] = useInView();
    const captcha = useRef(null);
    const [isVarified, setIsVarified] = useState(false);

    const handleOnChange = () => {
        if (captcha.current.getValue()) {
            console.log('captcha value');
            setIsVarified(true);
        } else {
            setIsVarified(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (captcha.current.getValue()) {
            console.log('submit');
        } else {
            alert('Please varify you are not robot.!');
        }
    };


    return (
        <>
            {/* Jion Us Section Start*/}
            <section className='bg-skin-primary'>
                <div className='container grid items-center grid-cols-1 gap-8 py-20 mx-auto md:grid-cols-2'>
                    <div className="p-5">
                        <h1 className='md:text-6xl text-4xl font-normal text-[#D1C6FF] font-interRegular'><span className='font-bold text-skin-light'>Join </span> Waitlist</h1>
                        <p className='mt-3 text-lg font-normal md:text-xl text-skin-light font-interRegular'>From building your diversified long-term portfolio and tracking you.</p>
                    </div>
                    <div className="p-5">
                        <div className='mt-8'>
                            <form className='space-x-0 space-y-2 md:flex md:space-x-2 md:space-y-0' onSubmit={handleSubmit} >
                                <input type="email" id="email" placeholder='Enter Email' name="email" className='font-interRegular bg-skin-light text-skin-muted md:text-2xl text-base font-normal outline-[#6F49DD] focus:outline-[#6F49DD] py-3 px-4 rounded-md md:w-3/4 w-full' />
                                <button type="submit" className='w-full py-3 text-lg font-semibold rounded-md font-interMedium bg-skin-dark text-skin-light hover:opacity-75 md:text-2xl md:w-1/4'>Join</button>
                            </form>
                            <ReCAPTCHA
                                ref={captcha}
                                sitekey="6Lc_b6ghAAAAAO4qDTfLsI44NR5guKc56BzSGkSY"
                                onChange={handleOnChange}
                                className="mt-3"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Jion Us Section End*/}
        </>
    )
}
