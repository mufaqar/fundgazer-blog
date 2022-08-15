import Link from 'next/link';
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

export default function Comment_Section() {

  const form = "1233"
  

  
  const handleSubmit = async e => {
    e.preventDefault();
    
    try {
      response = await fetch('http://localhost:3000/api/comment', {
        method: 'POST',
        body: JSON.stringify(form),
        type: 'application/json'
      })
    } catch (err) {
      console.error('err', err)
    }
  }

  return (
    <>
      <section>
        <div className="container mx-auto py-20">
          <div className="md:w-9/12 w-full mx-auto p-5">
            <div className="border border-gray-200 md:p-7 p-5 mb-10">
              <h6 className="md:text-xl text-base font-productSansBold font-bold text-skin-dark mb-5">
                Add New Comment {form}
              </h6>
              <form>
                <div className="mb-5 ">
                  <label
                    htmlFor="name"
                    className="md:text-xl text-base font-interRegular font-normal text-skin-muted"
                    
                  >
                    User Name
                  </label>
                  <input
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
                    type="text"
                    id="comment"
                    name="comment"
                    cols="30"
                    rows="10"
                    className="mt-2 w-full border border-gray-200 focus:border-[#6F49DD] outline-none px-3 rounded py-2"
                  ></textarea>
                </div>
                <input
                  type="submit"
                  className="text-xl font-interBold font-bold text-skin-light bg-skin-primary w-full py-3 rounded"
                  onClick={handleSubmit}
                  value="Submit"
                />
                  
                
              </form>
            </div>
            <div>
              <h6 className="md:text-xl text-base font-productSansBold font-bold text-skin-dark mb-5">
                Comments
              </h6>
              <div className="border border-gray-200 p-5 mb-3">
                <p className="font-interRegular md:text-xl text-sm font-normal text-skin-muted mb-5">
                  This is a text just to fill up the comment section with real
                  text to save this text looking random and giving us a bt. This
                  is a text just to fill up the comment section with real text
                  to save this text looking random and giving us a bt.
                </p>
                <ul className="font-interRegular md:text-lg text-sm font-normal italic text-[#E86A34] flex justify-between">
                  <li>Anonymous Name</li>
                  <li>24th Jan 2021</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-5 mb-3">
                <p className="font-interRegular md:text-xl text-sm font-normal text-skin-muted mb-5">
                  This is a text just to fill up the comment section with real
                  text to save this text looking random and giving us a bt. This
                  is a text just to fill up the comment section with real text
                  to save this text looking random and giving us a bt.
                </p>
                <ul className="font-interRegular md:text-lg text-sm font-normal italic text-[#E86A34] flex justify-between">
                  <li>Anonymous Name</li>
                  <li>24th Jan 2021</li>
                </ul>
              </div>
              <div className="border border-gray-200 p-5 mb-3">
                <p className="font-interRegular md:text-xl text-sm font-normal text-skin-muted mb-5">
                  This is a text just to fill up the comment section with real
                  text to save this text looking random and giving us a bt. This
                  is a text just to fill up the comment section with real text
                  to save this text looking random and giving us a bt.
                </p>
                <ul className="font-interRegular md:text-lg text-sm font-normal italic text-[#E86A34] flex justify-between">
                  <li>Anonymous Name</li>
                  <li>24th Jan 2021</li>
                </ul>
              </div>
              <ul>
                <li>
                  <Link href="#">
                    <a className="font-interRegular md:text-lg text-base font-normal italic text-skin-primary flex gap-2 items-center justify-end">
                      See More Comments{' '}
                      <span>
                        <BsChevronDown strokeWidth={2} />
                      </span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
