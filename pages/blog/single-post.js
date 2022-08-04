import Image from 'next/image'
import Link from 'next/link'
import Sidebar from '../components/sidebar'
import BlogFooter from '../components/blogFooter'
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa'
import RelatedPosts from '../components/relatedPosts'

export default function Single_Post() {
    return (
        <>
            <section>
                <div className='container mx-auto pt-28 pb-10'>
                    <div className='flex md:flex-row flex-col gap-16'>
                        {/* Posts Column Start*/}
                        <div className='md:w-9/12 w-full p-5'>
                            <div className='mb-7'>
                                <ul className='mb-5'>
                                    <li>
                                        <Link href="#"><a className='text-sm font-normal font-interRegular text-skin-muted'>11 March 2023</a></Link>
                                    </li>
                                </ul>
                                <h2 className='md:text-4xl text-3xl font-productSansBold font-bold text-skin-dark mb-5'>7 Best Investing Blogs 2022: Think Like an Investor</h2>
                                <p className='font-gildaDisplay md:text-2xl text-lg font-normal text-skin-dark mb-5'>In this segment of our ‘Think Like an Investor’ series, we’re going to look at another resource which proves invaluable to the modern investor: blogs.</p>
                            </div>
                            <div className='text-center mb-7'>
                                <figure className='md:w-[889px] md:h-[395px] relative  mb-3'>
                                    <Image src="/images/postBanner.png" alt="postBanner.png" layout='fill'></Image>
                                </figure>
                                <span className='font-interRegular text-sm font-normal italic text-skin-muted'>Photo caption if any goes here</span>
                            </div>
                            <div>
                                <div className='mb-7'>
                                    <p className='font-gildaDisplay md:text-xl text-lg font-normal text-skin-dark mb-5'>Now we know what you’re thinking, everyone and their dog has their own blog these days, and while we’re not decrying the merits of a good dog blog, we’ve cut through the noise and listed our favorite investing blogs so you don’t have to slog through the fog (Dr. Seuss eat your heart out). </p>
                                    <p className='font-gildaDisplay md:text-xl text-lg font-normal text-skin-dark mb-5'>If you like this, check out our other resources to start thinking like an investor:</p>
                                    <ul className='list-disc list-inside space-y-2'>
                                        <li className='font-interRegular md:text-xl text-lg font-normal text-skin-primary'>Best Investing Apps</li>
                                        <li className='font-interRegular md:text-xl text-lg font-normal text-skin-primary'>Best Investing Podcasts</li>
                                        <li className='font-interRegular md:text-xl text-lg font-normal text-skin-primary'>Best Investing Twitter Accounts</li>
                                        <li className='font-interRegular md:text-xl text-lg font-normal text-skin-primary'>Best Investing Books</li>
                                        <li className='font-interRegular md:text-xl text-lg font-normal text-skin-primary'>Best Investing Newsletters</li>
                                    </ul>
                                </div>
                                <div className='mb-7'>
                                    <h6 className='font-productSansBold text-2xl font-bold text-skin-dark mb-5'>MyWallSt Blog</h6>
                                    <p className='font-gildaDisplay md:text-xl text-lg font-normal text-skin-dark mb-5'>Here at MyWallSt, we provide something for everyone. From daily business and stock market news to analyzing individual stocks and an ever-expanding mine of educational posts to make you a better investor, our blog accommodates every type of retail investor out there. It also boasts the best writing team out there.<br></br>Possibly the best writing team ever produced, they provide humble and unbiased analysis at every step!</p>
                                </div>
                                <div className='mb-7'>
                                    <h6 className='font-productSansBold text-2xl font-bold text-skin-dark mb-5'>The Collaborative Fund: Morgan Housel</h6>
                                    <p className='font-gildaDisplay md:text-xl text-lg font-normal text-skin-dark mb-5'>Morgan Housel is an amazing writer who produces insights that are as eye-opening as they are simple. Taking a few steps back, he surveys a wide range of economic and historical factors to mold and support his long-form opinion pieces, which are produced weekly. His perspective on macro-economics is really unique, as is the subject matter of his weekly post.<br></br>I would highly recommend his article the <span className='text-skin-primary'>freakishly strong</span> base for any investor getting started in the stock market.</p>
                                </div>
                            </div>
                            <div className='mb-10'>
                                <h6 className='font-productSansBold text-2xl font-bold text-skin-dark mb-5'>Tags</h6>
                                <ul className='flex flex-wrap gap-3 mb-5'>
                                    <li className='py-2'>
                                        <Link href="#">
                                            <a className='md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular'>#Investment</a>
                                        </Link>
                                    </li>
                                    <li className='py-2'>
                                        <Link href="#">
                                            <a className='md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular'>#Crypto</a>
                                        </Link>
                                    </li>
                                    <li className='py-2'>
                                        <Link href="#">
                                            <a className='md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular'>#Economy</a>
                                        </Link>
                                    </li>
                                    <li className='py-2'>
                                        <Link href="#">
                                            <a className='md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular'>#Something</a>
                                        </Link>
                                    </li>
                                    <li className='py-2'>
                                        <Link href="#">
                                            <a className='md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular'>#Crypto</a>
                                        </Link>
                                    </li>
                                    <li className='py-2'>
                                        <Link href="#">
                                            <a className='md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular'>#Economy</a>
                                        </Link>
                                    </li>
                                    <li className='py-2'>
                                        <Link href="#">
                                            <a className='md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular'>#Investment</a>
                                        </Link>
                                    </li>
                                    <li className='py-2'>
                                        <Link href="#">
                                            <a className='md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular'>#Crypto</a>
                                        </Link>
                                    </li>
                                    <li className='py-2'>
                                        <Link href="#">
                                            <a className='md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular'>#Economy</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className='flex gap-10 items-center'>
                                    <li><Link href="#"><a>
                                        <p className='text-skin-primary font-interRegular font-normal text-lg flex gap-2 items-bottom'><span className='text-2xl'><FaRegThumbsUp /></span> <span className='font-bold'>Like</span> 2,562</p>
                                    </a></Link>
                                    </li>
                                    <li><Link href="#"><a>
                                        <p className='text-[#E86A34] font-interRegular font-normal text-lg flex gap-2 items-bottom'><span className='text-2xl rotate-180'><FaRegThumbsUp /></span> <span className='font-bold'>Dislike</span> 256</p>
                                    </a></Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        {/* Posts Column END*/}

                        {/* Sidebar Column Start*/}
                        <div className='md:w-3/12 w-full'>
                            <Sidebar />
                        </div>
                        {/* Sidebar Column End*/}
                    </div>
                </div>
            </section>

            <RelatedPosts />
            <BlogFooter />
        </>
    )
}
