import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '../public/images/logo.png';
import whiteLogo from '../public/images/white-logo.png';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import { BiSearch } from "react-icons/bi";
import Search from '../components/search'

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-[#FAF9FD] transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md h-80`}
    >
      <div className="flex items-center justify-center filter bg-[#FAF9FD] h-20">
        {/*logo container*/}
      </div>
      <div className={`flex space-y-2 flex-col ml-4 ${open ? 'mt-8' : 'mt-0'}`}>
        <Link
          className="my-4 text-xl font-bold "
          href="/our-community"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Join Our Community
        </Link>
        <Link
          className="my-4 text-xl font-bold"
          href="/blog"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Blogs
        </Link>
      </div>
    </div>
  );
}

export default function Header({headerClr}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const SearchBlock = () => {
    return(
      <Search />
    )
  }

 

  return (
    <>
      <Head>
        <title>FUNDGAZER - BLOG</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav
        className={`flex filter px-5 transition-all duration-100 py-4 h-20 items-center shadow-sm fixed top-0 right-0 left-0 z-50 ${router.pathname === '/' ?  headerClr ? 'bg-[#6F49DD]' : 'bg-[#FAF9FD]' : 'bg-[#FAF9FD]'}  
        }`}
      >
        <div className="container flex items-center justify-between mx-auto">
          <MobileNav open={open} setOpen={setOpen} />
          <div className="flex items-center w-2/3 lg:w-3/12">
            <Link href="/">
              <a className="text-2xl font-semibold">
                {
                  router.pathname === '/' ? headerClr ? (
                  <Image
                    src={whiteLogo}
                    alt="logo"
                    width={165}
                    height={40}
                    className="z-10"
                  ></Image>
                ) : (
                  <Image
                    src={Logo}
                    alt="logo"
                    width={165}
                    height={40}
                    className="z-10"
                  ></Image>
                ) : <Image
                    src={Logo}
                    alt="logo"
                    width={165}
                    height={40}
                    className="z-10"
                  ></Image>
                }
                
              </a>
            </Link>
          </div>
          <div className="flex items-center justify-end w-9/12">
            <div className={`md:hidden mr-5 ${ router.pathname === '/blog' ? 'block' : 'hidden'}`}> {/* search icon */}
              <BiSearch className={`text-3xl ${headerClr ? 'text-white' : 'text-black'} `}  />
            </div>
            <div
              className="relative z-50 flex flex-col items-center justify-between h-6 w-7 md:hidden"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {/* hamburger button */}
              <span
                className={`h-1 w-full ${headerClr ? 'bg-white' : 'bg-black'}  rounded-lg transform transition duration-300 ease-in-out ${
                  open ? 'rotate-45 translate-y-3.5' : ''
                }`}
              />
              <span
                className={`h-1 w-full ${headerClr ? 'bg-white' : 'bg-black'} rounded-lg transition-all duration-300 ease-in-out ${
                  open ? 'w-0' : 'w-full'
                }`}
              />
              <span
                className={`h-1 w-full ${headerClr ? 'bg-white' : 'bg-black'} rounded-lg transform transition duration-300 ease-in-out ${
                  open ? '-rotate-45 -translate-y-3.5' : ''
                }`}
              />
            </div>

            <div
              className={`hidden text-xl font-bold md:flex space-x-10 ${ router.pathname === '/' ? headerClr ? 'text-[#FAF9FD]' : 'text-black' : 'text-black' }`}
            >
              <Link href="/our-community" className={`mx-4 font-interBold tracking-wider `} >
                <a className={`${router.pathname === '/' ?  headerClr ? 'hover:text-black' : 'hover:text-[#6F49DD]' : 'hover:text-[#6F49DD]'} `} onClick={()=>setOpen(false)}>Join Our Community</a>
              </Link>
              <Link href="/blog" className={`mx-4 font-interBold tracking-wider  `} >
                <a className={`${router.pathname === '/' ?  headerClr ? 'hover:text-black' : 'hover:text-[#6F49DD]' : 'hover:text-[#6F49DD]'} `} onClick={()=>setOpen(false)} >Blogs</a>
              </Link>
            </div>
            
          </div>
        </div>
       {/* <SearchBlock/>  */}
      </nav>
    </>
  );
}
