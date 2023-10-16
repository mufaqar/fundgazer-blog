import Link from 'next/link';
import { BsCameraVideo } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-hook-inview'; // use current active screen Area
import OurCommunity from '../pages/our-community';
import { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import LiveResult from './liveResult';
import { sendMail } from '../services/sendMail';
import JoinForm from './joinForm';
import Image from 'next/image';
import Counter_Sec from './counter';
import Partners from './partners';

export default function Posts() {
  const [ref, inView] = useInView();
  const animationText = useAnimation();
  const tempanim = useRef(); // use to remove React Hook useEffect has a missing dependency:

  function animationfun() {
    if (inView) {
      animationText.start({
        opacity: 1,
        scale: 1,
        transition: {
          type: 'spring',
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

  tempanim.current = animationfun; // use to remove React Hook useEffect has a missing dependency:

  useEffect(() => {
    tempanim.current(); // use to remove React Hook useEffect has a missing dependency:
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
                The <span className="font-bold text-skin-primary">Future </span>
                of
                <span className="md:whitespace-nowrap">
                  Personal Investment.
                </span>
              </h1>
              <p className="mt-3 text-[15px] md:text-xl font-medium font-interRegular">
                From building your diversified long-term portfolio and tracking
                your assets to finding investment ideas, we got you covered.
              </p>
              <Link href="#" className='text-2xl font-bold inline-flex gap-2 items-center border-2 border-[#6f49dd] py-5 px-14 rounded-full hover:animate-bounce mt-10'>
                <BsCameraVideo strokeWidth={1.1} size={30} className='text-skin-primary' /> Watch Demo
              </Link>
            </motion.div>
            <div>
              <h4 className='text-xl font-semibold'>
                Download the app
              </h4>
              <Link href="#" className="inline-flex my-5 hover:animate-bounce" >
                <Image src="/images/google-play.png" alt="/images/google-play.png" width={242} height={70} />
              </Link>
              <Link href="#" className="inline-flex hover:animate-bounce" >
                <Image src="/images/app-store.png" alt="/images/app-store.png" width={242} height={70} />
              </Link>
            </div>

          </div>
          <div className="float-right col-span-2 overflow-x-hidden md:p-4 landingVideo">
            <div className="mt-10 md:mt-0 md:block md:mr-0 md:ml-0">
              <video
                width="1000"
                height="800"
                autoPlay="autoplay"
                className="float-right"
                loop
                muted
              >
                <source src="video/video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="float-right col-span-2 -mt-12 overflow-x-hidden md:hidden md:p-4 landingVideo">
            {/* <div className="ml-24 -mt-12 -mr-48 md:hidden">
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
            </div> */}

            <div className="block mx-4 md:hidden">
              <Link
                href="#cta"
                className="flex items-center mt-20 space-x-2 text-[20px] font-semibold lg:mt-0 font-interMedium group"
              >
                <span className="text-skin-primary animate-bounce">
                  <BsCameraVideo strokeWidth={2} />
                </span>
                <span className="">Join Waitlist </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Counter_Sec />
      <Partners />

      {/* Live result  */}
      {/* <div className="hidden lg:block">
        <LiveResult />
      </div> */}

      {/* Jion Us Section Start*/}
      <section className="bg-skin-primary cta" id="cta">
        <div className="container grid items-center lg:h-[70vh] grid-cols-1 gap-8 py-12 lg:py-20 mx-auto lg:grid-cols-2">
          <div className="order-last p-4 mt-10 md:order-first md:mt-0">
            <h1 className="text-[32px] leading-9 md:text-6xl font-normal text-[#D1C6FF] font-interRegular">
              <span className="font-bold text-skin-light">Join </span> Waitlist
            </h1>
            <p className="mt-3 text-[15px] md:text-xl font-normal text-skin-light font-interRegular max-w-[500px]">
              From building your diversified long-term portfolio and tracking
              you.
            </p>
            <div className="mt-8">
              <JoinForm />
            </div>
          </div>
          <div className="p-4 ">
            <h1 className="block md:hidden text-[32px] leading-9 md:text-6xl font-normal text-[#D1C6FF] font-interRegular mb-8">
              What is
              <br />
              <span className="font-bold text-skin-light"> Fundgazer? </span>
            </h1>
            {/* <iframe
              className="w-full rounded-lg aspect-video"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe> */}
          </div>
        </div>
      </section>

      {/* Jion Us Section End*/}
      <div className="md:hidden">
        <OurCommunity />
      </div>
    </>
  );
}
