import React, { Component } from "react";
import Slider from "react-slick";
import TeamBox from "./teamBox";

export default class Responsive extends Component {
    render(name , position) {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows:false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        initialSlide: 2
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
            <div>
                <div className="bg-black h-[79px] w-[79px] p-4  ml-auto rounded-full md:block hidden absolute top-0 right-0">
                    <button type="button" data-role="none" className="slick-arrow slick-next block">Left</button>
                    <button type="button" data-role="none" className="slick-arrow slick-prev block">Right</button>
                </div>
                <Slider {...settings}>

                    <div>
                        <TeamBox name='Shashank Gupta' position='FOUNDER'/>
                    </div>
                    <div>
                        <TeamBox name='Shashank Gupta' position='FOUNDER'/>
                    </div>
                    <div>
                        <TeamBox name='Shashank Gupta' position='FOUNDER'/>
                    </div>
                    <div>
                        <TeamBox name='Shashank Gupta' position='FOUNDER'/>
                    </div>
                    <div>
                        <TeamBox name='Shashank Gupta' position='FOUNDER'/>
                    </div>
                    <div>
                        <TeamBox name='Shashank Gupta' position='FOUNDER'/>
                    </div>
                    <div>
                        <TeamBox name='Shashank Gupta' position='FOUNDER'/>
                    </div>
                </Slider>
            </div>
        );
    }
}