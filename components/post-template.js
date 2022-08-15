import Image from "next/image";
import Link from "next/link";

export default function Post_template({ blog }) {
  return (
    <>
      <div className="flex flex-col justify-between w-9/12 md:p-0">
        <div>
          <Link href={`/blog/${blog.slug.current}`}>
            <a>
              <h3 className="mb-3 text-base font-bold md:text-3xl text-skin-dark font-productSansBold">
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
        <ul className="flex gap-6 text-[15px] font-normal font-interRegular text-skin-muted mt-6">
          <li>
            <Link href="#">
              <a>{blog.author.author.name}</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>{blog.releaseDate}</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-3/12">
        <Link href={`/blog/${blog.slug.current}`}>
          <a>
            <figure className="md:max-h-[202px] h-[94px] md:max-w-[235px] md:w-full md:h-full relative ml-auto">
              <Image
                src={blog.featureImage.asset.url}
                alt="img2"
                layout="fill"
                className="object-cover rounded-lg"
              ></Image>
            </figure>
          </a>
        </Link>
      </div>
    </>
  );
}
