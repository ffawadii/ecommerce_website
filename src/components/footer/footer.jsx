import React from 'react'
import { FaTelegramPlane, FaWhatsapp, FaFacebook, FaPinterest, FaInstagram, FaYoutube } from "react-icons/fa"
import { BiSupport } from "react-icons/bi"
import "./footer.css"

//Images
import Discover_payment_img from "../../assets/images/patment-icon1.png"

export default () => {
    return (
        <footer>
            <div className="container-fluid newsletter-sec">
                <div className="container h-100 newsletter">
                    <div className="row justify-content-center align-items-center h-100 newsletter-content">
                        <div className="col-md-4 sign-up-title">
                            <FaTelegramPlane />
                            <div className="desc">
                                <p className="m-0">Sign up to Newsletter</p>
                            </div>
                        </div>
                        <div className="col-md-4 coupan">
                            <p className="m-0">...and receive $20 coupon for first shopping</p>
                        </div>
                        <div className="col-md-4 email-sign-up">
                            <form>
                                <input type="email" class="form-control" className="w-75" id="exampleInputEmail1" placeholder="Enter your email address" />
                                <button type="submit" className="w-25">SignUp</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid footer-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-first col-logo-contact">
                            <div className="logo-container">
                                <h1>LOGO</h1>
                            </div>
                            <div className="call-us d-flex justify-content-start align-items-center">
                                <BiSupport />
                                <div className="text-content">
                                    <div className="title">
                                        <h4>Got Questions? Call us 24/7</h4>
                                    </div>
                                    <div className="phone-no">
                                        <p>(800) 8001-8588</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-info">
                                <h4>Contact Info</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, delectus?</p>
                            </div>
                            <div className="row social-icons gx-3">
                                <FaWhatsapp />
                                <FaFacebook />
                                <FaPinterest />
                                <FaInstagram />
                                <FaYoutube />
                            </div>
                        </div>
                        <div className="col-md-2 col-second col-popular-categories">
                            <div className="col-title">
                                <h2>Popular Categories</h2>
                            </div>
                            <div className="col-content">
                                <ul className="p-0">
                                    <li><a href="#">Laptops</a></li>
                                    <li><a href="#">Desktops</a></li>
                                    <li><a href="#">Speakers</a></li>
                                    <li><a href="#">BT Speakers</a></li>
                                    <li><a href="#">TV & Audio</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-third col-quick-links">
                            <div className="col-title">
                                <h2>Quick Links</h2>
                            </div>
                            <div className="col-content">
                                <ul className="p-0">
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Shipping Policy</a></li>
                                    <li><a href="#">Cookie Policy</a></li>
                                    <li><a href="#">About Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-fourth col-customer-care">
                            <div className="col-title">
                                <h2>Customer Care</h2>
                            </div>
                            <div className="col-content">
                                <ul className="p-0">
                                    <li><a href="#">My Account</a></li>
                                    <li><a href="#">Track Order</a></li>
                                    <li><a href="#">Customer Service</a></li>
                                    <li><a href="#">Return/Exchange</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Product Support</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid copyright-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 copyright-text">
                            <h4><b>© Everonics</b> All Rights Reserved</h4>
                        </div>
                        <div className="col-md-6 safe-payments payment-images">
                            <img src={Discover_payment_img} alt="Discover_payment_img" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}