import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
    };

    return (
        <div className="w-full">
            <Slider {...settings}>
                <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px]">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.ibb.co/7tZYycbc/flat-social-media-cover-template-international-day-families-celebration-23-2150316513.jpg"
                        alt="Banner 1"
                    />
                </div>
                <div className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px]">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.ibb.co/9krLXTwb/hand-drawn-escape-room-facebook-cover-23-2149926017.jpg"
                        alt="Banner 2"
                    />
                </div>
                <div className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px]">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.ibb.co/HDZcHwWC/image.jpg"
                        alt="Banner 3"
                    />
                </div>
                <div className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px]">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.ibb.co/TBmVXHYt/hand-drawn-escape-room-facebook-cover-23-2149996034.jpg"
                        alt="Banner 4"
                    />
                </div>
            </Slider>
        </div>
    );
}
