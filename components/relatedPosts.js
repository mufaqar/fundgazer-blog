import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function RelatedPosts({ allBlogs, tag }) {

  let propsTag = tag;
  var tagData = [];

  allBlogs.map((item, key) => {
    <div key={key}>
      {item.tags.map((tag, key2) => {
        <div key={key2}>{tag.tag === propsTag && tagData.push(item)}</div>;
      })}
    </div>;
  });

  return (
    <section className="bg-[#F8F8F8]">
      <div className="px-5 py-10 mx-auto custom_container">
        <h6 className="mb-5 text-2xl font-bold font-productSansBold text-skin-dark">
          Related Blogs
        </h6>

        <div className="grid gap-10 md:grid-cols-3">
          {tagData.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="flex flex-row-reverse items-center gap-4 py-3 border-b border-gray-200 md:flex-col md:border-b-0 md:py-0"
            >
              <Link href={`/blog/${item.slug.current}`}>
                <a>
                  <figure className="h-[94px] relative md:w-[370px] w-[93px] md:h-[226px]">  
                    <Image
                      src={item.featureImage.asset.url}
                      alt="relatedBlog"
                      layout="fill"
                      className="object-cover"
                    ></Image>
                  </figure>
                </a>
              </Link>
              <Link href={`/blog/${item.slug.current}`}>
                <a>
                  <h5 className="text-lg font-normal font-productSansReqular md:text-2xl text-skin-dark">
                    {item.title}
                  </h5>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
