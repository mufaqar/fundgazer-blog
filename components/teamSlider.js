import React, { Component } from "react";
import Slider from "react-slick";
import TeamBox from "./teamBox";

export default class Responsive extends Component {
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
    render(name, position) {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            className: "center",
            centerMode: false,
            slidesToScroll: 3,
            initialSlide: 2,
            arrows: false,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        initialSlide: 0,
                        infinite: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 0
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 0,
                    }
                }
            ]
        };
        return (
            <div>
                <div className="container relative mx-auto">
                    <h3 className='pt-4 mb-5 text-3xl font-normal md:text-6xl font-interRegular text-skin-dark md:mb-14'>Our <span className='font-bold text-skin-primary'>Team</span></h3>
                   <div className="bg-black h-[79px] w-[79px] p-4  ml-auto rounded-full md:block hidden absolute top-0 right-0">
                        <button type="button" data-role="none" className="block slick-arrow slick-next" onClick={this.previous}>Left</button>
                        <button type="button" data-role="none" className="block slick-arrow slick-prev" onClick={this.next}>Right</button>
                   </div>
                </div>

                <div className="ml-0 overflow-x-hidden slider_wrapper lg:pl-[5%]">
                    <Slider ref={c => (this.slider = c)} {...settings} className="ml-4 -mr-36">
                        <div>
                            <TeamBox name='Shashank Gupta' position='FOUNDER' />
                        </div>
                        <div>
                            <TeamBox name='Shashank Gupta' position='FOUNDER' />
                        </div>
                        <div>
                            <TeamBox name='Shashank Gupta' position='FOUNDER' />
                        </div>
                        <div>
                            <TeamBox name='Shashank Gupta' position='FOUNDER' />
                        </div>
                        <div>
                            <TeamBox name='Shashank Gupta' position='FOUNDER' />
                        </div>
                        <div>
                            <TeamBox name='Shashank Gupta' position='FOUNDER' />
                        </div>
                        <div>
                            <TeamBox name='Shashank Gupta' position='FOUNDER' />
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}