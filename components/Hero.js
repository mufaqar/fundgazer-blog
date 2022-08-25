import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-hook-inview"; // use current active screen Area
import OurCommunity from "../pages/our-community";
import {useRef} from 'react';
import ReCAPTCHA from "react-google-recaptcha";

export default function Posts() {
  const [ref, inView] = useInView();
  const animationText = useAnimation();
  const tempanim = useRef(); // use to remove React Hook useEffect has a missing dependency:
  const [isVarified, setIsVarified] = useState(false);
  console.log("🚀 ~ file: Hero.js ~ line 15 ~ Posts ~ isVarified", isVarified)

  const captcha = useRef(null);

  const handleOnChange=()=> {
     if(captcha.current.getValue()) {
      console.log('captcha value')
      setIsVarified(true)
     }else{
      setIsVarified(false)
      alert('Please varify you are not robot.!')
     }
  }

  
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(captcha.current.getValue()) {
        console.log('submit')
     }else{
      alert('varify you are not robot')
     }
  }
  



  function animationfun(){
    if (inView) {
      animationText.start({
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
    } else {
      animationText.start({
        opacity: 0,
        scale: 0.8,
      });
    }
  }

  tempanim.current = animationfun  // use to remove React Hook useEffect has a missing dependency:

  useEffect(() => {
    tempanim.current()   // use to remove React Hook useEffect has a missing dependency:
  }, [inView]);





  return (
    <>
      {/* Banner Section Start*/}
      <section>
        <div className="container grid items-center lg:h-[800px] grid-cols-1 gap-4 py-10 pt-0 mx-auto lg:grid-cols-3 mt-20">
          <div
            ref={ref}
            className="flex flex-col justify-between h-full p-4 pt-10 pb-0 md:py-20 lg:pb-24"
          >
            <motion.div className="z-10" animate={animationText}>
              <h1 className="text-[32px] leading-9 md:text-6xl font-thin font-interRegular">
                The <span className="font-bold text-skin-primary">Future </span>of <span className="md:whitespace-nowrap">
                  Personal Investment.
                </span>
              </h1>
              <p className="mt-3 text-[15px] md:text-xl font-medium font-interRegular">
                From building your diversified long-term portfolio and tracking
                your assets to finding investment ideas, we got you covered.
              </p>
            </motion.div>
            <Link href="#cta">
              <a className="items-center hidden mt-20 space-x-2 text-3xl font-semibold md:flex lg:mt-0 font-interMedium group">
                <span className="text-skin-primary animate-bounce">
                  <BsChevronDown strokeWidth={2} />
                </span>
                <span className="">Join Waitlist </span>
              </a>
            </Link>
          </div>
          <div className="float-right col-span-2 overflow-x-hidden md:p-4 landingVideo">
            <div className="mr-24 md:block md:mr-0 md:ml-0 -ml-28">
              <video
                width="1000"
                height="800"
                autoPlay="autoplay"
                className=""
                loop
                muted
              >
                <source src="video/video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="float-right col-span-2 -mt-12 overflow-x-hidden md:hidden md:p-4 landingVideo">
            <div className="ml-24 -mt-12 md:hidden -mr-28">
              <video
                width="1000"
                height="800"
                autoPlay="autoplay"
                className=""
                loop
                muted
              >
                <source src="video/video.mp4" type="video/mp4" />
              </video>
            </div>
            
            
          
            <div className="block mx-4 md:hidden">
              <Link href="#">
                <a className="flex items-center mt-20 space-x-2 text-[20px] font-semibold lg:mt-0 font-interMedium group">
                  <span className="text-skin-primary animate-bounce">
                    <BsChevronDown strokeWidth={2} />
                  </span>
                  <span className="">Join Waitlist </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End*/}

      {/* Jion Us Section Start*/}
      <section className="bg-skin-primary cta" id="cta">
        <div className="container grid items-center lg:h-[70vh] grid-cols-1 gap-8 py-12 lg:py-20 mx-auto md:grid-cols-2">
          <div className="order-last p-4 mt-10 md:order-first md:mt-0">
            <h1 className="text-[32px] leading-9 md:text-6xl font-normal text-[#D1C6FF] font-interRegular">
              <span className="font-bold text-skin-light">Join </span> Waitlist
            </h1>
            <p className="mt-3 text-[15px] md:text-xl font-normal text-skin-light font-interRegular max-w-[500px]">
              From building your diversified long-term portfolio and tracking
              you.
            </p>
            <div className="mt-8">
              <form onSubmit={handleSubmit} className="space-x-0 space-y-2 md:flex md:space-x-2 md:space-y-0">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  name="email"
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
              <div className="captch mt-2">
                <ReCAPTCHA
                  ref={captcha}
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={handleOnChange}
                />
              </div>
            </div>
          </div>
          <div className="p-4 ">
            <h1 className="block md:hidden text-[32px] leading-9 md:text-6xl font-normal text-[#D1C6FF] font-interRegular mb-8">
              What is
              <br />
              <span className="font-bold text-skin-light"> Fundgazer? </span>
            </h1>
            <iframe
              className="w-full rounded-lg aspect-video"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </div>
        </div>
      </section>
      {/* Jion Us Section End*/}
      <div className="md:hidden">
        <OurCommunity/>
      </div>
    </>
  );
}
