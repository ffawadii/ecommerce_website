import React from 'react';
import Slider from "./HeroSlider/heroSlider.jsx";
import "./home.css";

//Icons
import { FaCartPlus } from 'react-icons/fa';

// Images
import stereo_img from "../../assets/images/stereo-category-img.png";
import home_theatre_img from "../../assets/images/home-theatre-category-img.png"
import bt_speakers_img from "../../assets/images/bt-speakers.png"
import headphones_img from "../../assets/images/headphones-category-img.png"
import speakers_img from "../../assets/images/speakers-category-img.png"
import ad_bg_banner from "../../assets/images/bg-banner.jpeg"
import game_console_img from "../../assets/images/da-banner-1.png"

import falcon_logo from "../../assets/images/falcon-brand.png"
import falcon_block_img from "../../assets/images/falcon-brand-block-img.png"
import your_logo from "../../assets/images/your-brand.png"
import your_block_img from "../../assets/images/your-brand-block-img.png"
import pathway_logo from "../../assets/images/pathway-brand.png"
import pathway_block_img from "../../assets/images/pathway-brand-block-img.png"
import atmosphere_logo from "../../assets/images/atmosphere-brand.png"
import atmosphere_block_img from "../../assets/images/atmosphere-brand-block-img.png"
import sportex_logo from "../../assets/images/sportex-brand.png"
import sportex_block_img from "../../assets/images/sportex-brand-block-img.png"

const slider = () => {
    return (
        <>
            <Slider />

            <div className="container-fluid home-page home-page-container">
                <div className="container home-contained page-contained home-contained-layout">
                    {/* ================== First Section- Popular Categories ========================= */}
                    <section className="row section section-first popular-categories product-carousel">
                        <div className="category category-card category-first category-stereo col-lg-2 col-md-4">
                            <div className="category-img d-flex justify-content-center">
                                <img src={stereo_img} alt="stereo-category-img" />
                            </div>
                            <div className="content d-flex justify-content-center flex-column align-items-center text-center">
                                <h4 className="title">Stereo</h4>
                                <p>7 Products</p>
                            </div>
                        </div>
                        <div className="category category-card category-second category-home-theatre col-lg-2 col-md-4">
                            <div className="category-img d-flex justify-content-center">
                                <img src={home_theatre_img} alt="home_theatre_img" />
                            </div>
                            <div className="content d-flex justify-content-center flex-column align-items-center text-center">
                                <h4 className="title">Home Theatre</h4>
                                <p>10 Products</p>
                            </div>
                        </div>
                        <div className="category category-card category-third category-bluetooth-speakers col-lg-2 col-md-4">
                            <div className="category-img d-flex justify-content-center">
                                <img src={bt_speakers_img} alt="bt_speakers_img" />
                            </div>
                            <div className="content d-flex justify-content-center flex-column align-items-center text-center">
                                <h4 className="title">Bluetooth Speakers</h4>
                                <p>7 Products</p>
                            </div>
                        </div>
                        <div className="category category-card category-fourth category-headphones col-lg-2 col-md-6">
                            <div className="category-img d-flex justify-content-center">
                                <img src={headphones_img} alt="headphones_img" />
                            </div>
                            <div className="content d-flex justify-content-center flex-column align-items-center text-center">
                                <h4 className="title">Headphones</h4>
                                <p>7 Products</p>
                            </div>
                        </div>
                        <div className="category category-card category-fifth category-speakers col-lg-2 col-md-6">
                            <div className="category-img d-flex justify-content-center">
                                <img src={speakers_img} alt="speakers_img" />
                            </div>
                            <div className="content d-flex justify-content-center flex-column align-items-center text-center">
                                <h4 className="title">Speakers</h4>
                                <p>7 Products</p>
                            </div>
                        </div>
                    </section>


                    {/* ================== Second Section - Deals of the Day ========================= */}
                    <section className="row section section-second deal-of-the-day-sec ">
                        <div className="section-header">
                            <div className="col-12 section-title"> Deals of the Day</div>
                            <div className="col-12 section-title-underline"></div>
                        </div>
                        <div className="row sec-content">
                            <div className="col-lg-2 col-md-4 product-card">
                                <div className="category-title">Bluetooth Speakers</div>
                                <div className="product-title">Table Thin EliteBook Revolve</div>
                                <div className="product-img-wrapper d-flex justify-content-center align-items-center">
                                    <img src={speakers_img} alt="" />
                                </div>
                                <div className="product-card-footer">
                                    <div className="product-price">$159</div>
                                    <div className="add-to-cart-icon">
                                        <FaCartPlus />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 product-card">
                                <div className="category-title">Bluetooth Speakers</div>
                                <div className="product-title">Table Thin EliteBook Revolve</div>
                                <div className="product-img-wrapper d-flex justify-content-center align-items-center">
                                    <img src={speakers_img} alt="" />
                                </div>
                                <div className="product-card-footer">
                                    <div className="product-price">$159</div>
                                    <div className="add-to-cart-icon">
                                        <FaCartPlus />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 product-card">
                                <div className="category-title">Bluetooth Speakers</div>
                                <div className="product-title">Table Thin EliteBook Revolve</div>
                                <div className="product-img-wrapper d-flex justify-content-center align-items-center">
                                    <img src={speakers_img} alt="" />
                                </div>
                                <div className="product-card-footer">
                                    <div className="product-price">$159</div>
                                    <div className="add-to-cart-icon">
                                        <FaCartPlus />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 product-card">
                                <div className="category-title">Bluetooth Speakers</div>
                                <div className="product-title">Table Thin EliteBook Revolve</div>
                                <div className="product-img-wrapper d-flex justify-content-center align-items-center">
                                    <img src={speakers_img} alt="" />
                                </div>
                                <div className="product-card-footer">
                                    <div className="product-price">$159</div>
                                    <div className="add-to-cart-icon">
                                        <FaCartPlus />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 product-card">
                                <div className="category-title">Bluetooth Speakers</div>
                                <div className="product-title">Table Thin EliteBook Revolve</div>
                                <div className="product-img-wrapper d-flex justify-content-center align-items-center">
                                    <img src={speakers_img} alt="" />
                                </div>
                                <div className="product-card-footer">
                                    <div className="product-price">$159</div>
                                    <div className="add-to-cart-icon">
                                        <FaCartPlus />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 product-card">
                                <div className="category-title">Bluetooth Speakers</div>
                                <div className="product-title">Table Thin EliteBook Revolve</div>
                                <div className="product-img-wrapper d-flex justify-content-center align-items-center">
                                    <img src={speakers_img} alt="" />
                                </div>
                                <div className="product-card-footer">
                                    <div className="product-price">$159</div>
                                    <div className="add-to-cart-icon">
                                        <FaCartPlus />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* =============== Secion Third - Ads Block One */}
                    <section className="row my-2 section section-third ads-block-sec ads-block-sec-first">
                        <div className="er-ad-block ad-block-wsix ad-block-first">
                            <a href="https://google.com/" className="row d-flex justify-content-center align-items-center">
                                <div className="col-md-6 media-left ad-block-img">
                                    <img src={game_console_img} alt="ad-block-img" />
                                </div>
                                <div className="col-md-6 text-content">
                                    <p><b>#STAYHOME </b> AND <br />CATCH BIG <b>DEALS</b> ON<br /> GAMES AND CONSOLES</p>
                                </div>
                            </a>
                        </div>
                        <div className="er-ad-block ad-block-wthree ad-block-second">
                            <a href="https://google.com/" className="row d-flex justify-content-center align-items-center">
                                <div className="col-md-7 media-left ad-block-img text-content">
                                    <p>OFFICE LAPTOPS FOR WORK</p>
                                </div>
                                <div className="col-md-5 text-content">
                                    <p><b>$799</b></p>
                                </div>
                            </a>
                        </div>
                        <div className="er-ad-block ad-block-wthree ad-block-third">
                            <a href="https://google.com/" className="row d-flex justify-content-center align-items-center">
                                <div className="col-md-6 media-left ad-block-img text-content">
                                    <p><b>LIMITED</b> <br /> WEEK DEAL <br /> HURRY UP</p>
                                </div>
                                <div className="col-md-6 text-content">
                                </div>
                            </a>
                        </div>
                    </section>

                    {/* ================== Second Fourth - New Products ========================= */}
                    <section className="row section section-fourth new-products-sec ">
                        <div className="section-header">
                            <div className="col-12 section-title"> New Arrivals </div>
                            <div className="col-12 section-title-underline"></div>
                        </div>
                        <div className="row sec-content">
                            <div className="col-lg-2 col-md-4 product-card">
                                <div className="category-title">Bluetooth Speakers</div>
                                <div className="product-title">Table Thin EliteBook Revolve</div>
                                <div className="product-img-wrapper d-flex justify-content-center align-items-center">
                                    <img src={speakers_img} alt="" />
                                </div>
                                <div className="product-card-footer">
                                    <div className="product-price">$159</div>
                                    <div className="add-to-cart-icon">
                                        <FaCartPlus />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 product-card">
                                <div className="category-title">Bluetooth Speakers</div>
                                <div className="product-title">Table Thin EliteBook Revolve</div>
                                <div className="product-img-wrapper d-flex justify-content-center align-items-center">
                                    <img src={speakers_img} alt="" />
                                </div>
                                <div className="product-card-footer">
                                    <div className="product-price">$159</div>
                                    <div className="add-to-cart-icon">
                                        <FaCartPlus />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 product-card">
                                <div className="category-title">Bluetooth Speakers</div>
                                <div className="product-title">Table Thin EliteBook Revolve</div>
                                <div className="product-img-wrapper d-flex justify-content-center align-items-center">
                                    <img src={speakers_img} alt="" />
                                </div>
                                <div className="product-card-footer">
                                    <div className="product-price">$159</div>
                                    <div className="add-to-cart-icon">
                                        <FaCartPlus />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 product-card">
                                <div className="category-title">Bluetooth Speakers</div>
                                <div className="product-title">Table Thin EliteBook Revolve</div>
                                <div className="product-img-wrapper d-flex justify-content-center align-items-center">
                                    <img src={speakers_img} alt="" />
                                </div>
                                <div className="product-card-footer">
                                    <div className="product-price">$159</div>
                                    <div className="add-to-cart-icon">
                                        <FaCartPlus />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 product-card">
                                <div className="category-title">Bluetooth Speakers</div>
                                <div className="product-title">Table Thin EliteBook Revolve</div>
                                <div className="product-img-wrapper d-flex justify-content-center align-items-center">
                                    <img src={speakers_img} alt="" />
                                </div>
                                <div className="product-card-footer">
                                    <div className="product-price">$159</div>
                                    <div className="add-to-cart-icon">
                                        <FaCartPlus />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 product-card">
                                <div className="category-title">Bluetooth Speakers</div>
                                <div className="product-title">Table Thin EliteBook Revolve</div>
                                <div className="product-img-wrapper d-flex justify-content-center align-items-center">
                                    <img src={speakers_img} alt="" />
                                </div>
                                <div className="product-card-footer">
                                    <div className="product-price">$159</div>
                                    <div className="add-to-cart-icon">
                                        <FaCartPlus />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* ================== Fifth Section - Recommended Products ========================= */}
                    <section className="row section section-fith recommended-products-sec ">
                        <div className="section-header">
                            <div className="col-12 section-title"> Recommended Products</div>
                            <div className="col-12 section-title-underline"></div>
                        </div>
                        <div className="row sec-content">
                            <div className="col-lg-2 col-md-4 product-card">
                                <div className="category-title">Bluetooth Speakers</div>
                                <div className="product-title">Table Thin EliteBook Revolve</div>
                                <div className="product-img-wrapper d-flex justify-content-center align-items-center">
                                    <img src={speakers_img} alt="" />
                                </div>
                                <div className="product-card-footer">
                                    <div className="product-price">$159</div>
                                    <div className="add-to-cart-icon">
                                        <FaCartPlus />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 product-card">
                                <div className="category-title">Bluetooth Speakers</div>
                                <div className="product-title">Table Thin EliteBook Revolve</div>
                                <div className="product-img-wrapper d-flex justify-content-center align-items-center">
                                    <img src={speakers_img} alt="" />
                                </div>
                                <div className="product-card-footer">
                                    <div className="product-price">$159</div>
                                    <div className="add-to-cart-icon">
                                        <FaCartPlus />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 product-card">
                                <div className="category-title">Bluetooth Speakers</div>
                                <div className="product-title">Table Thin EliteBook Revolve</div>
                                <div className="product-img-wrapper d-flex justify-content-center align-items-center">
                                    <img src={speakers_img} alt="" />
                                </div>
                                <div className="product-card-footer">
                                    <div className="product-price">$159</div>
                                    <div className="add-to-cart-icon">
                                        <FaCartPlus />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 product-card">
                                <div className="category-title">Bluetooth Speakers</div>
                                <div className="product-title">Table Thin EliteBook Revolve</div>
                                <div className="product-img-wrapper d-flex justify-content-center align-items-center">
                                    <img src={speakers_img} alt="" />
                                </div>
                                <div className="product-card-footer">
                                    <div className="product-price">$159</div>
                                    <div className="add-to-cart-icon">
                                        <FaCartPlus />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 product-card">
                                <div className="category-title">Bluetooth Speakers</div>
                                <div className="product-title">Table Thin EliteBook Revolve</div>
                                <div className="product-img-wrapper d-flex justify-content-center align-items-center">
                                    <img src={speakers_img} alt="" />
                                </div>
                                <div className="product-card-footer">
                                    <div className="product-price">$159</div>
                                    <div className="add-to-cart-icon">
                                        <FaCartPlus />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 product-card">
                                <div className="category-title">Bluetooth Speakers</div>
                                <div className="product-title">Table Thin EliteBook Revolve</div>
                                <div className="product-img-wrapper d-flex justify-content-center align-items-center">
                                    <img src={speakers_img} alt="" />
                                </div>
                                <div className="product-card-footer">
                                    <div className="product-price">$159</div>
                                    <div className="add-to-cart-icon">
                                        <FaCartPlus />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* ================== Sixth Section - Recommended Products ========================= */}
                    <section className="row section section-sixth brand-blocks top-brands">
                        <div className="section-header">
                            <div className="col-12 section-title"> Top Brands</div>
                            <div className="col-12 section-title-underline"></div>
                        </div>
                        <div className="col-lg-4 col-md-6 brand-block-wrapper">
                            <div className="brand-block brand-block-first brand-falcon position-relative">
                                <div className="brand-header">
                                    <div className="brand-img brand-logo">
                                        <img src={falcon_logo} alt="falcon-brand-img" />
                                    </div>
                                </div>
                                <div className="brand-desc">
                                    <p>Brings you the best in music, plus all things culture, style, and sports</p>
                                </div>
                                <div className="brand-block-img">
                                    <img src={falcon_block_img} alt="brand-footer-img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 brand-block-wrapper">
                            <div className="brand-block brand-block-first brand-falcon position-relative">
                                <div className="brand-header">
                                    <div className="brand-img brand-logo">
                                        <img src={your_logo} alt="falcon-brand-img" />
                                    </div>
                                </div>
                                <div className="brand-desc">
                                    <p>Brings you the best in music, plus all things culture, style, and sports</p>
                                </div>
                                <div className="brand-block-img">
                                    <img src={your_block_img} alt="brand-footer-img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 brand-block-wrapper">
                            <div className="brand-block brand-block-first brand-falcon position-relative">
                                <div className="brand-header">
                                    <div className="brand-img brand-logo">
                                        <img src={pathway_logo} alt="falcon-brand-img" />
                                    </div>
                                </div>
                                <div className="brand-desc">
                                    <p>Brings you the best in music, plus all things culture, style, and sports</p>
                                </div>
                                <div className="brand-block-img">
                                    <img src={pathway_block_img} alt="brand-footer-img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 brand-block-wrapper">
                            <div className="brand-block brand-block-first brand-falcon position-relative">
                                <div className="brand-header">
                                    <div className="brand-img brand-logo">
                                        <img src={atmosphere_logo} alt="falcon-brand-img" />
                                    </div>
                                </div>
                                <div className="brand-desc">
                                    <p>Brings you the best in music, plus all things culture, style, and sports</p>
                                </div>
                                <div className="brand-block-img">
                                    <img src={atmosphere_block_img} alt="brand-footer-img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 brand-block-wrapper">
                            <div className="brand-block brand-block-first brand-falcon position-relative">
                                <div className="brand-header">
                                    <div className="brand-img brand-logo">
                                        <img src={sportex_logo} alt="falcon-brand-img" />
                                    </div>
                                </div>
                                <div className="brand-desc">
                                    <p>Brings you the best in music, plus all things culture, style, and sports</p>
                                </div>
                                <div className="brand-block-img">
                                    <img src={sportex_block_img} alt="brand-footer-img" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default slider
