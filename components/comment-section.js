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
      <div className="border border-gray-200 p-8 mb-3">
        <h1 className="text-2xl font-semibold  text-[#E86A34]">
          Thank You For You'r Submiting Your Comment !
        </h1>
        <h2 className="font-interRegular md:text-xl text-sm font-normal text-skin-muted mt-2">
          Once it has been approved it will appear below.
        </h2>
      </div>
    );
  };

  return (
    <>
      <section>
        <div className="container mx-auto py-20">
          <div className="md:w-9/12 w-full mx-auto p-5">
            {submited ? (
              <SubmitedMessage />
            ) : (
              <div className="border border-gray-200 md:p-7 p-5 mb-10">
                <h6 className="md:text-xl text-base font-productSansBold font-bold text-skin-dark mb-5">
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
                      className="md:text-xl text-base font-interRegular font-normal text-skin-muted"
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
                      className="md:text-xl text-base font-interRegular font-normal text-skin-muted"
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
                      className="md:text-xl text-base font-interRegular font-normal text-skin-muted"
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
                      <span className="text-red-400 block">
                        Name field is required<sup>*</sup>
                      </span>
                    )}
                    {errors.email && (
                      <span className="text-red-400 block">
                        Email field is required<sup>*</sup>
                      </span>
                    )}
                    {errors.comment && (
                      <span className="text-red-400 block">
                        Comment field is required<sup>*</sup>
                      </span>
                    )}
                  </div>
                  <input
                    type="submit"
                    className="text-xl cursor-pointer font-interBold font-bold text-skin-light bg-skin-primary w-full py-3 rounded"
                    value="Submit"
                  />
                </form>
              </div>
            )}
            <div></div>
            <div>
              <h6 className="md:text-xl text-base font-productSansBold font-bold text-skin-dark mb-5">
                Comments
              </h6>
              {blog.comment.slice(0,limit).map((singleC, index) => (
                <div key={index} className="border border-gray-200 p-5 mb-3">
                  <p className="font-interRegular md:text-xl text-sm font-normal text-skin-muted mb-5">
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
                  
                  <div onClick={loadMore} className="cursor-pointer font-interRegular md:text-lg text-base font-normal italic text-skin-primary flex gap-2 items-center justify-end">
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
