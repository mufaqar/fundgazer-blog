import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import ImageOne from '../public/images/1st_live.png'
import ImageTwo from '../public/images/2nd_live.png'
import LiveImage from '../public/images/DISCORD_LIVE.png'
import Rectangle from '../public/images/Rectangle.png'
import Link from 'next/link';
import { BsDiscord } from "react-icons/bs";

export default function LiveResult() {
  return (
    <div className='mb-60'>
        <div className='bg-[#F1F0F5] py-4 relative'>
            <div className='container items-center justify-between px-4 mx-auto md:px-0 md:flex livesection'>
                <figure><Image src={ImageTwo} alt='1st' width={550} height={80} className='_logo1' objectFit='contain'  /></figure>
                <figure><Image src={ImageOne} alt='1st' width={550} height={80} className='_logo2' objectFit='contain'  /></figure>
            </div>
        </div>

        <section className='w-[1200px] mt-60 mx-auto md:flex justify-between items-center'>
            <div className=''>
                <h2 className='text-5xl w-[350px]'>Take a look at our <span className='text-[#6F49DD] font-bold'>Live Results</span> </h2>
                <p className='mt-4 text-xl font-light text-gray-500 w-96'>Check out our Dischord channel to see the live results of our investement plans.</p>
            </div>
            <div className='relative'>
                <Image src={LiveImage} alt='LiveImage' width={614} height={327} className="z-30" />
                <div className='absolute -top-28 right-20'>
                    <Image src={Rectangle} alt=""/>
                </div>
                <div className='absolute -top-20 right-56'>
                    <Image src={Rectangle} alt=""/>
                </div>
                <div className='absolute -top-10 left-48'>
                    <Image src={Rectangle} alt=""/>
                </div>

                <div className='absolute bg-[#7289DA] rounded-full p-4 text-white text-4xl z-40 -top-10 right-10'>
                    <BsDiscord/>
                </div>

            </div>
        </section>

        <div className='bg-[#F8F8F8] py-4 -mt-8 -z-10'>
            <div className='w-[1200px] mx-auto'>
                <Link href="" className='flex items-center text-lg font-bold hover:text-[#6F49DD]'>
                    See Now <FiArrowRight className='ml-2'/>
                </Link>
            </div>
        </div>
    </div>
  )
}
