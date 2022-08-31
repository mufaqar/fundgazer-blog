import BlogFooter from "../../components/blogFooter";
import Post_template from "../../components/post-template";
import Sidebar from "../../components/sidebar";
import { client } from "../../lib/conn";
import { useState, useEffect } from "react";
import FirstBlog from "../../components/FirstBlog";
import { BsChevronDown } from "react-icons/bs";
import { useInView } from "react-hook-inview"; 
import Head from 'next/head'


export default function Blog({ blogs, tags, serachInput, setSearchInput }) {
  
  const [blogsData, setBlogsData] = useState(blogs);
  const [scrollTop, setScrollTop] = useState(0);
  const [ssticky, setSSticky] = useState(false);
  const [sideBarSticky, setSideBarSticky] = useState(true);
  const [ref, inView] = useInView();

  
  const filterData = blogsData.filter((item) =>
    item.title.toLowerCase().includes(serachInput)
  );
  // const [sLimit, setSLimit] = useState(0);
  const [eLimit, setELimit] = useState(8);
  var length = blogs.length;

  const loadMore = () => {
    // setSLimit(eLimit);
    setELimit(eLimit + 5);
  };
  // const goBack = () => {
    //   setSLimit(eLimit-3);
    //   setELimit(sLimit + 3);
    // };

 

  useEffect(() => {
    inView ? setSideBarSticky(false) : setSideBarSticky(true)
  },[inView])

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    scrollTop >= '440' ? setSSticky(true) : setSSticky(false);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
    
  }, [scrollTop]);
  

  return (
    <>
      <Head>
        <title>Blogs - Fundgazer</title>
       
      </Head>
      <section className="mb-12 md:mt-28">
        <div className="mx-auto custom_container md:pb-10">
          <div className="flex flex-col gap-10 md:flex-row">
            {/* Posts Column Start*/}
            <div className="w-full mt-24 md:mt-0 lg:pr-12 md:w-9/12">
              {/* Main Post Start*/}
              {blogs.map((blog, index) => {
                if (index === 0) {
                  return <FirstBlog data={blog} key={index} />;
                }
              })}
              {/* Main Post END*/}

              {/* All Posts Start*/}
              <section>
                <div className="container flex items-center mx-auto">
                  <div className="p-2 pl-0">
                    <h1 className="md:text-6xl text-3xl ml-5 lg:ml-0 font-bold text-[#E86A34] font-productSansBold">
                      Blogs
                    </h1>
                  </div>
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
                      return <Post_template blog={blog} key={index} />;
                    })
                  : blogs.slice(0, eLimit).map((blog, index) => {
                      return (
                        <>
                          <Post_template blog={blog} key={index}/>
                        </>
                      );
                    })}
              </div>
              {/* <div className={`flex mt-10 ${sLimit === 0 ? 'justify-end' : 'justify-between'}`}> */}
              {/* <div
                  onClick={goBack}
                  className={`items-center gap-2 text-base italic font-normal cursor-pointer font-interRegular md:text-lg text-skin-primary ${
                    sLimit === 0 ? "hidden" : "flex"
                  }`}
                >
                  <span>
                    <FaChevronLeft strokeWidth={2} />
                  </span>
                  Previous Posts
                </div> */}

              <div
                onClick={loadMore}
                className={`items-center gap-2 mt-10 justify-end text-base italic font-normal cursor-pointer font-interRegular md:text-lg text-skin-primary ${
                  eLimit > length ? "hidden" : "flex"
                }`}
              >
                See More Posts
                <span>
                  <BsChevronDown strokeWidth={2} />
                </span>
              </div>
              {/* </div> */}
              {/* All Posts END*/}
            </div>

            {/* Posts Column END*/}

            {/* Sidebar Column Start*/}
            <div className="hidden w-full md:w-3/12 md:block">
              <Sidebar
                tags={tags}
                latestBlogs={blogs}
                setSearchInput={setSearchInput}
                serachInput={serachInput}
                ssticky={ssticky}
                sideBarSticky={sideBarSticky}
              />
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

export async function getServerSideProps() {
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

  const tags = await client.fetch(`*[_type == "tags"]`);

  return {
    props: {
      blogs,
      tags,
    },
  };
}
