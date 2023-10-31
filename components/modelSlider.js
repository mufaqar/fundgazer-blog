import React, { Component } from "react";
import ModelBox from './models-box'
import { BiChevronDown } from 'react-icons/bi'
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default class Models_Slider extends Component {
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
            infinite: true,
            autoplay: true,
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

        const OpenStatic =  this.props.onClick

        return (
            <section className='py-16 px-5 md:bg-[#F2EDFF] relative'>
                <div className='container mx-auto'>
                    <div>
                        <p className='text-xl font-medium text-[#747474] mb-5 md:block hidden'>
                            Explore all models :
                        </p>
                    </div>
                    <div className=''>
                        <Slider {...settings} ref={c => (this.slider = c)}>
                            <ModelBox onClick={OpenStatic} />
                            <ModelBox onClick={OpenStatic} />
                            <ModelBox onClick={OpenStatic} />
                            <ModelBox onClick={OpenStatic} />
                        </Slider>
                        <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#F8F8F8] rounded-full text-black p-2.5 text-3xl md:block hidden" onClick={this.previous}><IoIosArrowBack /></button>
                        <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#F8F8F8] rounded-full text-black p-2.5 text-3xl md:block hidden" onClick={this.next}><IoIosArrowForward /></button>
                    </div>
                    <div>
                        <button className='text-sm font-normal text-skin-primary font-interRegular flex w-fit ml-auto mr-0 items-center mt-5 md:hidden'>
                            See More Comments <BiChevronDown className='text-4xl animate-bounce' />
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}