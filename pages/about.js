import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import TeamBox from '../components/teamBox'
import TeamSlider from '../components/teamSlider'
import BlogFooter from '../components/blogFooter'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Fundgazer</title>

      </Head>
      <section>
        <div className='container flex flex-col gap-24 px-4 py-14 mx-auto mt-20 md:flex-row'>
          <div className='w-full p-4 md:w-1/3'>
            <figure className='relative  h-[810px] w-full -mb-[560px] -z-10'>
              <Image src="/images/aboutimg.png" alt='aboutimg.png' layout='fill'></Image>
            </figure>
          </div>
          <div className="w-full md:p-4 md:w-2/3 md:pt-48">
            <div className='mb-28'>
              <h3 className='mb-5 text-3xl font-normal md:text-6xl font-interRegular text-skin-dark md:mb-10'>How We <span className='font-bold text-skin-primary'>Started?</span></h3>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">Investment is the essential part of any individual’s finanacial goals. Every earning individual invests in some sort of instruments according to their risk taking capabilities. New Investors have inclined towards investment in stocks, crypto currency etc. but the amount of time that market requires for proper research and execution is usually underestimated which leads to losses or make the investor to leave the market.</p>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">It can be hard to know where to start and which investments are right for you, and even harder to execute your investment plan on right timings.</p>
            </div>
            <div>
              <h3 className='mb-5 text-3xl font-normal md:text-6xl font-interRegular text-skin-dark md:mb-10'>About <span className='font-bold text-skin-primary'>Us</span></h3>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">investors. Our teams with combined <strong>experience of more than 10 years</strong> have seen the market deeply. Being from engineering and mathematics background what we noticed is that the market is full of misleading investment ideas, and we will believe only on what we back-test with a proper procedure.</p>
              <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">Some of the most challenging issue that most retail investors face is human’s physical limitation to execute their investment plan and psychological limitation to control their emotions after investing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-14 px-4'>
        <div className='container mx-auto relative'>
          <h3 className='mb-5 text-3xl font-normal md:text-6xl font-interRegular text-skin-dark md:mb-14'>Our <span className='font-bold text-skin-primary'>Team</span></h3>
          <div>
            <TeamSlider />
          </div>
        </div>
      </section>

      <section className='py-14 px-4 md:h-[50vh] flex items-center'>
        <div className='container mx-auto flex flex-col md:flex-row md:gap-12 gap-5'>
          <div className='md:w-2/5 w-full'>
            <h3 className='mb-5 text-3xl font-normal md:text-6xl font-interRegular text-skin-dark'>Our <span className='font-bold text-skin-primary'>Community</span></h3>
          </div>
          <div className='md:w-3/5 w-full'>
            <p className="mb-5 text-base font-normal md:text-xl font-interRegular text-skin-muted">Investment is the essential part of any individual’s finanacial goals. Every earning individual invests in some sort of instruments according to their risk taking capabilities. New Investors have inclined towards investment in stocks, crypto currency etc. but the amount of time that market requires for proper research and execution is usually underestimated which leads to losses or make the investor to leave the market.It can be hard to know where to start and which investments are right for you, and even harder to execute your investment plan on right timings.</p>
          </div>
        </div>
      </section>

      <BlogFooter />
    </>
  )
}
