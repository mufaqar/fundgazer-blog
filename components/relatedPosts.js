import Image from 'next/image'
import Link from 'next/link'

export default function RelatedPosts() {
    return (

        <section className='bg-[#F8F8F8]'>
            <div className='container mx-auto py-10 px-5'>
                <h6 className='font-productSansBold text-2xl font-bold text-skin-dark mb-5'>Related Blogs</h6>
                <div className='grid md:grid-cols-3 gap-10'>
                    <div className='flex md:flex-col flex-row-reverse gap-4 items-center md:border-b-0 border-b border-gray-200 md:py-0 py-3'>
                        <Link href="#"><a>
                            <figure className='md:w-[402px] w-[93px] md:h-[226px] h-[94px] relative'>
                                <Image src="/images/relatedBlog.png" alt="relatedBlog" layout='fill'></Image>
                            </figure>
                        </a></Link>
                        <Link href="#"><a>
                            <h5 className='font-productSansReqular md:text-2xl text-lg font-normal text-skin-dark'>Best Portfolio Investment Tips and Tricks</h5>
                        </a></Link>
                    </div>
                    <div className='flex md:flex-col flex-row-reverse gap-4 items-center md:border-b-0 border-b border-gray-200 md:py-0 py-3'>
                        <Link href="#"><a>
                            <figure className='md:w-[402px] w-[93px] md:h-[226px] h-[94px] relative'>
                                <Image src="/images/relatedBlog.png" alt="relatedBlog" layout='fill'></Image>
                            </figure>
                        </a></Link>
                        <Link href="#"><a>
                            <h5 className='font-productSansReqular md:text-2xl text-lg font-normal text-skin-dark'>Best Portfolio Investment Tips and Tricks</h5>
                        </a></Link>
                    </div>
                    <div className='flex md:flex-col flex-row-reverse gap-4 items-center md:border-b-0 border-b border-gray-200 md:py-0 py-3'>
                        <Link href="#"><a>
                            <figure className='md:w-[402px] w-[93px] md:h-[226px] h-[94px] relative'>
                                <Image src="/images/relatedBlog.png" alt="relatedBlog" layout='fill'></Image>
                            </figure>
                        </a></Link>
                        <Link href="#"><a>
                            <h5 className='font-productSansReqular md:text-2xl text-lg font-normal text-skin-dark'>Best Portfolio Investment Tips and Tricks</h5>
                        </a></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
