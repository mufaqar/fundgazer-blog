import Link from "next/link";
import React from "react";

export default function RecentPost({ latestBlogs }) {
  

  return (
    <>
      <div className={`p-5 md:px-0`}>
        <h6 className="mb-5 text-xl font-bold text-skin-dark font-productSansBold">
          Recent Blogs
        </h6>
        <ul className="gap-3 mb-5">
          {latestBlogs.slice(0, 4).map((blog, index) => (
            <li key={index} className="flex flex-col gap-2 py-2 mb-5">
              <Link href="#">
                <a className="text-xs font-normal text-skin-muted font-interRegular">
                {blog.releaseDate}
                </a>
              </Link>
              <Link href={`/blog/${blog.slug.current}`}>
                <a className="text-base font-normal md:text-[22px] text-skin-dark font-productSansReqular">
                  {blog.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
