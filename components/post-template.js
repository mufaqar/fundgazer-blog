import Image from 'next/image'
import Link from 'next/link'

export default function Post_template() {
  return (
    <>
      <div className='flex flex-col justify-between w-9/12 md:p-0'>
        <div>
          <Link href="#">
            <a><h3 className='mb-3 text-base font-bold md:text-3xl text-skin-dark font-productSansBold'>7 Best Investing Blogs 2022: Think Like an Investor</h3></a>
          </Link>
          <ul className='flex mb-3 space-x-3 text-base font-normal md:text-xl text-skin-primary font-productSansReqular'>
            <li>
              <Link href="#"><a>#Economy</a></Link>
            </li>
            <li>
              <Link href="#"><a>#Crypto</a></Link>
            </li>
          </ul>
          <p className='hidden mb-3 text-xl font-normal text-skin-muted font-gildaDisplay md:block'>In this segment of our ‘Think Like an Investor’ series, we’re going to look at another resource which proves invaluable to the modern investor: blogs.</p>
        </div>
        <ul className='flex gap-6 text-[15px] font-normal font-interRegular text-skin-muted mt-6'>
          <li>
            <Link href="#"><a>Shashank Gupta</a></Link>
          </li>
          <li>
            <Link href="#"><a>11 March 2023</a></Link>
          </li>
        </ul>
      </div>
      <div className='w-3/12'>
        <Link href="#"><a>
          <figure className='md:max-h-[202px] h-[94px] md:max-w-[235px] md:w-full md:h-full relative ml-auto'>
            <Image src="/images/img2.png" alt='img2' layout='fill' className='object-cover rounded-lg'></Image>
          </figure>
        </a></Link>
      </div>

    </>
  )
}
