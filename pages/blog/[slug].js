import React from 'react';
import { client } from '../../lib/conn';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../../components/sidebar';
import BlogFooter from '../../components/blogFooter';
import { FaLinkedinIn, FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';
import RelatedPosts from '../../components/relatedPosts';
import Comment_Section from '../../components/comment-section';
import { BsFacebook, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { useState } from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-hook-inview'; // use current active screen Area
import AuthorProfile from '../../components/authorProfile';
import PortableText from 'react-portable-text';
import { useRouter } from 'next/router';
import Head from 'next/head';
import SEO from '@bradgarropy/next-seo';
import JoinOurCommunity from '../../components/joinOurCommunity';
import { UpdownButton } from '@lyket/react';
import AnyQuery_Sec from '../../components/any-query';
import Join_WaitList from '../../components/join-waitList';

// Queray
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
  metatitle,
  metadescription,
  metatags[],
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

const AllBlogs = `*[_type == "blog"]{
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
}`;

const LatestBlogs = `*[_type == "blog"]{
  title,
  slug,
  releaseDate,
}`;

export default function Single({
  blog,
  latestBlogs,
  tags,
  allBlogs,
  title,
  content,
}) {
  console.log('🚀 ~ file: [slug].js ~ line 95 ~ Single ~ blog', blog);
  const [socialSticky, setSocialSticky] = useState(true);
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const router = useRouter();

  useEffect(() => {
    if (inView) {
      setSocialSticky(false);
    } else {
      inView2 ? '' : setSocialSticky(true);
    }
  }, [inView, inView2]);

  const handleClick = (event) => {
    const tag = event.target.getAttribute('tag-name');
    sendProps(tag);
  };

  function sendProps(tag) {
    router.push({
      pathname: '/blog/tag',
      query: {
        tag,
      },
    });
  }

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta
          name="keywords"
          content={
            blog.metatags
              ? blog.metatags.map((metaTag) => {
                return metaTag;
              })
              : blog.tags.map((tag) => {
                return tag.tag;
              })
          }
        />
      </Head>
      <SEO
        title={blog.metatitle ? blog.metatitle : blog.title}
        description={blog.metadescription ? blog.metadescription : blog.excerpt}
      />

      <section>
        <div className="pb-10 mx-auto custom_container pt-28 ">
          <div className="flex flex-col gap-16 px-6 lg:flex-row md:px-0">
            {/* Posts Column Start*/}
            <div className="relative w-full lg:pr-28 xl:pr-36 2xl:pr-48 lg:w-9/12 rpadding">
              <div className="mb-7">
                <ul className="mb-5">
                  <li>
                    <Link
                      href="#"
                      className="text-sm font-normal font-interRegular text-skin-muted"
                    >
                      {blog.releaseDate}
                    </Link>
                  </li>
                </ul>
                <h2 className="mb-5 text-3xl font-bold md:text-4xl font-productSansBold text-skin-dark">
                  {blog.title}
                </h2>

                <ul className="flex mb-3 space-x-3 text-base font-normal md:text-xl text-skin-primary font-productSansReqular">
                  {blog.tags.slice(0, 2).map((tag, index) => (
                    <li key={index}>
                      <button
                        onClick={handleClick}
                        tag-name={tag.tag}
                        className="hover:underline"
                      >
                        #{tag.tag}
                      </button>
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
                  {!blog.featureImage.caption ? '' : blog.featureImage.caption}
                </span>
              </div>
              <div>
                <div
                  className={`fixed left-0 right-0 z-50 flex justify-center w-full  bg-white border border-gray-200 bottom-0 md:block lg:static md:border-0 ${socialSticky && 'p-5'
                    }`}
                >
                  <ul
                    className={`lg:flex-col flex gap-5 items-center left-4 top-1/3 z-40 ${socialSticky ? 'lg:fixed' : 'hidden lg:block '
                      } `}
                  >
                    <li className="hidden text-sm font-bold font-productSansBold md:text-xl text-skin-dark md:block">
                      Share
                    </li>
                    <li className="text-2xl bg-[#E86A34] text-skin-light p-2 rounded-full">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=https://www.fundgazer.com/blog/${blog.slug.current}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BsFacebook />
                      </a>
                    </li>
                    <li className="text-2xl bg-[#E86A34] text-skin-light p-2 rounded-full">
                      <a
                        href={`https://twitter.com/intent/tweet?text=https://www.fundgazer.com/blog/${blog.slug.current}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BsTwitter />
                      </a>
                    </li>
                    <li className="text-2xl bg-[#E86A34] text-skin-light p-2 rounded-full">
                      <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.fundgazer.com/blog/${blog.slug.current}title=${blog.title}&summary=&source=`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li className="text-2xl bg-[#E86A34] text-skin-light p-2 rounded-full">
                      <a href="#" target="_blank">
                        <BsWhatsapp />
                      </a>
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
                      h2: ({ children }) => (
                        <h6 className="mb-5 text-xl font-bold font-productSansBold md:text-2xl text-skin-dark">
                          {children}
                        </h6>
                      ),
                      h3: ({ children }) => (
                        <h6 className="mb-5 text-xl font-bold font-productSansBold md:text-2xl text-skin-dark">
                          {children}
                        </h6>
                      ),
                      h4: ({ children }) => (
                        <h6 className="mb-5 text-xl font-bold font-productSansBold md:text-2xl text-skin-dark">
                          {children}
                        </h6>
                      ),
                      h5: ({ children }) => (
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
                      <a className="md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular hover:bg-transparent">
                        <button onClick={handleClick} tag-name={tag.tag}>
                          #{tag.tag}
                        </button>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-2xl">
                {title}
                <UpdownButton id={blog._id} namespace="blog" />
                {content}
              </div>
            </div>
            {/* Posts Column END*/}

            {/* Sidebar Column Start*/}
            <div className="hidden w-full lg:w-3/12 md:block">
              <div className="sticky top-20">
                <Sidebar
                  tags={tags}
                  latestBlogs={latestBlogs}
                  authorName={blog.author.author.name}
                  ProfileURL={blog.author.author.authorprofile.asset.url}
                  linkedinURL={blog.author.author.linkedinurl}
                />
              </div>
            </div>
            {/* Sidebar Column End*/}
          </div>
        </div>
      </section>
      <div ref={ref}></div>
      <div ref={ref2}>
        <RelatedPosts allBlogs={allBlogs} tag={blog.tags[0].tag} />
        <div className="mx-auto custom_container lg:w-9/12">
          <Comment_Section blog={blog} />
        </div>
      </div>
      <Join_WaitList />
      <AnyQuery_Sec />
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const allBlogs = await client.fetch(AllBlogs);
  const blog = await client.fetch(query, { pageSlug });
  const latestBlogs = await client.fetch(LatestBlogs);
  const tags = await client.fetch(`*[_type == "tags"]`);

  return {
    props: {
      blog,
      latestBlogs,
      tags,
      allBlogs,
    }, // will be passed to the page component as props
  };
};
