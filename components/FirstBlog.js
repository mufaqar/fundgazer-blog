import Image from "next/image";
import Link from "next/link";

export default function FirstBlog({data}) {
  // console.log('data>>>>>>>>', data)
  return (
    <>
      <div className="flex flex-col-reverse py-5 mb-10 border-b md:flex-row md:gap-8 pt-0">
        <div className="w-full p-4 pb-0 pt-0 md:w-5/12 md:p-0">
          <Link
            href={`/blog/${ data.slug.current }`}
          >
            <a>
              <figure className="h-[162px] md:h-full lg:h-[360px] overflow-hidden w-full relative rounded-lg">
                <Image
                  src={data.featureImage.asset.url}
                  alt="img1"
                  layout="fill"
                  className="object-cover rounded-lg hover:scale-105 transition-all ease-in-out duration-300"
                ></Image>
              </figure>
            </a>
          </Link>
          <ul className="flex md:hidden justify-between mt-5 space-x-3 text-[15px] mb-0 font-normal text-skin-muted font-interRegular">
            <li>
              <div>
                <a>Shashank Gupta</a>
              </div>
            </li>
            <li>
              <div>
                <a>11 March 2023</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between p-4 md:w-7/12 md:p-0">
          <div>
            <Link href={`/blog/${data.slug.current}`}>
              <a>
                <h3 className="mb-3 text-2xl font-bold md:text-4xl text-skin-dark font-productSansBold hover:underline transition-all ease-in-out duration-300">
                  {data.title}
                </h3>
              </a>
            </Link>
            <ul className="flex mb-3 space-x-3 text-base font-normal md:text-xl text-skin-primary font-productSansReqular">
              {data.tags.slice(0, 2).map((tag, index) => (
                <li key={index}>
                  <Link href="#">
                    <a>#{tag.tag}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mb-3 text-base font-normal md:text-xl text-skin-muted font-gildaDisplay">
              {data.excerpt}
            </p>
          </div>
          <ul className="hidden md:flex  space-x-3 text-[15px] font-normal text-skin-muted font-interRegular">
            <li>
              <div>
                <a>{data.author.author.name}</a>
              </div>
            </li>
            <li>
              <div>
                <a>{data.releaseDate}</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
