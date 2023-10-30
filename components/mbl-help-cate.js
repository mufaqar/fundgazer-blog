import React, { useState } from 'react'
import { Categories } from '../const/articles'
import ArticleContent from './article-content'
import { AiOutlineClose } from 'react-icons/ai'

export default function Mbl_Help_Cate() {
    const [openCate, setOpenCate] = useState(0)
    const handleCates = (id) => {
        if (openCate === id) {
            return setOpenCate(id)
        }
        setOpenCate(id)
    }
    const [openArticle, setOpenArticle] = useState(false)
    const handleArticles = (idx) => {
        if (openArticle === idx) {
            return setOpenArticle(idx)
        }
        setOpenArticle(idx)
    }
    return (
        <div>
            <ul className='flex px-5'>
                {Categories?.slice(0, 3).map((item, index) => (
                    <li key={index} className={`text-base font-normal py-1 px-[10px] flex flex-col justify-center items-center gap-2 cursor-pointer border-b-2  ${openCate === index ? "border-[#6D44DD] text-skin-primary" : "border-[#8D8D8D]"}`}
                        onClick={() => handleCates(index)}>
                        <span className='bg-[#8D8D8D] min-w-[27px] min-h-[27px] rounded'></span>  <span className='text-xs font-bold text-center'>
                            Transactions & Refund
                        </span>
                    </li>
                ))}
            </ul>
            {Categories?.slice(0, 3).map((item, index) => (
                <div key={index} className={openCate === index ? "block px-5" : "hidden"}>
                    <h2 className='text-base font-bold font-interMedium text-[#161616] mt-10'>
                        {item?.cat_name}
                    </h2>
                    <ul className='divide-y divide-[#F4F4F4]'>
                        {item?.articles?.map((article, idx) => (
                            <li key={idx} className={`text-base font-normal text-skin-primary py-4 cursor-pointer`}
                                onClick={() => handleArticles(idx)}>
                                {article.art_name}
                            </li>
                        ))}
                    </ul>
                    {item?.articles.map((article, idx) => (
                        <div key={idx} className={openArticle === idx ? 'absolute w-full top-0 left-0 right-0 block text-gray-500' : 'hidden'}>
                            <AiOutlineClose className='text-4xl font-bold text-[#222222] absolute md:right-10 right-4 md:top-10 top-24 cursor-pointer' onClick={() => setOpenArticle(false)} />
                            <ArticleContent data={article} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
