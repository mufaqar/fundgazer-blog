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

export default function Single_Post({ blogs }) {
  const [socialSticky, setSocialSticky] = useState(true);
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  console.log("blogs", blogs);

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
            <div className="relative w-full p-5 pr-5 md:pr-16 md:w-9/12 md:pl-20">
              <div className="mb-7">
                <ul className="mb-5">
                  <li>
                    <Link href="#">
                      <a className="text-sm font-normal font-interRegular text-skin-muted">
                        11 March 2023
                      </a>
                    </Link>
                  </li>
                </ul>
                <h2 className="mb-5 text-3xl font-bold md:text-4xl font-productSansBold text-skin-dark">
                  7 Best Investing Blogs 2022: Think Like an Investor
                </h2>
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
                <p className="mb-5 text-lg font-normal font-gildaDisplay md:text-2xl text-skin-dark">
                  In this segment of our ‘Think Like an Investor’ series, we’re
                  going to look at another resource which proves invaluable to
                  the modern investor: blogs.
                </p>
              </div>
              <div className="text-center mb-7">
                <figure className="md:h-[395px] w-full h-[179px] relative  mb-3">
                  <Image
                    src="/images/postBanner.png"
                    alt="postBanner.png"
                    layout="fill"
                  ></Image>
                </figure>
                <span className="text-sm italic font-normal font-interRegular text-skin-muted">
                  Photo caption if any goes here
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
                <div className="mb-7">
                  <p className="mb-5 text-lg font-normal font-gildaDisplay md:text-xl text-skin-dark">
                    Now we know what you’re thinking, everyone and their dog has
                    their own blog these days, and while we’re not decrying the
                    merits of a good dog blog, we’ve cut through the noise and
                    listed our favorite investing blogs so you don’t have to
                    slog through the fog (Dr. Seuss eat your heart out).
                  </p>
                  <p className="mb-5 text-lg font-normal font-gildaDisplay md:text-xl text-skin-dark">
                    If you like this, check out our other resources to start
                    thinking like an investor:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li className="text-lg font-normal font-interRegular md:text-xl text-skin-primary">
                      Best Investing Apps
                    </li>
                    <li className="text-lg font-normal font-interRegular md:text-xl text-skin-primary">
                      Best Investing Podcasts
                    </li>
                    <li className="text-lg font-normal font-interRegular md:text-xl text-skin-primary">
                      Best Investing Twitter Accounts
                    </li>
                    <li className="text-lg font-normal font-interRegular md:text-xl text-skin-primary">
                      Best Investing Books
                    </li>
                    <li className="text-lg font-normal font-interRegular md:text-xl text-skin-primary">
                      Best Investing Newsletters
                    </li>
                  </ul>
                </div>
                <div className="mb-7">
                  <h6 className="mb-5 text-xl font-bold font-productSansBold md:text-2xl text-skin-dark">
                    MyWallSt Blog
                  </h6>
                  <p className="mb-5 text-lg font-normal font-gildaDisplay md:text-xl text-skin-dark">
                    Here at MyWallSt, we provide something for everyone. From
                    daily business and stock market news to analyzing individual
                    stocks and an ever-expanding mine of educational posts to
                    make you a better investor, our blog accommodates every type
                    of retail investor out there. It also boasts the best
                    writing team out there.<br></br>Possibly the best writing
                    team ever produced, they provide humble and unbiased
                    analysis at every step!
                  </p>
                </div>
                <div className="mb-7">
                  <h6 className="mb-5 text-xl font-bold font-productSansBold md:text-2xl text-skin-dark">
                    The Collaborative Fund: Morgan Housel
                  </h6>
                  <p className="mb-5 text-lg font-normal font-gildaDisplay md:text-xl text-skin-dark">
                    Morgan Housel is an amazing writer who produces insights
                    that are as eye-opening as they are simple. Taking a few
                    steps back, he surveys a wide range of economic and
                    historical factors to mold and support his long-form opinion
                    pieces, which are produced weekly. His perspective on
                    macro-economics is really unique, as is the subject matter
                    of his weekly post.<br></br>I would highly recommend his
                    article the
                    <span className="text-skin-primary">freakishly strong</span>
                    base for any investor getting started in the stock market.
                  </p>
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
                  <li className="py-2">
                    <Link href="#">
                      <a className="md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular">
                        #Investment
                      </a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="#">
                      <a className="md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular">
                        #Crypto
                      </a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="#">
                      <a className="md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular">
                        #Economy
                      </a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="#">
                      <a className="md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular">
                        #Something
                      </a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="#">
                      <a className="md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular">
                        #Crypto
                      </a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="#">
                      <a className="md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular">
                        #Economy
                      </a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="#">
                      <a className="md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular">
                        #Investment
                      </a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="#">
                      <a className="md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular">
                        #Crypto
                      </a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="#">
                      <a className="md:text-base text-xs text-skin-primary font-medium border border-[#6F49DD] rounded-full py-2 px-3 font-interRegular">
                        #Economy
                      </a>
                    </Link>
                  </li>
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
                          <span className="font-bold">Like</span> 2,562
                        </p>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>
                        <p className="text-[#E86A34] font-interRegular font-normal md:text-lg text-sm flex gap-2 items-bottom">
                          <span className="text-2xl rotate-180">
                            <FaRegThumbsUp />
                          </span>
                          <span className="font-bold">Dislike</span> 256
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
              <Sidebar />
            </div>
            {/* Sidebar Column End*/}
          </div>
        </div>
      </section>
      <div ref={ref}></div>
      <div ref={ref2}>
        <RelatedPosts />
        <Comment_Section />
        <BlogFooter />
      </div>
    </>
  );
}
{/* 
export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const query = ` *[_type == "blog" && slug.current == $pageSlug][0]{
    title,
    slug
  }`;

  const blogs = await client.fetch(query, {pageSlug});
  return {
    props: {blogs}, // will be passed to the page component as props
  }
}; */}

