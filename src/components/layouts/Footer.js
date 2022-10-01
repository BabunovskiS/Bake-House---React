import React from 'react'
import {SiFacebook} from "react-icons/si";
import {SiTwitter} from "react-icons/si";
import {SiInstagram} from "react-icons/si";
import {SiLinkedin} from "react-icons/si";
import './Footer.css'


function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="full-footer">
                        <a className="logo-footer" href="/">
                            <img src={require('../../assets/logo-footer.png')} alt="s" />
                        </a>
                        <div className="category-footer">
                            <ul className="footer-links-category">
                                <li className="nav-item">
                                    <a className="nav-link  text-white active" aria-current="page" href="/">Home</a>
                                </li>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/menu">Menu</a>
                                </li>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/aboutUs">About us</a>
                                </li>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="our-story">Our Story</a>
                                </li>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/blog">Blog</a>
                                </li>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="hr-footer"></hr>
            <div className="container">
                <div className="col-lg-12" id="footer-end">
                    <div className="col-lg-4" id="footer-1">
                        © 2022 Bake House | All rights reserved.
                    </div>
                    <div className="col-lg-4" id="footer-2">
                        <SiFacebook>&nbsp</SiFacebook>&nbsp;&nbsp;&nbsp;
                        <SiTwitter></SiTwitter>&nbsp;&nbsp;&nbsp;
                        <SiInstagram></SiInstagram>&nbsp;&nbsp;&nbsp;
                        <SiLinkedin></SiLinkedin>&nbsp;&nbsp;&nbsp;




                    </div>
                    <div className="col-lg-4" id="footer-3">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;

