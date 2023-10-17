import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaMediumM, FaTwitter } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';

export default function Footer() {
  return (
    <footer className="h-[25vh]">
      <section className="bg-skin-bgFooter px-5">
        <div className="container grid md:items-end grid-cols-2 py-8 mx-auto md:grid-cols-3 gap-8">
          <div className="">
            <ul className="h-full flex flex-col justify-between gap-5">
              <li>
                <Link
                  href="/about"
                  className="text-base font-normal md:text-lg text-skin-light font-interRegular hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-base font-normal md:text-lg text-skin-light font-interRegular hover:underline"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="privacy-policy"
                  className="text-base font-normal md:text-lg text-skin-light font-interRegular hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex md:flex-row flex-col gap-3 justify-end'>
            <h6 className='text-xl font-semibold text-white md:hidden'>
              Download the app
            </h6>
            <Link href="#" className="inline-flex hover:animate-bounce" >
              <Image src="/images/google-play.png" alt="/images/google-play.png" width={234} height={62} />
            </Link>
            <Link href="#" className="inline-flex hover:animate-bounce" >
              <Image src="/images/app-store.png" alt="/images/app-store.png" width={234} height={62} />
            </Link>
          </div>
          <div className="flex flex-col p-5 md:col-span-1 col-span-2">
            <ul className="flex justify-center mb-2 md:justify-end">
              <li>
                <a href="mailto:support@fundgazer.com" rel="noreferrer">
                  <span className="text-base font-normal md:text-lg text-skin-light font-interRegular hover:underline">
                    support@fundgazer.com
                  </span>
                </a>
              </li>
            </ul>
            <ul className="flex justify-center space-x-3 md:justify-end">
              <li className="p-[6px] bg-white text-[#2B195A] hover:text-skin-light rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:bg-skin-primary duration-200">
                <a
                  // href="https://www.facebook.com/Fundgazer1.0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-3xl ">
                    <FaFacebook size={24} />
                  </span>
                </a>
              </li>
              <li className="p-[6px] bg-white text-[#2B195A] hover:text-skin-light rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:bg-skin-primary duration-200">
                <a
                  // href="https://twitter.com/Fundgazer_hq"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-3xl ">
                    <FaTwitter size={24} />
                  </span>
                </a>
              </li>
              <li className="p-[6px] bg-white text-[#2B195A] hover:text-skin-light rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:bg-skin-primary duration-200">
                <a
                  // href="https://www.linkedin.com/company/fundgazer/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-3xl ">
                    <GrLinkedinOption size={24} />
                  </span>
                </a>
              </li>
              <li className="p-[6px] bg-white text-[#2B195A] hover:text-skin-light rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:bg-skin-primary duration-200">
                <a
                  // href="https://www.instagram.com/fundgazer_hq"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-3xl ">
                    <FaInstagram size={24} />
                  </span>
                </a>
              </li>
              <li className="p-[6px] bg-white text-[#2B195A] hover:text-skin-light rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:bg-skin-primary duration-200">
                <a href="#" rel="noreferrer">
                  <span className="text-3xl ">
                    <FaMediumM size={24} />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-skin-dark">
        <div className="container py-6 mx-auto lg:py-3">
          <div>
            <p className="text-sm font-normal text-center md:text-base text-skin-light font-interRegular">
              @Copyrighted by Fundgazer
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
