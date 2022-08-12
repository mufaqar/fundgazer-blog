import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <section>
        <div className='container mx-auto py-20 mt-20 flex md:flex-row flex-col gap-24 px-4'>
          <div className='md:w-1/3 w-full p-4'>
            <figure className='relative  h-[810px] w-full -mb-[560px] -z-10'>
              <Image src="/images/aboutimg.png" alt='aboutimg.png' layout='fill'></Image>
            </figure>
          </div>
          <div className="md:w-2/3 w-full p-4">
            <h3 className='md:text-6xl text-3xl font-interRegular font-normal text-skin-dark md:mb-10 mb-5'>About <span className='text-skin-primary font-bold'>Us</span></h3>

            <p className="md:text-xl text-base font-interRegular font-normal text-skin-muted mb-5">It can be hard to know where to start and which investments are right for you when it comes to investing, and even harder to execute your investment plan on right timings.</p>
            <p className="md:text-xl text-base font-interRegular font-normal text-skin-muted mb-5">The world of finance and can be confusing and overwhelming - especially if you're just starting out.</p>
            <p className="md:text-xl text-base font-interRegular font-normal text-skin-muted mb-5"><Link href="#"><a className='text-skin-primary font-bold underline'>Fundgazer Community</a></Link> is here to help. <span className='text-skin-dark font-bold'>Fundgazer</span> is a collaborative effort of investors, traders, developers, data scientists and mathematicians. We're all about giving personal investors the tools and resources they need, to make informed decisions. We offer market alerts powered by our proprietary algorithms, educational content from experienced investors, and a community of peers who are happy to help. Plus, we're always developing new products that will make your journey easier.</p>
            <p className="md:text-xl text-base font-interRegular font-normal text-skin-muted mb-5">So if you're ready to take your investment game up a notch, join us now and witness the future of personal investing.</p>
          </div>
        </div>
      </section>
    </>
  )
}
