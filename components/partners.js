import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

function Partners() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
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
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className='py-16'>
            <div className='container mx-auto px-5'>
                <div>
                    <p className='text-base font-normal font-interRegular text-black/60 text-center'>
                        Supports
                    </p>
                </div>
                <Slider {...settings}>
                    {Logos?.map((item, idx) => {
                        return (
                            <div key={idx} className=''>
                                <Image src={item.img} alt="img" width={188} height={32} />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </section>
    )
}

export default Partners

export const Logos = [
    {
        img: "/images/partner/1.png",
    },
    {
        img: "/images/partner/2.png",
    },
    {
        img: "/images/partner/3.png",
    },
    {
        img: "/images/partner/4.png",
    },
    {
        img: "/images/partner/5.png",
    },
    {
        img: "/images/partner/6.png",
    },
    {
        img: "/images/partner/1.png",
    },
    {
        img: "/images/partner/2.png",
    },
    {
        img: "/images/partner/3.png",
    },
    {
        img: "/images/partner/4.png",
    },
    {
        img: "/images/partner/5.png",
    },
    {
        img: "/images/partner/6.png",
    },
]