import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./herSlider.css";

import img_slide_1 from "../../../assets/images/slider-img-1.png";
import img_slide_2 from "../../../assets/images/slider-img-2.png";
import img_slide_3 from "../../../assets/images/slider-img-4.jpg";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                speed={1200}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="hero-slider"
            >
                <SwiperSlide>
                    <div className="slider-container">
                        <div className="content">
                            <h2>End Season</h2>
                            <h3>Speakers</h3>
                            <p>Sale upto <span>20%</span> OFF!</p>
                            <button type="button" className="btn btn-shop-now">Shop Now</button>
                        </div>
                        <div className="slide-img-wrapper">
                            <img src={img_slide_1} alt="slider-img-1" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-container">
                        <div className="content">
                            <h2>End Season</h2>
                            <h3>Speakers</h3>
                            <p>Sale upto <span>20%</span> OFF!</p>
                            <button type="button" className="btn btn-shop-now">Shop Now</button>
                        </div>
                        <div className="slide-img-wrapper">
                            <img src={img_slide_2} alt="slider-img-1" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-container">
                        <div className="content">
                            <h2>End Season</h2>
                            <h3>Speakers</h3>
                            <p>Sale upto <span>20%</span> OFF!</p>
                            <button type="button" className="btn btn-shop-now">Shop Now</button>
                        </div>
                        <div className="slide-img-wrapper">
                            <img src={img_slide_1} alt="slider-img-1" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
