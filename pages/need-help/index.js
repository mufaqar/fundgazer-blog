import React from 'react'
import { AiOutlineFileText } from 'react-icons/ai'
import { Categories } from '../../const/articles'
import AnyQuery_Sec from '../../components/any-query'
import OurCommunity from '../our-community'
import Link from 'next/link'

export default function Need_Help() {
    return (
        <main>
            <section className='pt-36 pb-20 p-5 bg-[#F5F5F5]'>
                <div className='container mx-auto'>
                    <h1 className='text-[32px] leading-[36px] font-semibold font-interMedium text-center text-[#333333]'>
                        Need Help?
                    </h1>
                </div>
            </section>
            <section className='py-20 px-5 md:block hidden'>
                <div className='container mx-auto'>
                    <div>
                        <h2 className='text-[27px] leading-[36px] font-bold font-interMedium text-center text-[#333333]'>
                            Most Popular Articles
                        </h2>
                    </div>
                    <div className='max-w-[780px] mx-auto my-12'>
                        <ul className='grid md:grid-cols-2 justify-between w-full'>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
                                <li key={index}>
                                    <Link href="/need-help/help-category"
                                        className='flex gap-2 justify-center text-base font-semibold font-interMedium text-skin-primary'>
                                        <AiOutlineFileText className='text-[#A7A7A7]' /> Minimum to invest
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='grid md:grid-cols-3 gap-8'>
                        {Categories?.map((item, index) => (
                            <div key={index} className='border border-[#E0E0E0] py-7 px-[13px] rounded-[5px] cursor-pointer'>
                                <Link href="/need-help/help-category" className='text-xl font-semibold font-interMedium text-[#333333] text-center'>
                                    {item?.cat_name}
                                </Link>

                                <p className='text-sm font-medium font-interMedium text-skin-primary text-center mt-4'>
                                    {item?.articles.length} questions
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='pt-20 px-5 md:hidden block'>
                <div className='container mx-auto'>
                    <div>
                        <h2 className='text-base font-bold font-interMedium text-[#161616] mb-10'>
                            Frequently asked questions.
                        </h2>
                        <div>
                            {Categories?.slice(0, 2).map((item, index) => (
                                <ul key={index} className='divide-y divide-[#F4F4F4]'>
                                    {item?.articles?.map((article, idx) => (
                                        <li key={idx} className='text-base font-normal text-skin-primary py-4 cursor-pointer'>
                                            {article.art_name}
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                        <div className='mt-12'>
                            <h2 className='text-base font-bold font-interMedium uppercase mb-10'>
                                Categories
                            </h2>
                            <ul className='grid gap-4'>
                                {[1, 2, 3, 4, 5].map((idx) => (
                                    <li key={idx} className='text-base font-normal text-skin-primary py-1 px-[10px] bg-[#F4F4F4] rounded-[5px] flex items-center gap-2 cursor-pointer'>
                                        <span className='bg-[#8D8D8D] min-w-[27px] min-h-[27px] rounded'></span>  <span className='text-base font-normal text-[#161616]'>
                                            Transactions & Refund
                                            <span className='text-xs font-normal text-[#161616]'>
                                                Spends, cashbacks, refunds, swipe to pay
                                            </span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <secrion className='md:block hidden'>
                <AnyQuery_Sec />
            </secrion>
            <div className='md:hidden block'>
                <OurCommunity />
            </div>
        </main>
    )
}
