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
import IconBox from './icon_box';
import PreBuild_Models from './prebuild-models';
import Customize_Sec from './customize-sec';
import Testimonials from './testimonials';
import Faqs_Sec from './faq-sec';
import AnyQuery_Sec from './any-query';
import Join_WaitList from './join-waitList';

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
              <h1 className="text-[32px] leading-9 md:text-6xl font-bold font-interRegular">
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
            <div className='grid gap-3'>
              <h4 className='text-xl font-semibold'>
                Download the app
              </h4>
              <Link href="#" className="inline-flex hover:animate-bounce" >
                <Image src="/images/google-play.png" alt="/images/google-play.png" width={234} height={62} />
              </Link>
              <Link href="#" className="inline-flex hover:animate-bounce" >
                <Image src="/images/app-store.png" alt="/images/app-store.png" width={234} height={62} />
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
      <section className='py-16 px-5'>
        <div className='container mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-5 items-center'>
          <IconBox
            title="More automation, less worry"
            content="Composer executes your trading strategy, making
              trades and rebalancing automatically. Composer executes your trading strategy." />
          <IconBox
            title="More automation, less worry"
            content="Composer executes your trading strategy, making
              trades and rebalancing automatically. Composer executes your trading strategy." />
          <IconBox
            title="More automation, less worry"
            content="Composer executes your trading strategy, making
              trades and rebalancing automatically. Composer executes your trading strategy." />
          <IconBox
            title="More automation, less worry"
            content="Composer executes your trading strategy, making
              trades and rebalancing automatically. Composer executes your trading strategy." />
        </div>
      </section>

      <PreBuild_Models />
      <Customize_Sec />
      <Testimonials />

      {/* Live result  */}
      {/* <div className="hidden lg:block">
        <LiveResult />
      </div> */}

     <Join_WaitList />

      <Faqs_Sec />
      <AnyQuery_Sec />
    </>
  );
}
