import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function About() {
  return (
    <>
     <Head>
        <title>About Us - Fundgazer</title>
        
      </Head>
      <section>
        <div className='container flex flex-col gap-24 px-4 py-20 mx-auto mt-20 md:flex-row'>
          <div className='w-full p-4 md:w-1/3'>
            <figure className='relative  h-[810px] w-full -mb-[560px] -z-10'>
              <Image src="/images/aboutimg.png" alt='aboutimg.png' layout='fill'></Image>
            </figure>
          </div>
          <div className="w-full p-4 md:w-2/3">
            <h3 className='mb-5 text-3xl font-normal md:text-6xl font-interRegular text-skin-dark md:mb-10'>About <span className='font-bold text-skin-primary'>Us</span></h3>
            <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">It can be hard to know where to start and which investments are right for you when it comes to investing, and even harder to execute your investment plan on right timings.</p>
            <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">The world of finance and can be confusing and overwhelming - especially if you're just starting out.</p>
            <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted"><Link href="#"><a className='font-bold underline text-skin-primary'>Fundgazer Community</a></Link> is here to help. <span className='font-bold text-skin-dark'>Fundgazer</span> is a collaborative effort of investors, traders, developers, data scientists and mathematicians. We're all about giving personal investors the tools and resources they need, to make informed decisions. We offer market alerts powered by our proprietary algorithms, educational content from experienced investors, and a community of peers who are happy to help. Plus, we're always developing new products that will make your journey easier.</p>
            <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">So if you're ready to take your investment game up a notch, join us now and witness the future of personal investing.</p>
          </div>
        </div>
      </section>
    </>
  )
}
