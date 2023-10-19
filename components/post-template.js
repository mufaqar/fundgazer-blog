import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Post_template({ blog }) {

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
  
  function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
  }
  
  return (
    <>
      <div className="flex flex-row gap-5 px-5 py-3 mt-5 border-b md:px-0">
        <div className="flex flex-col justify-between w-9/12 md:p-0">
          <div>
            <Link href={`/blog/${blog.slug.current}`}>
              <h3 className="mb-3 text-base font-bold transition-all duration-300 ease-in-out cursor-pointer md:text-3xl text-skin-dark font-productSansBold hover:underline">
                {blog.title}
              </h3>
            </Link>
            <ul className="flex mb-3 space-x-3 text-base font-normal md:text-xl text-skin-primary font-productSansReqular">
              {blog.tags.slice(0, 2).map((tag, index) => (
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
            <p className="hidden mb-3 text-xl font-normal text-skin-muted font-gildaDisplay md:block">
              { truncate(blog.excerpt, 32) }
              <span> ...</span>
            </p>
          </div>
          <ul className="flex gap-3 text-[15px] font-normal font-interRegular text-skin-muted mt-6">
            <li>
              <div>
                <span>{blog.author.author.name}</span>
              </div>
            </li>
            <li>
              <div>
                <span>{blog.releaseDate}</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-3/12">
          <Link href={`/blog/${blog.slug.current}`}>
            
              <figure className="md:max-h-[202px] h-[94px] md:max-w-[235px] md:w-full md:h-full relative ml-auto rounded-lg overflow-hidden">
                <Image
                  src={blog.featureImage.asset.url}
                  alt="img2"
                  layout="fill"
                  className="object-cover transition-all duration-300 ease-in-out rounded-lg hover:scale-105"
                ></Image>
              </figure>
            
          </Link>
        </div>
      </div>
    </>
  );
}
