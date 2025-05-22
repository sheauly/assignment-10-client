import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Slider {...settings}>
                <div className="relative h-[600px]">
                    <img className="w-full h-full object-cover" src="/Banner.png" alt="Banner 1" />
                </div>
                <div className="h-[600px]">
                    <img className="w-full h-full object-cover" src="/Banner2.png" alt="Banner 2" />
                </div>
                <div className="h-[600px]">
                    <img className="w-full h-full object-cover" src="/image.jpg" alt="Banner 3" />
                </div>
                <div className="h-[600px]">
                    <img className="w-full h-full object-cover" src="/public/images2.jpg" alt="Banner 4" />
                </div>
            </Slider>
        </div>
    );
}
