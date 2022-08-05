import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Logo from "../public/images/logo.png";
import { useRouter } from 'next/router';

function NavLink({ to, children }) {
  return (
    <Link href={to} className={`mx-4 font-interBold tracking-wider`}>
      {children}
    </Link>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-[#FAF9FD] transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter bg-[#FAF9FD] h-20">
        {/*logo container*/}
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="my-4 text-xl font-bold"
          href="/our-community"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Join Our Community
        </a>
        <a
          className="my-4 text-xl font-bold"
          href="#"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Blogs
        </a>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <nav className="flex filter bg-[#FAF9FD] px-5 py-4 h-20 items-center">
      <div className="container flex items-center justify-between mx-auto">
        <MobileNav open={open} setOpen={setOpen} />
        <div className="flex items-center w-3/12">
          <Link href="/">
            <a className="text-2xl font-semibold">
              <Image src={Logo} alt="logo" width={165} height={40} className="z-10"></Image>
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-end w-9/12">
          <div
            className="relative z-50 flex flex-col items-center justify-between w-8 h-8 md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-3.5" : ""
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
                open ? "w-0" : "w-full"
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-3.5" : ""
              }`}
            />
          </div>

          <div className="hidden text-xl font-bold md:flex space-x-10">
            <NavLink to="/our-community">Join Our Community</NavLink>
            <NavLink to="/blog">Blogs</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
