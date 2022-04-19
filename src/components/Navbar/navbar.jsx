import React from 'react';

import "./navbar.css"
import { AiOutlineUser } from "react-icons/ai"
import { MdOutlineShoppingCart } from "react-icons/md"

//Images
import { ReactComponent as EveronicsLogo } from "../../assets/images/Everonics_logo.svg";

export default () => {
    return (
        <nav className="container-fluid navbar main-navbar">
            <div className="container">
                <div className="row w-100 justify-content-between">
                    <div className="col-md-3 logo-col">
                        <div className="logo">
                            <EveronicsLogo />
                        </div>
                    </div>
                    <div className="col-md-7 menu-col">
                        <div className="menu main-nav-menu desktop-nav-menu">
                            <ul className="navlinks-container">
                                <li className="nav-item"><a href="https://google.com">Home</a></li>
                                <li className="nav-item"><a href="https://google.com">Category</a></li>
                                <li className="nav-item"><a href="https://google.com">Category</a></li>
                                <li className="nav-item"><a href="https://google.com">Category</a></li>
                                <li className="nav-item"><a href="https://google.com">Category</a></li>
                                <li className="nav-item"><a href="https://google.com">Category</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex align-items-center justify-content-end">
                        <div className="user-col cart-account-col">
                            <span className="icon user-icon">
                                <AiOutlineUser />
                            </span>
                            <span className="icon cart-icon">
                                <MdOutlineShoppingCart />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}