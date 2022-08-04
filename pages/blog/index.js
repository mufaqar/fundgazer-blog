import Image from 'next/image'
import Link from 'next/link'
import BlogFooter from '../components/blogFooter'
import Post_template from '../components/post-template'
import Sidebar from '../components/sidebar'

export default function Blog() {
    return (
        <>
            <section>
                <div className='container mx-auto pt-28 pb-6 flex items-center'>
                    <div className='p-4'>
                        <h1 className='md:text-6xl text-3xl font-bold text-[#E86A34] font-productSansBold'>Blogs</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className='container mx-auto pb-10'>
                    <div className='flex md:flex-row flex-col gap-10'>
                        {/* Posts Column Start*/}
                        <div className='md:w-9/12 w-full'>
                            {/* Main Post Start*/}
                            <div className='flex md:flex-row flex-col-reverse md:gap-8 border-b py-5 mb-10'>
                                <div className='md:w-5/12 w-full md:p-0 p-4'>
                                    <Link href="/blog/single-post"><a>
                                        <figure className='h-[360px] w-full relative'>
                                            <Image src="/images/img1.png" alt='img1' layout='fill' className='object-cover rounded-lg'></Image>
                                        </figure>
                                    </a></Link>
                                </div>
                                <div className='md:w-7/12 flex flex-col justify-between md:p-0 p-4'>
                                    <div>
                                        <Link href="/blog/single-post"><a>
                                        <h3 className='md:text-4xl text-2xl font-bold text-skin-dark mb-3 font-productSansBold'>7 Best Investing Blogs 2022: Think Like an Investor</h3>
                                            </a></Link>
                                        <ul className='flex space-x-3 md:text-xl text-base font-normal text-skin-primary mb-3 font-productSansBold'>
                                            <li>
                                                <Link href="#"><a>#Economy</a></Link>
                                            </li>
                                            <li>
                                                <Link href="#"><a>#Crypto</a></Link>
                                            </li>
                                        </ul>
                                        <p className='md:text-xl text-base font-normal text-skin-muted mb-3 font-gildaDisplay'>In this segment of our ‘Think Like an Investor’ series, we’re going to look at another resource which proves invaluable to the modern investor: blogs.</p>
                                    </div>
                                    <ul className='flex space-x-3 md:text-xl text-sm font-normal text-skin-muted mb-4 font-interRegular'>
                                        <li>
                                            <Link href="#"><a>Shashank Gupta</a></Link>
                                        </li>
                                        <li>
                                            <Link href="#"><a>11 March 2023</a></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Main Post END*/}

                            {/* All Posts Start*/}
                            <div>
                                <div className='flex flex-row gap-5 border-b py-3'>
                                    <Post_template></Post_template>
                                </div>
                                <div className='flex flex-row gap-5 border-b py-3'>
                                    <Post_template></Post_template>
                                </div>
                                <div className='flex flex-row gap-5 border-b py-3'>
                                    <Post_template></Post_template>
                                </div>
                                <div className='flex flex-row gap-5 border-b py-3'>
                                    <Post_template></Post_template>
                                </div>
                                <div className='flex flex-row gap-5 border-b py-3'>
                                    <Post_template></Post_template>
                                </div>
                            </div>
                            {/* All Posts END*/}

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
            <BlogFooter />
        </>
    )
}
