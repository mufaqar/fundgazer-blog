import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function FirstBlog({ data }) {
  const router = useRouter();

  const handleClick = (event) => {
    const tag = event.target.getAttribute("tag-name");
    sendProps(tag);
  };

  function sendProps(tag) {
    router.push({
      pathname: "/blog/tag",
      query: {
        tag,
      },
    });
  }

  return (
    <>
      <div className="flex flex-col-reverse py-5 pt-0 mb-10 border-b md:flex-row md:gap-8">
        <div className="w-full p-4 pt-0 pb-0 md:w-5/12 md:p-0">
          <Link href={`/blog/${data.slug.current}`}>
            
              <figure className="h-[162px] md:h-full lg:h-[360px] overflow-hidden w-full relative rounded-lg">
                <Image
                  src={data.featureImage.asset.url}
                  alt="img1"
                  layout="fill"
                  className="object-cover transition-all duration-300 ease-in-out rounded-lg hover:scale-105"
                ></Image>
              </figure>
            
          </Link>
          <ul className="flex md:hidden justify-between mt-5 space-x-3 text-[15px] mb-0 font-normal text-skin-muted font-interRegular">
            <li>
              <div>
                <span>Shashank Gupta</span>
              </div>
            </li>
            <li>
              <div>
                <span>11 March 2023</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between p-4 md:w-7/12 md:p-0">
          <div>
            <Link href={`/blog/${data.slug.current}`}>
            
                <h3 className="mb-3 text-2xl font-bold transition-all duration-300 ease-in-out md:text-4xl text-skin-dark font-productSansBold hover:underline">
                  {data.title}
                </h3>
           
            </Link>
            <ul className="flex mb-3 space-x-3 text-base font-normal md:text-xl text-skin-primary font-productSansReqular">
              {data.tags.slice(0, 2).map((tag, index) => (
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
            <p className="mb-3 text-base font-normal md:text-xl text-skin-muted font-gildaDisplay">
              {data.excerpt}
            </p>
          </div>
          <ul className="hidden md:flex  space-x-3 text-[15px] font-normal text-skin-muted font-interRegular">
            <li>
              <div>
                <span>{data.author.author.name}</span>
              </div>
            </li>
            <li>
              <div>
                <span>{data.releaseDate}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
