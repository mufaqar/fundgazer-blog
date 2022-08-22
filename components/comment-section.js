import Link from "next/link";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useForm } from "react-hook-form";

export default function Comment_Section({ blog }) {
  const [submited, setSubmited] = useState(false);
  const [limit, setlimit] = useState(4);
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loadMore = () => {
    setlimit(limit+2)
  }
  // const onSubmit = (data) => console.log(data);

  const onSubmit = (data) => {
    fetch("http://localhost:3000/api/comment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        setSubmited(true);
      })
      .catch((error) => {
        console.log(error);
        setSubmited(false);
      });
  };

 

  const SubmitedMessage = () => {
    return (
      <div className="p-8 mb-3 border border-gray-200">
        <h1 className="text-2xl font-semibold  text-[#E86A34]">
          Thank You For You'r Submiting Your Comment !
        </h1>
        <h2 className="mt-2 text-sm font-normal font-interRegular md:text-xl text-skin-muted">
          Once it has been approved it will appear below.
        </h2>
      </div>
    );
  };

  return (
    <>
      <section>
        <div className="py-20">
          <div className="w-full p-5 md:w-9/12">
            {submited ? (
              <SubmitedMessage />
            ) : (
              <div className="p-5 mb-10 border border-gray-200 md:p-7">
                <h6 className="mb-5 text-base font-bold md:text-xl font-productSansBold text-skin-dark">
                  Add New Comment
                </h6>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-5 ">
                    <input
                      {...register("_id")}
                      type="hidden"
                      value={blog._id}
                      name="_id"
                    />

                    <label
                      htmlFor="name"
                      className="text-base font-normal md:text-xl font-interRegular text-skin-muted"
                    >
                      User Name
                    </label>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      id="name"
                      name="name"
                      className="mt-2 w-full border border-gray-200 focus:border-[#6F49DD] outline-none px-3 rounded py-2"
                    />
                  </div>
                  <div className="mb-5 ">
                    <label
                      htmlFor="email"
                      className="text-base font-normal md:text-xl font-interRegular text-skin-muted"
                    >
                      Email
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      id="email"
                      name="email"
                      className="mt-2 w-full border border-gray-200 focus:border-[#6F49DD] outline-none px-3 rounded py-2"
                    />
                  </div>
                  <div className="mb-5 ">
                    <label
                      htmlFor="comment"
                      className="text-base font-normal md:text-xl font-interRegular text-skin-muted"
                    >
                      Your Comment
                    </label>
                    <textarea
                      {...register("comment", { required: true })}
                      type="text"
                      id="comment"
                      name="comment"
                      cols="30"
                      rows="10"
                      className="mt-2 w-full border border-gray-200 focus:border-[#6F49DD] outline-none px-3 rounded py-2"
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    {errors.name && (
                      <span className="block text-red-400">
                        Name field is required<sup>*</sup>
                      </span>
                    )}
                    {errors.email && (
                      <span className="block text-red-400">
                        Email field is required<sup>*</sup>
                      </span>
                    )}
                    {errors.comment && (
                      <span className="block text-red-400">
                        Comment field is required<sup>*</sup>
                      </span>
                    )}
                  </div>
                  <input
                    type="submit"
                    className="w-full py-3 text-xl font-bold rounded cursor-pointer font-interBold text-skin-light bg-skin-primary"
                    value="Submit"
                  />
                </form>
              </div>
            )}
            <div></div>
            <div>
              <h6 className="mb-5 text-base font-bold md:text-xl font-productSansBold text-skin-dark">
                Comments
              </h6>
              {blog.comment.slice(0,limit).map((singleC, index) => (
                <div key={index} className="p-5 mb-3 border border-gray-200">
                  <p className="mb-5 text-sm font-normal font-interRegular md:text-xl text-skin-muted">
                    {singleC.comment}
                  </p>
                  <ul className="font-interRegular md:text-lg text-sm font-normal italic text-[#E86A34] flex justify-between">
                    <li className="capitalize">{singleC.name}</li>
                    <li>{singleC._createdAt}</li>
                  </ul>
                  
                </div>
              ))}
              <ul>
                <li>
                  
                  <div onClick={loadMore} className={` items-center justify-end gap-2 text-base italic font-normal cursor-pointer font-interRegular md:text-lg text-skin-primary ${limit > 4 ? 'hidden' : 'flex'  }`}>
                    See More Comments
                    <span>
                      <BsChevronDown strokeWidth={2} />
                    </span>
                  </div>
                  
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
