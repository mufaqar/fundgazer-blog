import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import TeamBox from '../components/teamBox'
import TeamSlider from '../components/teamSlider'
import BlogFooter from '../components/blogFooter'
import Testimonials from '../components/testimonials'
import AnyQuery_Sec from '../components/any-query'
import Join_WaitList from '../components/join-waitList'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Fundgazer</title>
      </Head>

      <section>
        <div className='container flex flex-col mx-auto mt-20 py-14 md:flex-row parallax'>
          <div className='w-full p-4 md:w-2/4'>
            <figure className='relative  h-[810px] w-full -mb-[560px] -z-10 hidden'>
              <Image src="/images/aboutimg.png" alt='aboutimg.png' layout='fill'></Image>
            </figure>
          </div>
          <div className="w-full md:p-4 md:w-2/4 md:pt-[22rem] px-4 md:mt-0 mt-[22rem]">
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
      <section className='px-4 lg:px-0 py-14'>
        <div>
          <TeamSlider />
        </div>
      </section>
      <Testimonials />
      <AnyQuery_Sec />
      <Join_WaitList />
    </>
  )
}
