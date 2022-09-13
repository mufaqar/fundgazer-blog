import { BsDiscord } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

export default function JoinOurCommunity() {
  return (
    <>
      
      <div
        className={`justify-center gap-4 px-2 lg:flex-nowrap flex py-3`}
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
  )
}
