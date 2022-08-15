import React from 'react'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsLinkedin } from 'react-icons/bs';

export default function AuthorProfile({blog}) {
    const [profileHide, setProfileHide] = useState(false)
    let route =  useRouter();
    
    useEffect(() => {
      if(route.pathname === '/blog'){
        setProfileHide(true);
      }else{
        setProfileHide(false);
      }
    }, []);

  return (
    <>
        <div className={`flex items-center justify-between p-5 mb-5 border-b ${route.route === '/blog/[slug]' ? 'border-t md:border-t-0' : '' } px-0 ${profileHide ? 'hidden' : 'flex'}`}>
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
    </>
  )
}
