
import React from "react";
import { useState } from "react";
import { BsDiscord } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { useRouter } from "next/router";


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
        <a 
          href="https://discord.gg/4TZTWM4AmU"
          target="_blank"
          rel="noreferrer"
          className="flex items-center py-3 space-x-3 text-lg font-normal w-full rounded-md font-interRegular bg-skin-dark text-skin-light hover:opacity-75 md:text-base px-6 justify-center  md:max-w-[200px] transition ease-in-out delay-75  hover:scale-110 hover:bg-skin-primary duration-200">
          <BsDiscord size={24} /> <span>Discord</span>
        </a>
        <a
          href="https://t.me/fundgazer"
          target="_blank"
          rel="noreferrer"
          className="flex items-center py-3 space-x-3 text-lg font-normal w-full rounded-md font-interRegular bg-skin-buttonAccent hover:bg-skin-buttonMuted text-skin-light md:text-base px-5 justify-center md:max-w-[200px] transition ease-in-out delay-75  hover:scale-110 duration-200">
          <FaTelegramPlane size={24} /> <span>Telegram</span>
        </a>
      </div>
    </>
  );
};

export default function PopularTag({ tags }) {

  const router = useRouter();
  
  const handleClick = (event) => {
    const tag = event.target.getAttribute("tag-name");
    sendProps(tag);
  };

  function sendProps(tag){
    router.push({
      pathname : "/blog/tag",
      query : {
        tag 
      }
    })
  }

  return (
    <>
      <div className="p-5 border-b md:px-0">
        <h6 className="mb-4 text-xl font-bold text-skin-dark font-productSansBold">
          Popular Tags
        </h6>

        <ul className="flex flex-wrap gap-2 mb-5 tags">
          {tags.slice(0, 15).map((tag, index) => (
            <li className="py-2" key={index}>
              
                <a className="md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular hover:bg-transparent">
                  <button
                    onClick={handleClick}
                    tag-name={tag.tag}
                  >
                    #{tag.tag}
                  </button>
                </a>
              
            </li>
          ))}
        </ul>
        <JoinOurCommunity />
      </div>
    </>
  );
}
