import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function RelatedPosts({ allBlogs, tag }) {
  console.log('tagallBlogs', allBlogs);
  console.log('tag', tag);
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
      <div className="container mx-auto py-10 px-5">
        <h6 className="font-productSansBold text-2xl font-bold text-skin-dark mb-5">
          Related Blogs
        </h6>

        <div className="grid md:grid-cols-3 gap-10">
          {tagData.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="flex md:flex-col flex-row-reverse gap-4 items-center md:border-b-0 border-b border-gray-200 md:py-0 py-3"
            >
              <Link href={`/blog/${item.slug.current}`}>
                <a>
                  <figure className="md:w-[402px] w-[93px] md:h-[226px] h-[94px] relative">
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
                  <h5 className="font-productSansReqular md:text-2xl text-lg font-normal text-skin-dark">
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
