import Image from "next/image";
import Link from "next/link";

export default function Post_template({ blog }) {
  return (
    <>
      <div className="flex flex-col justify-between w-9/12 md:p-0">
        <div>
          <Link href={`/blog/${blog.slug.current}`}>
            <a>
              <h3 className="mb-3 text-base font-bold md:text-3xl text-skin-dark font-productSansBold hover:underline transition-all ease-in-out duration-300">
                {blog.title}
              </h3>
            </a>
          </Link>
          <ul className="flex mb-3 space-x-3 text-base font-normal md:text-xl text-skin-primary font-productSansReqular">
            {blog.tags.slice(0, 2).map((tag, index) => (
              <li key={index}>
                <Link href="#">
                  <a>#{tag.tag}</a>
                </Link>
              </li>
            ))}
          </ul>
          <p className="hidden mb-3 text-xl font-normal text-skin-muted font-gildaDisplay md:block">
            {blog.excerpt}
          </p>
        </div>
        <ul className="flex gap-3 text-[15px] font-normal font-interRegular text-skin-muted mt-6">
          <li>
            <div>
              <a>{blog.author.author.name}</a>
            </div>
          </li>
          <li>
            <div>
              <a>{blog.releaseDate}</a>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-3/12">
        <Link href={`/blog/${blog.slug.current}`}>
          <a>
            <figure className="md:max-h-[202px] h-[94px] md:max-w-[235px] md:w-full md:h-full relative ml-auto rounded-lg overflow-hidden">
              <Image
                src={blog.featureImage.asset.url}
                alt="img2"
                layout="fill"
                className="object-cover rounded-lg hover:scale-105 transition-all ease-in-out duration-300"
              ></Image>
            </figure>
          </a>
        </Link>
      </div>
    </>
  );
}
