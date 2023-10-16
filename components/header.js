import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '../public/images/logo.png';
import whiteLogo from '../public/images/white-logo.png';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { BiSearch } from 'react-icons/bi';
import Search from '../components/search';
import {AiFillCaretDown} from 'react-icons/ai'




function MobileNav({ open, setOpen }) {


  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-[#FAF9FD] transform ${open ? '-translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out filter drop-shadow-md h-80`}
    >
      <div className="flex items-center justify-center filter bg-[#FAF9FD] h-20">
        {/*logo container*/}
      </div>
      {/* <div className={`flex space-y-2 flex-col ml-4 ${open ? 'mt-8' : 'mt-0'}`}> */}
      {/* <Link
          className="my-4 text-xl font-bold "
          href="/our-community"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Join Our Community
        </Link> */}
      {/* <Link
          className="my-4 text-xl font-bold"
          href="/blog"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Blogs
        </Link> */}
    </div>
    // </div>
  );
}

export default function Header({ headerClr, serachInput, setSearchInput }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [handleMobileSearch, setHandleMobileSearch] = useState(false)

  return (
    <>
      <Head>
        <title>FUNDGAZER</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:site_name" content="Fundgazer"></meta>
        <meta property="og:type" content="website"></meta>
      </Head>

      <nav
        className={`flex filter px-5 transition-all duration-100 py-4 h-20 items-center shadow-sm fixed top-0 right-0 left-0 z-50 ${router.pathname === '/'
          ? headerClr
            ? 'bg-[#6F49DD]'
            : 'bg-[#FAF9FD]'
          : 'bg-[#FAF9FD]'
          }  
        }`}
      >
        <div className="container flex items-center justify-between mx-auto">
          <MobileNav open={open} setOpen={setOpen} />
          <div className="flex items-center w-2/3 lg:w-3/12">
            <Link href="/" className="text-2xl font-semibold">

              {router.pathname === '/' ? (
                headerClr ? (
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
                )
              ) : (
                <Image
                  src={Logo}
                  alt="logo"
                  width={165}
                  height={40}
                  className="z-10"
                ></Image>
              )}

            </Link>
          </div>
          <div className="flex items-center lg:justify-start justify-end w-1/3 lg:w-6/12">
            <div
              className={`md:hidden mr-5 ${router.pathname === '/blog' ? 'block' : 'hidden'
                }`}
            >
              {' '}
              {/* search icon */}
              <BiSearch
                className={`text-3xl ${headerClr ? router.pathname === '/' ? 'text-white' : 'text-black' : 'text-black'
                  } ${handleMobileSearch ? 'text-[#6F49DD]' : ''}`}
                onClick={() => setHandleMobileSearch(!handleMobileSearch)}
              />
            </div>
            <div
              className="relative z-50 flex flex-col items-center justify-between h-6 w-7 md:hidden"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {/* hamburger button */}
              <span
                className={`h-1 w-full ${headerClr ? router.pathname === '/' ? 'bg-white' : 'bg-black' : 'bg-black'
                  }  rounded-lg transform transition duration-300 ease-in-out ${open ? 'rotate-45 translate-y-3.5' : ''
                  }`}
              />
              <span
                className={`h-1 w-full ${headerClr ? router.pathname === '/' ? 'bg-white' : 'bg-black' : 'bg-black'
                  } rounded-lg transition-all duration-300 ease-in-out ${open ? 'w-0' : 'w-full'
                  }`}
              />
              <span
                className={`h-1 w-full ${headerClr ? router.pathname === '/' ? 'bg-white' : 'bg-black' : 'bg-black'
                  } rounded-lg transform transition duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-3.5' : ''
                  }`}
              />
            </div>
            <div
              className={`hidden text-xl font-bold md:flex gap-10 ${router.pathname === '/'
                ? headerClr
                  ? 'text-[#FAF9FD]'
                  : 'text-black'
                : 'text-black'
                }`}
            >
              <Link
                href="/products"
                className={`font-interBold tracking-wider  `}
              >
                <span
                  className={`flex gap-2 items-center ${router.pathname === "/products"
                    ? headerClr
                      ? 'hover:text-black'
                      : 'hover:text-[#6F49DD] text-[#6F49DD]'
                    : headerClr ? 'hover:underline' : 'hover:text-[#6F49DD]'
                    } `}
                  onClick={() => setOpen(false)}
                >
                  Products <AiFillCaretDown />
                </span>
              </Link>
              <Link
                href="/resources"
                className={`font-interBold tracking-wider  `}
              >
                <span
                  className={`flex gap-2 items-center ${router.pathname === "/resources"
                    ? headerClr
                      ? 'hover:text-black'
                      : 'hover:text-[#6F49DD] text-[#6F49DD]'
                    : headerClr ? 'hover:underline' : 'hover:text-[#6F49DD]'
                    } `}
                  onClick={() => setOpen(false)}
                >
                  Resources <AiFillCaretDown />
                </span>
              </Link>
              <Link
                href="/our-community"
                className={`font-interBold tracking-wider `}
              >
                <span
                  className={`${router.pathname === "/our-community" ? headerClr ? 'hover:text-black ' : 'hover:text-[#6F49DD] text-[#6F49DD]' : headerClr ? 'hover:underline' : 'hover:text-[#6F49DD]'
                    } `}
                  onClick={() => setOpen(false)}
                >
                  Join Our Community
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:flex hidden items-center justify-end w-full lg:w-3/12">
            <div
              className={`text-lg font-bold flex gap-7 items-center ${router.pathname === '/'
                ? headerClr
                  ? 'text-[#FAF9FD]'
                  : 'text-black'
                : 'text-black'
                }`}
            >
              <Link
                href="/download-app"
                className={`font-interBold tracking-wider `}
              >
                <span
                  className={`${router.pathname === "/download-app" ? headerClr ? 'hover:text-black ' : 'hover:text-[#6F49DD] text-[#6F49DD]' : headerClr ? 'hover:underline' : 'hover:text-[#6F49DD]'
                    } `}
                  onClick={() => setOpen(false)}
                >
                  Download The App
                </span>
              </Link>
              <Link
                href="/play-store"
                className={`font-interBold tracking-wider  `}
              >
                <span
                  className={`${router.pathname === "/play-store"
                    ? headerClr
                      ? 'hover:text-black'
                      : 'hover:text-[#6F49DD] text-[#6F49DD]'
                    : headerClr ? 'hover:underline' : 'hover:text-[#6F49DD]'
                    } `}
                  onClick={() => setOpen(false)}
                >
                  <Image src="/images/play-store.png" alt="/images/play-store.png" width={42} height={43} />
                </span>
              </Link>
              <Link
                href="/apple"
                className={`font-interBold tracking-wider  `}
              >
                <span
                  className={`${router.pathname === "/apple"
                    ? headerClr
                      ? 'hover:text-black'
                      : 'hover:text-[#6F49DD] text-[#6F49DD]'
                    : headerClr ? 'hover:underline' : 'hover:text-[#6F49DD]'
                    } `}
                  onClick={() => setOpen(false)}
                >
                  <Image src="/images/apple.png" alt="/images/apple.png" width={39} height={43} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className={`fixed bg-white z-10 w-full md:hidden top-20 ${handleMobileSearch ? 'block' : 'hidden'}`}>
        <Search
          setSearchInput={setSearchInput}
          serachInput={serachInput}
        />
      </section>

    </>
  );
}
