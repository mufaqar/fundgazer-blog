import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useInView } from 'react-hook-inview'; // use current active screen Area
import JoinForm from './joinForm';

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
                        <div className='flex flex-col items-end mt-8'>
                            <JoinForm/>
                        </div>
                    </div>
                </div>
            </section>
            {/* Jion Us Section End*/}
        </>
    )
}
