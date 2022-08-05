import { BsDiscord, BsLinkedin } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar() {
  return (
    <>
      <aside>
        <div className="p-5 mb-5 border-b md:px-0">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300 font-interBold"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-skin-dark dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block p-4 pl-10 bg-skin-light text-skin-dark text-sm font-medium border border-black focus:border-[#6F49DD] focus:outline-none py-3 px-4 rounded w-full font-interMedium"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
        <div className="flex items-center justify-between p-5 mb-5 border-b md:px-0">
          <div className="flex gap-4">
            <div>
              <figure className="md:w-[56px] w-[45px] md:h-[53px] h-[45px] relative">
                <Image
                  src="/images/author.png"
                  alt="author.png"
                  layout="fill"
                ></Image>
              </figure>
            </div>
            <div>
              <h6 className="text-xs font-bold font-interBold md:text-sm text-skin-primary">
                Author
              </h6>
              <Link href="#">
                <a className="text-sm font-normal font-interRegular md:text-xl text-skin-dark">
                  Shashank Gupta
                </a>
              </Link>
              <h5></h5>
            </div>
          </div>
          <div>
            <Link href="#">
              <a>
                <span className="md:text-5xl text-2xl text-[#2867B2]">
                  <BsLinkedin />
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div className="p-5 border-b md:px-0">
          <h6 className="mb-5 text-xl font-bold text-skin-dark font-productSansBold">
            Popular Tags
          </h6>
          <ul className="flex flex-wrap gap-2 mb-5 tags">
            <li className="py-2">
              <Link href="#">
                <a className="md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular">
                  #Investment
                </a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="#">
                <a className="md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular">
                  #Crypto
                </a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="#">
                <a className="md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular">
                  #Economy
                </a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="#">
                <a className="md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular">
                  #Something
                </a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="#">
                <a className="md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular">
                  #Crypto
                </a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="#">
                <a className="md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular">
                  #Economy
                </a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="#">
                <a className="md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular">
                  #Investment
                </a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="#">
                <a className="md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular">
                  #Crypto
                </a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="#">
                <a className="md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular">
                  #Economy
                </a>
              </Link>
            </li>
          </ul>
          <h6 className="mb-5 text-xl font-bold text-skin-dark font-productSansBold">
            Join Our Community
          </h6>
          <div className="flex justify-center gap-4 md:px-0">
            <button className="flex items-center justify-center w-full py-4 space-x-3 text-[15px] tracking-wide rounded-md font-interRegular bg-skin-secondry text-skin-light hover:opacity-75 px-7">
              <BsDiscord size={24} /> <span>Discord</span>{' '}
            </button>
            <button className="flex items-center justify-center w-full py-4 space-x-3 text-[15px] tracking-wide rounded-md font-interRegular bg-skin-buttonAccent hover:bg-skin-buttonMuted text-skin-light px-7">
              <FaTelegramPlane size={24} /> <span>Telegram</span>{' '}
            </button>
          </div>
        </div>
        <div className="p-5 md:px-0">
          <h6 className="mb-5 text-xl font-bold text-skin-dark font-productSansBold">
            Recent Blogs
          </h6>
          <ul className="gap-3 mb-5">
            <li className="flex flex-col gap-2 py-2 mb-5">
              <Link href="#">
                <a className="text-xs font-normal text-skin-muted font-interRegular">
                  11 March 2023
                </a>
              </Link>
              <Link href="#">
                <a className="text-base font-normal md:text-2xl text-skin-dark font-productSansReqular">
                  Best Portfolio InvestmentTips and Tricks
                </a>
              </Link>
            </li>
            <li className="flex flex-col gap-2 py-2 mb-5">
              <Link href="#">
                <a className="text-xs font-normal text-skin-muted font-interRegular">
                  11 March 2023
                </a>
              </Link>
              <Link href="#">
                <a className="text-base font-normal md:text-2xl text-skin-dark font-productSansReqular">
                  Best Portfolio InvestmentTips and Tricks
                </a>
              </Link>
            </li>
            <li className="flex flex-col gap-2 py-2 mb-5">
              <Link href="#">
                <a className="text-xs font-normal text-skin-muted font-interRegular">
                  11 March 2023
                </a>
              </Link>
              <Link href="#">
                <a className="text-base font-normal md:text-2xl text-skin-dark font-productSansReqular">
                  Best Portfolio InvestmentTips and Tricks
                </a>
              </Link>
            </li>
            <li className="flex flex-col gap-2 py-2 mb-5">
              <Link href="#">
                <a className="text-xs font-normal text-skin-muted font-interRegular">
                  11 March 2023
                </a>
              </Link>
              <Link href="#">
                <a className="text-base font-normal md:text-2xl text-skin-dark font-productSansReqular">
                  Best Portfolio InvestmentTips and Tricks
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
