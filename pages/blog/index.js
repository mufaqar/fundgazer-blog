import BlogFooter from "../../components/blogFooter";
import Post_template from "../../components/post-template";
import Sidebar from "../../components/sidebar";
import { client } from "../../lib/conn";
import { useState } from "react";
import FirstBlog from "../../components/FirstBlog";
import { BsChevronDown } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";

export default function Blog({ blogs, tags }) {
  const [blogsData, setBlogsData] = useState(blogs);
  const [serachInput, setSearchInput] = useState();
  const filterData = blogsData.filter((item) =>
    item.title.toLowerCase().includes(serachInput)
  );
  // const [sLimit, setSLimit] = useState(0);
  const [eLimit, setELimit] = useState(8);
  var length = blogs.length;

  const loadMore = () => {
    // setSLimit(eLimit);
    setELimit(eLimit + 4);
  };
  // const goBack = () => {
  //   setSLimit(eLimit-3);
  //   setELimit(sLimit + 3);
  // };

  return (
    <>
      <section className="mb-12 md:mt-28">
        <div className="container mx-auto md:pb-10">
          <div className="flex flex-col gap-10 md:flex-row">
            {/* Posts Column Start*/}
            <div className="w-full lg:pr-10 md:w-9/12">
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
                    <h1 className="md:text-6xl text-3xl font-bold text-[#E86A34] font-productSansBold">
                      Blogs
                    </h1>
                  </div>
                </div>
              </section>
              <div>
                {serachInput ? (
                  filterData.length < 1 ? (
                    <span className="mt-3 mb-3 text-xl font-normal text-skin-muted font-gildaDisplay md:block">
                      Result Not Found
                    </span>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}

                {serachInput
                  ? filterData.map((blog, index) => {
                      return <Post_template blog={blog} key={index} />;
                    })
                  : blogs.slice(0, eLimit).map((blog, index) => {
                      if (index != 0) {
                        return (
                          <>
                            <Post_template blog={blog} />
                          </>
                        );
                      }
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
                  className={`items-center gap-2 justify-end text-base italic font-normal cursor-pointer font-interRegular md:text-lg text-skin-primary ${
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
              />
            </div>
            {/* Sidebar Column End*/}
          </div>
        </div>
      </section>
      <BlogFooter />
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

  const tags = await client.fetch(`*[_type == "tags"]`);

  return {
    props: {
      blogs,
      tags,
    },
  };
}
