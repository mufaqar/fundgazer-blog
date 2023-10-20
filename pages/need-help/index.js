import React from 'react'
import { AiOutlineFileText } from 'react-icons/ai'
import { Categories } from '../../const/articles'
import AnyQuery_Sec from '../../components/any-query'
import OurCommunity from '../our-community'

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
            <section className='py-20 px-5'>
                <div className='container mx-auto'>
                    <div>
                        <h2 className='text-[27px] leading-[36px] font-bold font-interMedium text-center text-[#333333]'>
                            Most Popular Articles
                        </h2>
                    </div>
                    <div className='max-w-[780px] mx-auto my-12'>
                        <ul className='grid md:grid-cols-2 justify-between w-full'>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
                                <li key={index} className='flex gap-2 justify-center text-base font-semibold font-interMedium text-skin-primary'>
                                    <AiOutlineFileText className='text-[#A7A7A7]' /> Minimum to invest
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='grid md:grid-cols-3 gap-8'>
                        {Categories?.map((item, index) => (
                            <div key={index} className='border border-[#E0E0E0] py-7 px-[13px] rounded-[5px] cursor-pointer'>
                                <h4 className='text-xl font-semibold font-interMedium text-[#333333] text-center'>
                                    {item?.cat_name}
                                </h4>

                                <p className='text-sm font-medium font-interMedium text-skin-primary text-center mt-4'>
                                    {item?.articles.length} questions
                                </p>
                            </div>
                        ))}
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
