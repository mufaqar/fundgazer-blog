import { useRouter } from "next/router";
import BlogFooter from "../../components/blogFooter";
import Post_template from "../../components/post-template";
import Sidebar from "../../components/sidebar";
import { client } from "../../lib/conn";
import { useState, useEffect } from "react";
import FirstBlog from "../../components/FirstBlog";

export default function Tag({ blogs, tags, tagblog }) {
  // console.log("blogs****", blogs);
  const [blogsData, setBlogsData] = useState(blogs);
  const [serachInput, setSearchInput] = useState();
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

  // useEffect(() => {
  //   tagblog.map((tag) => ( tag.tag === props.tag && setTagData(tag.posts)))
  // },[tagData]);



  // console.log('tagData', tagData)

  return (
    <>
      <section>
        <div className="container flex  items-center mx-auto mt-24">
          <div className="p-4">
            <h1 className="md:text-5xl text-3xl font-bold text-[#E86A34] font-productSansBold">
              {props.tag}
            </h1>
          </div>
        </div>
      </section>
      <section className="mb-12 md:mt-10">
        <div className="container md:pb-10 mx-auto">
          <div className="flex flex-col gap-10 md:flex-row">
            {/* Posts Column Start*/}
            <div className="w-full lg:pr-10 md:w-9/12">
              {/* Main Post Start*/}
              {serachInput
                ? filterData.map((blog, index) => {
                    if (index === 0) {
                      return <FirstBlog data={blog} key={index} />;
                    }
                  }) 
                  : tagblog.map((tag, index) => (
                      <>
                        {tag.tag === props.tag ?  tag.posts.map((item, index)=> ( index === 0 ? <FirstBlog data={item} key={index} /> : "" )): ""}
                      </>
                  ))
              }

              {/* Main Post END*/}

              {/* All Posts Start*/}
              <div>
                {serachInput ? (
                  filterData.length < 1 ? (
                    <span className="mb-3 text-xl font-normal text-skin-muted font-gildaDisplay md:block">
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
                      if (index === 0) {
                      } else {
                        return (
                          <div
                            key={index}
                            className="flex flex-row gap-5 px-5 py-3 mt-5 md:px-0"
                          >
                            <Post_template blog={blog} />
                          </div>
                        );
                      }
                    })
                  : tagblog.map((tag) => (
                      <>
                        {tag.tag === props.tag && tag.posts.map((item, index) => ( index != 0 && <Post_template blog={item} key={index}/> ))}
                      </>
                  )) 
                  
                  
                }
              </div>
              {/* All Posts END*/}
            </div>
            {/* Posts Column END*/}

            {/* Sidebar Column Start*/}
            <div className="w-full md:w-3/12 hidden md:block">
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
