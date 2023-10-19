import React, { Component } from "react";
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Link from "next/link";
import Image from "next/image";

export default class RelatedPosts extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      rows: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 12,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };

    const { allBlogs, tag } = this.props;
    let propsTag = tag;
    var tagData = [];

    allBlogs.map((item, key) => {
      <div key={key}>
        {item.tags.map((tag, key2) => {
          <div key={key2}>{tag.tag === propsTag && tagData.push(item)}</div>;
        })}
      </div>;
    });
    return (
      <section className='py-16 px-5 md:bg-[#F2EDFF] relative'>
        <div className='container mx-auto'>
          <h6 className="mb-5 text-2xl font-bold font-productSansBold text-skin-dark">
            Related Blogs
          </h6>
          <div className=''>
            <Slider {...settings} ref={c => (this.slider = c)}>
              {tagData?.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row-reverse items-center gap-4 py-3 border-b border-gray-200 md:flex-col md:border-b-0 md:py-0"
                >
                  <Link href={`/blog/${item.slug.current}`}>

                    <figure className="related_blog">
                      <Image
                        src={item.featureImage.asset.url}
                        alt="relatedBlog"
                        width={500}
                        height={300}
                        className="object-cover w-full h-full"
                      ></Image>
                    </figure>

                  </Link>
                  <Link href={`/blog/${item.slug.current}`}>

                    <h5 className="text-lg font-normal font-productSansReqular md:text-2xl text-skin-dark">
                      {item.title}
                    </h5>

                  </Link>
                </div>
              ))}
            </Slider>
            <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#F8F8F8] rounded-full text-black p-2.5 text-3xl md:block hidden" onClick={this.previous}><IoIosArrowBack /></button>
            <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#F8F8F8] rounded-full text-black p-2.5 text-3xl md:block hidden" onClick={this.next}><IoIosArrowForward /></button>
          </div>
        </div>
      </section>
    );
  }
}