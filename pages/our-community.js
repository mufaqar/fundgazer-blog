import { BsDiscord } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BiPolygon } from "react-icons/bi";
import { FiLayers } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function OurCommunity() {

    const route = useRouter(); 

  return (
    <>
      {/* Banner Section Start*/}
      <section>
        <div className="container grid items-center grid-cols-1 gap-8 pt-40 pb-20 mx-auto lg:pb-32 lg:pt-52 md:grid-cols-2">
          <div className="p-4">
            <h1 className="text-4xl font-normal md:text-6xl font-interRegular">
              <span className="font-bold text-skin-primary font-interBold">
                Join </span> Our Community
            </h1>
            <p className="mt-3 text-base font-medium md:text-xl font-interRegular">
              We are all about giving personal investors the tools and resources
              they need, to make informed decisions.
            </p>
            <Link href="#">
              <a className={`flex md:hidden w-full justify-end items-center mt-6 space-x-2 text-[20px] font-semibold lg:mt-0 font-interMedium ${route.pathname === '/our-community' ? 'hidden' : 'block' } `}>
                <span className="">Explore</span>
                <span className="text-skin-primary text-[2rem]">
                  <FaAngleRight strokeWidth={2} />
                </span>
              </a>
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 p-4 md:justify-end lg:flex-nowrap">
            <button className="flex items-center py-3 space-x-3 text-lg font-semibold w-full rounded-md font-interRegular bg-skin-dark text-skin-light hover:opacity-75 md:text-2xl px-7 justify-center  md:max-w-[200px] transition ease-in-out delay-75  hover:scale-110 hover:bg-skin-primary duration-200">
              <BsDiscord /> <span>Discord</span>
            </button>
            <button className="flex items-center py-3 space-x-3 text-lg font-semibold w-full rounded-md font-interRegular bg-skin-buttonAccent hover:bg-skin-buttonMuted text-skin-light md:text-2xl px-7 justify-center md:max-w-[200px] transition ease-in-out delay-75  hover:scale-110 duration-200">
              <FaTelegramPlane /> <span>Telegram</span>
            </button>
          </div>
        </div>
      </section>
      {/* Banner Section End*/}

      {/* Resources Section Start*/}
      <section className={`bg-[#E9E1FF] ${route.pathname === '/our-community' ? 'block' : 'hidden' }`}>
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
      {/* Resources Section End*/}
    </>
  );
}
