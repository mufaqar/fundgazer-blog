import Image from "next/image";
import Link from "next/link";
import Post_template from "../../components/post-template";
import Sidebar from "../../components/sidebar";

export default function Blog() {
  return (
    <>
      <section>
        <div className="container flex items-center pt-10 mx-auto">
          <div className="p-4">
            <h1 className="md:text-6xl text-3xl font-bold text-[#E86A34] font-productSansBold">
              Blogs
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container pb-10 mx-auto">
          <div className="flex flex-col gap-10 md:flex-row">
            {/* Posts Column Start*/}
            <div className="w-full md:w-9/12">
              {/* Main Post Start*/}
              <div className="flex flex-col-reverse py-5 mb-10 border-b md:flex-row md:gap-8">
                <div className="w-full p-4 md:w-5/12 md:p-0">
                  <figure className="h-[360px] w-full relative">
                    <Image
                      src="/images/img1.png"
                      alt="img1"
                      layout="fill"
                      className="object-cover rounded-lg"
                    ></Image>
                  </figure>
                </div>
                <div className="flex flex-col justify-between p-4 md:w-7/12 md:p-0">
                  <div>
                    <h3 className="mb-3 text-2xl font-bold md:text-4xl text-skin-dark font-productSansBold">
                      7 Best Investing Blogs 2022: Think Like an Investor
                    </h3>
                    <ul className="flex mb-3 space-x-3 text-base font-normal md:text-xl text-skin-primary font-productSansBold">
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
                  <ul className="flex mb-4 space-x-3 text-sm font-normal md:text-xl text-skin-muted font-interRegular">
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
                <div className="flex flex-row gap-5 py-3 border-b">
                  <Post_template />
                </div>
                <div className="flex flex-row gap-5 py-3 border-b">
                  <Post_template />
                </div>
                <div className="flex flex-row gap-5 py-3 border-b">
                  <Post_template />
                </div>
                <div className="flex flex-row gap-5 py-3 border-b">
                  <Post_template />
                </div>
                <div className="flex flex-row gap-5 py-3 border-b">
                  <Post_template />
                </div>
              </div>
              {/* All Posts END*/}
            </div>
            {/* Posts Column END*/}

            {/* Sidebar Column Start*/}
            <aside className="w-full md:w-3/12">
              <Sidebar />
            </aside>
            {/* Sidebar Column End*/}
          </div>
        </div>
      </section>
    </>
  );
}
