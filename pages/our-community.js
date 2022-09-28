import { BsDiscord } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { BiPolygon } from 'react-icons/bi';
import { FiLayers } from 'react-icons/fi';
import { FiClock } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef } from 'react';

export default function OurCommunity() {
  const handleOnChange = () => {
    if (captcha.current.getValue()) {
      console.log('captcha value');
      setIsVarified(true);
    } else {
      setIsVarified(false);
    }
  };
  const route = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (captcha.current.getValue()) {
      console.log('submit');
    } else {
      alert('Please varify you are not robot.!');
    }
  };
  const captcha = useRef(null);
  return (
    <>
      {/* Banner Section Start*/}
      <section className="lg:h-[60vh] flex">
        <div className="container grid items-center grid-cols-1 gap-8 pb-8 mx-auto mt-24 lg:pt-0 md:grid-cols-2">
          <div className="p-4">
            <h1 className="text-4xl font-normal md:text-6xl font-interRegular">
              <span className="font-bold text-skin-primary font-interBold ">
                Join
              </span>
              Our Community
            </h1>
            <p className="mt-3 text-base font-medium md:text-xl font-interRegular">
              We are all about giving personal investors the tools and resources
              they need, to make informed decisions.
            </p>
            <Link href="/our-community">
              <a
                className={`flex md:hidden w-full justify-end items-center mt-6 space-x-2 text-[20px] font-semibold lg:mt-0 font-interMedium ${
                  route.pathname === '/our-community' ? 'hidden' : 'block'
                } `}
              >
                <span className="">Explore</span>
                <span className="text-skin-primary text-[2rem] bounce_right">
                  <FaAngleRight strokeWidth={2} />
                </span>
              </a>
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 p-4 md:justify-end lg:flex-nowrap">
            <a
              href="https://discord.gg/4TZTWM4AmU"
              target="_blank"
              rel="noreferrer"
              className="flex items-center py-3 space-x-3 text-lg font-semibold w-full rounded-md font-interRegular bg-skin-dark text-skin-light hover:opacity-75 md:text-2xl px-7 justify-center  md:max-w-[200px] transition ease-in-out delay-75  hover:scale-110 hover:bg-skin-primary duration-200"
            >
              <BsDiscord /> <span>Discord</span>
            </a>
            <a
              href="https://t.me/fundgazer"
              target="_blank"
              rel="noreferrer"
              className="flex items-center py-3 space-x-3 text-lg font-semibold w-full rounded-md font-interRegular bg-skin-buttonAccent hover:bg-skin-buttonMuted text-skin-light md:text-2xl px-7 justify-center md:max-w-[200px] transition ease-in-out delay-75  hover:scale-110 duration-200"
            >
              <FaTelegramPlane /> <span>Telegram</span>
            </a>
          </div>
        </div>
      </section>
      {/* Banner Section End*/}

      {/* Resources Section Start*/}
      <section
        className={`bg-[#E9E1FF] flex items-center lg:h-[40vh] ${
          route.pathname === '/our-community' ? 'block' : 'hidden'
        }`}
      >
        <div className="container grid grid-cols-1 gap-2 py-12 mx-auto md:py-20 md:grid-cols-4">
          <div className="p-4 transition-all duration-300 ease-in-out transform cursor-pointer hover:-translate-y-2">
            <h5 className="flex items-center mb-3 space-x-2 text-xl font-bold font-interBold md:text-2xl">
              <span className="text-skin-primary">
                <BiPolygon strokeWidth={2} />
              </span>
              <span>Belong</span>
            </h5>
            <p className="text-base font-normal font-interRegular md:text-xl text-skin-muted">
              Get real-time advice and support from a community of experienced
              investors and don’t forget to give back!
            </p>
          </div>
          <div className="p-4 transition-all duration-300 ease-in-out transform cursor-pointer hover:-translate-y-2">
            <h5 className="flex items-center mb-3 space-x-2 text-xl font-bold font-interBold md:text-2xl">
              <span className="text-skin-primary">
                <FiLayers strokeWidth={3} />
              </span>
              <span>Resources</span>
            </h5>
            <p className="text-base font-normal font-interRegular md:text-xl text-skin-muted">
              Learn about finance, stocks, crypto and psychology behind building
              investment strategies and systems.
            </p>
          </div>
          <div className="p-4 transition-all duration-300 ease-in-out transform cursor-pointer hover:-translate-y-2">
            <h5 className="flex items-center mb-3 space-x-2 text-xl font-bold font-interBold md:text-2xl">
              <span className="text-skin-primary">
                <BiPolygon strokeWidth={2} />
              </span>
              <span>Black Box</span>
            </h5>
            <p className="text-base font-normal font-interRegular md:text-xl text-skin-muted">
              Stay ahead of the curve with market alerts powered by our
              proprietary algorithms.
            </p>
          </div>
          <div className="p-4 transition-all duration-300 ease-in-out transform cursor-pointer hover:-translate-y-2">
            <h5 className="flex items-center mb-3 space-x-2 text-xl font-bold font-interBold md:text-2xl">
              <span className="text-skin-primary">
                <FiClock strokeWidth={3} />
              </span>
              <span>Updates</span>
            </h5>
            <p className="text-base font-normal font-interRegular md:text-xl text-skin-muted">
              Recieve first hand updates on latest financial news and new
              Fungazer products.
            </p>
          </div>
        </div>
      </section>

      <section
        className={`bg-skin-primary cta md:hidden ${
          route.pathname === '/' ? 'hidden' : 'block'
        }`}
        id="cta"
      >
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
              <form
                onSubmit={handleSubmit}
                className="space-x-0 space-y-2 md:flex md:space-x-2 md:space-y-0"
              >
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
              <div className="mt-2 captch">
                {/* <ReCAPTCHA
                  ref={captcha}
                  sitekey="6Lc_b6ghAAAAAO4qDTfLsI44NR5guKc56BzSGkSY"
                  onChange={handleOnChange}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Resources Section End*/}
    </>
  );
}
