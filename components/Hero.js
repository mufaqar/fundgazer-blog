import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-hook-inview"; // use current active screen Area

export default function Posts() {
  const [ref, inView] = useInView();
  const animation = useAnimation();

  // useEffect((animation) => {
  //   if (inView) {
  //     animation.start({
  //       opacity: 1,
  //       scale: 1,
  //       transition: {
  //         type: "spring",
  //         duration: 2,
  //         bounce: 0.3,
  //       },
  //     });
      
  //   } else {
  //     animation.start({
  //       opacity: 0,
  //       scale: 0.8,
  //     });
  //   }
  // }, [inView]);

  return (
    <>
      {/* Banner Section Start*/}
      <section>
        <div className="container grid items-center lg:h-[800px] grid-cols-1 gap-4 py-10 pt-0 mx-auto lg:grid-cols-3 mt-20">
          <div ref={ref} className="flex flex-col justify-between h-full p-4 py-20 lg:pb-36">
            <motion.div className="" animate={animation}>
              <h1 className="text-6xl font-thin font-interRegular" >
                The <span className="font-bold text-skin-primary">Future </span>
                of <br />
                <span className="md:whitespace-nowrap">
                  Personal Investment.
                </span>
              </h1>
              <p className="mt-3 text-xl font-medium font-interRegular">
                From building your diversified long-term portfolio and tracking
                your assets to finding investment ideas, we got you covered.
              </p>
            </motion.div>
            <Link href="#">
              <a className="flex items-center mt-20 space-x-2 text-3xl font-semibold lg:mt-0 font-interMedium group">
                <span className="text-skin-primary group-hover:animate-bounce">
                  <BsChevronDown strokeWidth={2} />
                </span>
                <span>Join Waitlist</span>
              </a>
            </Link>
          </div>
          <div className="float-right col-span-2 p-4">
            <video
              width="1000"
              height="800"
              autoPlay="autoplay"
              className=""
              loop
              muted
            >
              <source
                src="http://localhost:3000/video/video.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>
      {/* Banner Section End*/}

      {/* Jion Us Section Start*/}
      <section className="bg-skin-primary">
        <div  className="container grid items-center h-[800px] grid-cols-1 gap-8 py-20 mx-auto md:grid-cols-2">
          <div className="p-4" >
            <h1 className="text-6xl font-normal text-[#D1C6FF] font-interRegular">
              <span className="font-bold text-skin-light">Join </span> Waitlist
            </h1>
            <p className="mt-3 text-xl font-normal text-skin-light font-interRegular">
              From building your diversified long-term portfolio and <br></br>
              tracking you.
            </p>
            <div className="mt-8">
              <form className="space-x-0 space-y-2 md:flex md:space-x-2 md:space-y-0">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  name="email"
                  className="font-interRegular bg-skin-light text-skin-muted text-2xl font-normal outline-[#6F49DD] focus:outline-[#6F49DD] py-3 px-4 rounded-md md:w-[395px] w-full"
                />
                <button
                  type="submit"
                  className="flex items-center px-12 py-3 text-[20px] font-medium rounded-md font-interMedium bg-skin-dark text-skin-light hover:opacity-75"
                >
                  Join
                </button>
              </form>
              <button
                type="submit"
                className="text-[#D1C6FF] font-interRegular border border-[#D1C6FF] bg-transparent hover:bg-skin-buttonAccent hover:border-transparent text-base font-normal flex items-center py-3 px-12 rounded-md mt-5"
              >
                I am not a robot
              </button>
            </div>
          </div>
          <div className="p-4">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </div>
        </div>
      </section>
      {/* Jion Us Section End*/}
    </>
  );
}
