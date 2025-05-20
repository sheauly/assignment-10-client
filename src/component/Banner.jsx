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
                    <img className="w-full h-full" src="/Banner.png" alt="" />
                    <div className="absolute">
                        <h1 className="text-5xl font-bold">🏠 "Find Your Ideal Roommate — Share More Than Just Rent!"</h1>
                        <p>I’m currently living in a peaceful and well-furnished apartment in Banani, Dhaka, and looking for a responsible and friendly roommate to share the space. The apartment includes 2 bedrooms, 1 bathroom, a kitchen, and a spacious balcony. It offers all essential amenities such as free Wi-Fi, refrigerator, washing machine, and more. </p>
                    </div>
                </div>
                <div className="h-[600px]">
                    <img className="w-full h-full" src="/public/Banner2.png" alt="" />

                </div>
                <div className="h-[600px] ">
                    <img className="w-full h-full" src="/public/image.jpg" alt="" />

                </div>
                <div className="h-[600px]">
                    <img className="w-full h-full" src="/public/images (2).png" alt="" />

                </div>
                
            </Slider>
        </div>
    );
}