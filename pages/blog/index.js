import Image from 'next/image';
import Link from 'next/link';
import BlogFooter from '../../components/blogFooter';
import Post_template from '../../components/post-template';
import Sidebar from '../../components/sidebar';
import { client } from '../../lib/conn'




export default function Blog({blogs}) {
  
  console.log('blogs****', blogs);

  return (
    <>
      <section>
        <div className="container flex md:hidden items-center mx-auto mt-24">
          <div className="p-4">
            <h1 className="md:text-6xl text-3xl font-bold text-[#E86A34] font-productSansBold">
              Blogs
            </h1>
          </div>
        </div>
      </section>
      <section className='mb-12 md:mt-28'>
        <div className="container md:pb-10 mx-auto lg:pl-16">
          <div className="flex flex-col gap-10 md:flex-row">
            {/* Posts Column Start*/}
            <div className="w-full lg:pr-20 md:w-9/12">
              {/* Main Post Start*/}
              <div className="flex flex-col-reverse py-5 mb-10 border-b md:flex-row md:gap-8 pt-0">
                <div className="w-full p-4 pb-0 md:pb-4 pt-0 md:pt-4 md:w-5/12 md:p-0">
                  <Link href="/blog/single-post">
                    <a>
                      <figure className="h-[162px] md:h-full lg:h-[360px] w-full relative">
                        <Image
                          src="/images/img1.png"
                          alt="img1"
                          layout="fill"
                          className="object-cover rounded-lg"
                        ></Image>
                      </figure>
                    </a>
                  </Link>
                  <ul className="flex md:hidden justify-between mt-3 space-x-3 text-[15px] font-normal text-skin-muted font-interRegular">
                    <li>
                      <Link href="#">
                        <a>Shashank Gupta</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>11 March 2023</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-between p-4 md:w-7/12 md:p-0">
                  <div>
                    <Link href="/blog/single-post">
                      <a>
                        <h3 className="mb-3 text-2xl font-bold md:text-4xl text-skin-dark font-productSansBold">
                          7 Best Investing Blogs 2022: Think Like an Investor
                        </h3>
                      </a>
                    </Link>
                    <ul className="flex mb-3 space-x-3 text-base font-normal md:text-xl text-skin-primary font-productSansReqular">
                      <li>
                        <Link href="#">
                          <a>#Economy</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>#Crypto</a>
                        </Link>
                      </li>
                    </ul>
                    <p className="mb-3 text-base font-normal md:text-xl text-skin-muted font-gildaDisplay">
                      In this segment of our ‘Think Like an Investor’ series,
                      we’re going to look at another resource which proves
                      invaluable to the modern investor: blogs.
                    </p>
                  </div>
                  <ul className="hidden md:flex mb-4 space-x-3 text-[15px] font-normal text-skin-muted font-interRegular">
                    <li>
                      <Link href="#">
                        <a>Shashank Gupta</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>11 March 2023</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Main Post END*/}

              {/* All Posts Start*/}
              <div>
                <div className="flex flex-row gap-5 px-5 py-3 mt-12 border-b md:px-0">
                  <Post_template/>
                </div>
                <div className="flex flex-row gap-5 px-5 py-3 mt-12 border-b md:px-0">
                  <Post_template/>
                </div>
                <div className="flex flex-row gap-5 px-5 py-3 mt-12 border-b md:px-0">
                  <Post_template/>
                </div>
                <div className="flex flex-row gap-5 px-5 py-3 mt-12 border-b md:px-0">
                  <Post_template/>
                </div>
                <div className="flex flex-row gap-5 px-5 py-3 mt-12 border-b md:px-0">
                  <Post_template/>
                </div>
              </div>
              {/* All Posts END*/}
            </div>
            {/* Posts Column END*/}

            {/* Sidebar Column Start*/}
            <div className="w-full md:w-3/12 hidden md:block">
              <Sidebar />
            </div>
            {/* Sidebar Column End*/}
          </div>
        </div>
      </section>
      <BlogFooter/>
    </>
  );
}



export async function getStaticProps() {
  const blogs = await client.fetch(`*[_type == "blog"]{
    title,
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
  return {
    props: {
      blogs
    }
  };
}