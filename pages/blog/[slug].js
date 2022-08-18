import React from "react";
import { client } from "../../lib/conn";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../../components/sidebar";
import BlogFooter from "../../components/blogFooter";
import { FaLinkedinIn, FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import RelatedPosts from "../../components/relatedPosts";
import Comment_Section from "../../components/comment-section";
import { BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import { useInView } from "react-hook-inview"; // use current active screen Area
import AuthorProfile from "../../components/authorProfile";
import PortableText from "react-portable-text";

export default function Single({ blog, latestBlogs, tags, allBlogs }) {
  // console.log("tags in function", tagblog);

  const [socialSticky, setSocialSticky] = useState(true);
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  useEffect(() => {
    if (inView) {
      setSocialSticky(false);
    } else {
      inView2 ? "" : setSocialSticky(true);
    }
  }, [inView, inView2]);

  return (
    <>
      <section>
        <div className="container pb-10 mx-auto pt-28 ">
          <div className="flex flex-col gap-16 md:flex-row">
            {/* Posts Column Start*/}
            <div className="relative w-full px-6 lg:pr-3 md:w-9/12 md:pl-20">
              <div className="mb-7">
                <ul className="mb-5">
                  <li>
                    <Link href="#">
                      <a className="text-sm font-normal font-interRegular text-skin-muted">
                        {blog.releaseDate}
                      </a>
                    </Link>
                  </li>
                </ul>
                <h2 className="mb-5 text-3xl font-bold md:text-4xl font-productSansBold text-skin-dark">
                  {blog.title}
                </h2>
                <ul className="flex mb-3 space-x-3 text-base font-normal md:text-xl text-skin-primary font-productSansReqular">
                  {blog.tags.slice(0, 2).map((tag, index) => (
                    <li key={index} className="hover:underline">
                      <Link href="#">
                        <a>#{tag.tag}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="mb-5 text-lg font-normal font-gildaDisplay md:text-2xl text-skin-dark">
                  {blog.excerpt}
                </p>
              </div>
              <div className="text-center mb-7">
                <figure className="md:h-[400px] w-full h-[179px] relative  mb-3">
                  <Image
                    src={blog.featureImage.asset.url}
                    alt={blog.title}
                    className="object-cover"
                    layout="fill"
                  ></Image>
                </figure>
                <span className="text-sm italic font-normal font-interRegular text-skin-muted">
                  {!blog.featureImage.caption ? "" : blog.featureImage.caption}
                </span>
              </div>
              <div>
                <div className="p-5 mb-5 border border-gray-200 md:border-0">
                  <ul
                    className={`md:flex-col flex gap-5 items-center left-4 top-1/3 z-40 ${
                      socialSticky ? "md:fixed" : "md:block"
                    }`}
                  >
                    <li className="text-sm font-bold font-productSansBold md:text-xl text-skin-dark">
                      Share
                    </li>
                    <li className="text-2xl bg-[#E86A34] text-skin-light p-2 rounded-full">
                      <Link href="#">
                        <a>
                          <BsFacebook />
                        </a>
                      </Link>
                    </li>
                    <li className="text-2xl bg-[#E86A34] text-skin-light p-2 rounded-full">
                      <Link href="#">
                        <a>
                          <BsTwitter />
                        </a>
                      </Link>
                    </li>
                    <li className="text-2xl bg-[#E86A34] text-skin-light p-2 rounded-full">
                      <Link href="#">
                        <a>
                          <FaLinkedinIn />
                        </a>
                      </Link>
                    </li>
                    <li className="text-2xl bg-[#E86A34] text-skin-light p-2 rounded-full">
                      <Link href="#">
                        <a>
                          <BsWhatsapp />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="single_inner_content">
                  <PortableText
                    // Pass in block content straight from Sanity.io
                    content={blog.content}
                    // Optionally override marks, decorators, blocks, etc. in a flat
                    // structure without doing any gymnastics
                    serializers={{
                      h6: ({ children }) => (
                        <h6 className="mb-5 text-xl font-bold font-productSansBold md:text-2xl text-skin-dark">
                          {children}
                        </h6>
                      ),
                      ul: ({ children }) => (
                        <ul className="space-y-2 list-disc list-inside">
                          {children}
                        </ul>
                      ),
                      li: ({ children }) => (
                        <li className="text-lg font-normal font-interRegular md:text-xl text-skin-primary">
                          {children}
                        </li>
                      ),
                    }}
                  />
                </div>
              </div>
              {/* author profile  */}
              <div className="block md:hidden">
                <AuthorProfile />
              </div>
              {/* xx author profile  xx */}
              <div className="mb-10">
                <h6 className="mb-5 text-xl font-bold font-productSansBold md:text-2xl text-skin-dark">
                  Tags
                </h6>
                <ul className="flex flex-wrap gap-3 mb-5">
                  {blog.tags.map((tag, index) => (
                    <li className="py-2" key={index}>
                      <Link href="#">
                        <a className="md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular hover:bg-[#6F49DD] hover:text-white">
                          #{tag.tag}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="flex items-center justify-between gap-10 md:justify-start">
                  <li>
                    <Link href="#">
                      <a>
                        <p className="flex gap-2 text-sm font-normal text-skin-primary font-interRegular md:text-lg items-bottom">
                          <span className="text-2xl">
                            <FaRegThumbsUp />
                          </span>
                          <span className="font-bold">Like</span> {blog.likes}
                        </p>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <p className="text-[#E86A34] font-interRegular font-normal md:text-lg text-sm flex gap-2 items-bottom">
                          <span className="text-2xl rotate-180">
                            <FaRegThumbsDown />
                          </span>
                          <span className="font-bold">Dislike</span>{" "}
                          {blog.dislikes}
                        </p>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Posts Column END*/}

            {/* Sidebar Column Start*/}
            <div className="w-full md:w-3/12 hidden md:block">
              <Sidebar tags={tags} latestBlogs={latestBlogs} authorName={blog.author.author.name} ProfileURL={blog.author.author.authorprofile.asset.url} linkedinURL={blog.author.author.linkedinurl}/>
            </div>
            {/* Sidebar Column End*/}
          </div>
        </div>
      </section>
      <div ref={ref}></div>
      <div ref={ref2}>
        <RelatedPosts allBlogs={allBlogs} tag={blog.tags[0].tag}/>
        <Comment_Section blog={blog} />
        <BlogFooter />
      </div>
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const query = ` *[ _type == "blog" && slug.current == $pageSlug ][0]{
    title,
    _id,
    tags[]->{
        tag
    },
    likes,
    'comment' :*[_type == 'comment' && blog._ref == ^._id && approved == true],
    excerpt,
    content,
    dislikes,
    slug,
    releaseDate,
    featureImage{
      asset->{
        url
      },
      caption
    },
    author{
      author->{
      name,
      linkedinurl,
       authorprofile{
        asset->{
          url
        }
       }
      }
    }
  }`;

  const allBlogs = await client.fetch(`*[_type == "blog"]{
    title,
    tags[]->{
      tag
    },
    likes,
    excerpt,
    dislikes,
    slug,
    releaseDate,
    featureImage{
      asset->{
        url
      }
    },
    author{
      author->{
        name
      }
    }
  }`);

  const blog = await client.fetch(query, { pageSlug });

  const latestBlogs = await client.fetch(`*[_type == "blog"]{
    title,
    slug,
    releaseDate,
  }`);

  const tags = await client.fetch(`*[_type == "tags"]`);

  return {
    props: {
      blog,
      latestBlogs,
      tags,
      allBlogs 
    }, // will be passed to the page component as props
  };
};


