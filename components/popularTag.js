import Link from "next/link";
import React from "react";
import { BsDiscord } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const JoinOurCommunity = () => {
  return (
    <>
      <h6
        className={`mb-5  text-xl font-bold text-skin-dark font-productSansBold `}
      >
        Join Our Community
      </h6>
      <div
        className={`flex-wrap justify-center gap-4 md:px-0 lg:flex-nowrap flex`}
      >
        <button className="flex items-center justify-center w-full py-4 space-x-3 text-[15px] tracking-wide rounded-md font-interRegular bg-skin-secondry text-skin-light hover:opacity-75 px-7">
          <BsDiscord size={24} /> <span>Discord</span>
        </button>
        <button className="flex items-center justify-center w-full py-4 space-x-3 text-[15px] tracking-wide rounded-md font-interRegular bg-skin-buttonAccent hover:bg-skin-buttonMuted text-skin-light px-7">
          <FaTelegramPlane size={24} /> <span>Telegram</span>
        </button>
      </div>
    </>
  );
};

export default function PopularTag() {
  return (
    <>
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
        <JoinOurCommunity/>
      </div>
    </>
  );
}
