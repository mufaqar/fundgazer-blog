import { useRouter } from "next/router";
import BlogFooter from "../../components/blogFooter";
import Post_template from "../../components/post-template";
import Sidebar from "../../components/sidebar";
import { client } from "../../lib/conn";
import { useState, useEffect } from "react";
import FirstBlog from "../../components/FirstBlog";
import { BsChevronDown } from "react-icons/bs";
import { useInView } from "react-hook-inview";
import Head from 'next/head'

export default function Tag({ blogs, tags, tagblog }) {

  const [blogsData, setBlogsData] = useState(blogs);
  const [serachInput, setSearchInput] = useState();
  const [eLimit, setELimit] = useState(8);
  var length = blogs.length;
  const [ref, inView] = useInView();

  // const [tagData, setTagData] = useState();
  const filterData = blogsData.filter((item) =>
    item.title.toLowerCase().includes(serachInput)
  );

  const router = useRouter();

  const {
    query: { tag },
  } = router;

  const props = {
    tag,
  };


  const loadMore = () => {
    setELimit(eLimit + 5);
  };




  return (
    <>
      <Head>
        <title>{props.tag} - Fundgazer</title>
      </Head>
      <section className="mb-12 md:mt-32">
        <div className="mx-auto custom_container md:pb-10">
          <div className="flex flex-col gap-10 lg:flex-row md:px-4">
            {/* Posts Column Start*/}
            <div className="w-full lg:pr-28 xl:pr-36 2xl:pr-48 lg:w-9/12">
              {/* Main Post Start*/}
              {blogs.map((blog, index) => (
                <>{index === 0 ? <FirstBlog data={blog} key={index} /> : ""}</>
              ))}

              {/* Main Post END*/}

              {/* All Posts Start*/}
              <section>
                <div className="flex items-center px-4 lg:pl-0">

                  <h1 className="md:text-5xl text-3xl font-bold text-[#E86A34] font-productSansBold">
                    {props.tag}
                  </h1>

                </div>
              </section>
              <div>
                {serachInput && filterData.length < 1 && (
                  <span className="mt-3 mb-3 text-xl font-normal text-skin-muted font-gildaDisplay md:block">
                    Result Not Found
                  </span>
                )}

                {serachInput
                  ? filterData.map((blog, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row gap-5 px-5 md:px-0"
                      >
                        <Post_template blog={blog} />
                      </div>
                    );
                  })
                  : tagblog.map((tag) => (
                    <>
                      {tag.tag === props.tag &&
                        tag.posts.slice(0, eLimit).map((item, index) => (
                          <Post_template blog={item} key={index} />
                        ))}
                    </>
                  ))}
                <div
                  onClick={loadMore}
                  className={`items-center gap-2 justify-end text-base italic font-normal cursor-pointer mt-10 font-interRegular md:text-lg text-skin-primary ${eLimit > length ? "hidden" : "flex"
                    }`}
                >
                  See More Posts
                  <span>
                    <BsChevronDown strokeWidth={2} />
                  </span>
                </div>
              </div>
              {/* All Posts END*/}
            </div>
            {/* Posts Column END*/}

            {/* Sidebar Column Start*/}
            <div className="hidden w-full lg:w-3/12 md:block">
              <div className="sticky top-20">
                <Sidebar
                  tags={tags}
                  latestBlogs={blogs}
                  setSearchInput={setSearchInput}
                  serachInput={serachInput}
                />
              </div>
            </div>
            {/* Sidebar Column End*/}
          </div>
        </div>
      </section>
      <div ref={ref}>
        <BlogFooter />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const blogs = await client.fetch(`*[_type == "blog"]{
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

  const tagblog = await client.fetch(`*[_type == "tags"]{
   _id,
   _type,
   tag,
   title,
   "posts": *[_type == "blog" && references(^._id)]{
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
   } 
 }`);

  const tags = await client.fetch(`*[_type == "tags"]`);

  return {
    props: {
      blogs,
      tags,
      tagblog,
    },
  };
}
