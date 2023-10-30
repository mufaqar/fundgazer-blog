import React, { useState } from 'react'
import { Categories } from '../../const/articles'
import { BiChevronRight } from 'react-icons/bi'
import { AiOutlineClose, AiOutlineFileText } from 'react-icons/ai'
import ArticleContent from '../../components/article-content'
import Mbl_Help_Cate from '../../components/mbl-help-cate'

function Help_Category() {
  const [openCate, setOpenCate] = useState(0)
  const handleCates = (id) => {
    if (openCate === id) {
      return setOpenCate(null)
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
    <main className='md:bg-[#F0F0F0]'>
      <section className='py-32 px-5 md:block hidden'>
        <div className='container mx-auto flex md:flex-row gap-8'>
          <div className='md:w-1/4 pt-10'>
            <h2 className='text-base font-bold font-interMedium uppercase mb-10'>
              Categories
            </h2>
            <ul className='grid gap-4'>
              {Categories?.map((item, index) => (
                <li key={index} className='cursor-pointer flex items-center gap-2'
                  onClick={() => { handleCates(index), setOpenArticle(false) }}>
                  <span className={`text-sm font ${openCate === index ? "text-[#2B195A] font-bold font-interBold" : "text-[#858585] font-semibold font-interRegular"}`}>
                    {item?.cat_name}
                  </span>
                  {openCate === index && <BiChevronRight className='text-[#858585]' />}
                </li>
              ))}
            </ul>
          </div>
          {Categories?.map((item, index) => (
            <div key={index} className={`relative md:w-3/4 w-full h-[750px] bg-white border border-[#E9E5E5] pt-[46px] px-[47px] ${openCate === index ? 'block mt-4 text-gray-500' : 'hidden'}`}>
              <h2 className='md:text-[30px] leading-[36px] font-semibold font-interMedium mb-10 text-[#222222]'>
                {item?.cat_name}
              </h2>
              <ul className='grid gap-4'>
                {item?.articles.map((article, idx) => (
                  <li key={idx} className='flex gap-3 text-[15.6px] leading-[23.4px] font-medium font-interRegular text-skin-primary items-center cursor-pointer'
                    onClick={() => handleArticles(idx)}>
                    <AiOutlineFileText className='text-[#A7A7A7]' /> {article?.art_name}
                  </li>
                ))}
                {item?.articles.map((article, idx) => (
                  <div key={idx} className={openArticle === idx ? 'absolute w-full h-full top-0  left-0 right-0 block text-gray-500' : 'hidden'}>
                    <AiOutlineClose className='text-4xl font-bold text-[#222222] absolute md:right-10 right-4 md:top-10 top-24 cursor-pointer' onClick={() => setOpenArticle(false)} />
                    <ArticleContent data={article} />
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className='py-32  md:hidden block relative'>
        <div className='container mx-auto '>
          <Mbl_Help_Cate />
        </div>
      </section>
    </main>
  )
}

export default Help_Category