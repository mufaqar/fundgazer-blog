import BlogFooter from '../../components/blogFooter';
import Post_template from '../../components/post-template';
import Sidebar from '../../components/sidebar';
import { client } from '../../lib/conn';
import { useState } from 'react';
import FirstBlog from '../../components/FirstBlog';
import { BsChevronDown } from 'react-icons/bs';
import { useInView } from 'react-hook-inview';
import Head from 'next/head';
import { useRouter } from 'next/router';
import JoinOurCommunity from '../../components/joinOurCommunity'


export default function Blog({ blogs, tags, serachInput, setSearchInput }) {
  const [blogsData, setBlogsData] = useState(blogs);
  const [ref, inView] = useInView();

  const filterData = blogsData.filter((item) =>
    item.title.toLowerCase().includes(serachInput)
  );
  const [eLimit, setELimit] = useState(8);
  var length = blogs.length;
  const router  = useRouter();

  const loadMore = () => {
    setELimit(eLimit + 5);
  };

  const handleClick = (event) => {
    const tag = event.target.getAttribute("tag-name");
    sendProps(tag);
  };
  function sendProps(tag){
    router.push({
      pathname : "/blog/tag",
      query : {
        tag 
      }
    })
  }

  return (
    <>
      <Head>
        <title>Blogs - Fundgazer</title>
      </Head>
      <section className="mb-12 md:mt-28">
        <div className="mx-auto custom_container md:pb-10">
          <div className="relative flex flex-col gap-10 lg:flex-row md:px-6">
            {/* Posts Column Start*/}
            <div className="w-full mt-24 md:mt-0 lg:pr-28 xl:pr-36 2xl:pr-48 lg:w-9/12">
              {/* Main Post Start*/}
              {blogs.map((blog, index) => {
                if (index === 0) {
                  return <FirstBlog data={blog} key={index} />;
                }
              })}
              {/* Main Post END*/}

              {/* All Posts Start*/}
              <section>
                <div className="flex items-center">
                  <div className="px-4 pt-0 md:px-0 ">
                    <ul className="flex flex-wrap gap-2 mb-5 tags lg:hidden lg:px-0">
                      {tags.slice(0, 15).map((tag, index) => (
                        <li className="py-2" key={index}>

                          <a className="md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular hover:bg-transparent">
                            <button
                              onClick={handleClick}
                              tag-name={tag.tag}
                            >
                              #{tag.tag}
                            </button>
                          </a>

                        </li>
                      ))}
                    </ul>
                    <h1 className="md:text-6xl text-3xl lg:ml-0 font-bold text-[#E86A34] font-productSansBold">
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
                        <Post_template blog={blog} key={index} />
                      </>
                    );
                  })}
              </div>

              <div
                onClick={loadMore}
                className={`items-center gap-2 mt-10 justify-end text-base italic font-normal cursor-pointer font-interRegular md:text-lg text-skin-primary ${eLimit > length ? 'hidden' : 'flex'
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
      <div className='fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden'>
        <JoinOurCommunity/>
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
