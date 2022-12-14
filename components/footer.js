import Link from 'next/link';
import { FaFacebook, FaInstagram, FaMediumM, FaTwitter } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';

export default function Footer() {
  return (
    <footer className="h-[25vh]">
      <section className="bg-skin-bgFooter">
        <div className="container grid items-center grid-cols-1 py-8 mx-auto md:grid-cols-2">
          <div className="p-5">
            <ul className="flex flex-row justify-between gap-5 md:flex-col">
              <li>
                <Link href="/about">
                  <a className="text-base font-normal md:text-lg text-skin-light font-interRegular hover:underline">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/disclaimer">
                  <a className="text-base font-normal md:text-lg text-skin-light font-interRegular hover:underline">
                    Disclaimer
                  </a>
                </Link>
              </li>
              <li>
                <Link href="privacy-policy">
                  <a className="text-base font-normal md:text-lg text-skin-light font-interRegular hover:underline">
                    Privacy Policy
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col p-5">
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
                  href="https://www.facebook.com/Fundgazer1.0"
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
                  href="https://twitter.com/Fundgazer_hq"
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
                  href="https://www.linkedin.com/company/fundgazer/"
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
                  href="https://www.instagram.com/fundgazer_hq"
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
