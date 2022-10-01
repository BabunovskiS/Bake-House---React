import React, {Component} from 'react'
import './Home.css'
import {MdCoffeeMaker} from 'react-icons/md'
import {FaBirthdayCake} from 'react-icons/fa';
import {BiCoffeeTogo} from 'react-icons/bi';
import {MdFastfood} from 'react-icons/md';
import {FaCocktail} from 'react-icons/fa';
import {TbMeat} from 'react-icons/tb';
import {MdOutlineFoodBank} from 'react-icons/md';
import {Link} from "react-router-dom";


class Home extends Component {
    render() {
        return (
            <section className="homePage">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" id="left-header">
                            <div className="text-left-header">
                                <h1 className="h1-header">
                                    We serve high quality foods of all kinds.
                                </h1>
                                <p className="p-header">
                                    Edit this text to make it your own. To edit, simply click directly on the text
                                    to
                                    start
                                    adding your own words. You can move the text.
                                </p>
                                <Link to="/menu">
                                    <div className="button-header">
                                        <button className="viewmenu">View Menu</button>
                                    </div>
                                </Link>
                                <div className="text-after-button">
                                    <p className="text-white">
                                        Opening Times
                                    </p>
                                    <p className="text-gray">
                                        Sunday to Saturday l 09:00 AM to 11:00 PM
                                    </p>
                                    <p className="text-white">
                                        Location
                                    </p>
                                    <p className="text-gray">
                                        Master canteen, BBSR , Odisha 752054
                                    </p>
                                    <p className="text-white">
                                        Call us
                                    </p>
                                    <p className="text-gray">
                                        +9776462441
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-6" id="right-header">
                            <div className="right-header-img">
                                <img src={require('../../assets/bf5dfaa8f0128f8deb9e745b2548d2dc.png')} alt="s"/>
                            </div>
                        </div>


                        <div className='full-more-about-us'>
                            <div className="col-lg-12" id="full-about">
                                <p className="y-text">
                                    KNOW MORE ABOUT US
                                </p>
                                <div className="col-lg-6" id="left-more-about-us">
                                    <h2 className="h2-text-2">
                                        We source sustainable & line caught Foods
                                    </h2>
                                    <p className="p-text-2">
                                        Edit this text to make it your own. To edit, simply click directly on the text
                                        to start adding your own words. You can move the text by dragging and dropping
                                        the text anywhere on the page.
                                    </p>
                                    <div className="col-lg-12" id="full-dd">
                                        <div className="col-lg-4" id="dd-1">
                                            <p className="full-p">
                                                <p className="icon-p">
                                                    <MdCoffeeMaker/>
                                                </p>
                                                <p className="text-p">
                                                    10+ People
                                                </p>
                                                <p className="more-text-p">
                                                    We are Small Team
                                                    <p></p>
                                                    Through True Rich Attended does no end it his mother since
                                                    favourable.
                                                </p>
                                            </p>
                                        </div>
                                        <div className="col-lg-4" id="dd-2">
                                            <p className="full-p">
                                                <p className="icon-p">
                                                    <MdCoffeeMaker/>
                                                </p>
                                                <p className="text-p">
                                                    2014
                                                </p>
                                                <p className="more-text-p">
                                                    We are From
                                                    <p></p>
                                                    Through True Rich Attended does no end it his mother since
                                                    favourable.
                                                </p>
                                            </p>
                                        </div>
                                        <div className="col-lg-4" id="dd-3">
                                            <p className="full-p">
                                                <p className="icon-p">
                                                    <MdCoffeeMaker/>
                                                </p>
                                                <p className="text-p">
                                                    200k
                                                </p>
                                                <p className="more-text-p">
                                                    We Served
                                                    <p></p>
                                                    Through True Rich Attended does no end it his mother since
                                                    favourable.
                                                </p>
                                            </p>
                                        </div>
                                    </div>
                                    <Link to="/menu">
                                        <div className="button-header">
                                            <button className="viewmenu">View Menu</button>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-lg-6" id="right-more-about-us">
                                    <div className="col-lg-6" id="right-more-about-us-img-left">
                                        <div className="img-right-1">
                                            <img src={require('../../assets/b1e57d2269f831349e8fe2a76aebb611.png')}
                                                 alt="s"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6" id="right-more-about-us-img-right">
                                        <div className="img-right-2">
                                            <img src={require('../../assets/10d44c3c211eb14688b93daa76aea3fb.png')}
                                                 alt="s"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="we-are-serving">
                            <div className="col-lg-12" id="full-serving">
                                <p className="y-text">
                                    WHAT WE ARE SERVING
                                </p>
                                <div className="col-lg-6" id="left-serving-text">
                                    <h2 className="serving-h2">
                                        We all have to eat, so why not do it beautifully?
                                    </h2>
                                </div>
                                <div className="col-lg-6" id="right-serving-text">
                                    <p className="serving-p">
                                        Through True Rich Attended does no end it his mother since favourable real had
                                        half every him case in packages enquire we up ecstatic.. Through True Rich
                                        Attended does no end it his mother
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-12" id="all-products">
                                <div className="col-lg-12" id="first-col-line">
                                    <div className="col-lg-4" id="col-line-full-desc">
                                        <div className="col-1-all">
                                            <div className="full-circle">
                                                <div className="circle">
                                                    <p className="icon-product"><FaBirthdayCake/></p>
                                                </div>
                                            </div>
                                            <h3 className="h3-after-logo">
                                                Quafe Cake
                                            </h3>
                                            <p className="p-after-h3">
                                                Through True Rich Attended no end it his mother since favourable real
                                                had half every him.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4" id="col-line-full-desc">
                                        <div className="col-1-all">
                                            <div className="full-circle">
                                                <div className="circle">
                                                    <p className="icon-product"><BiCoffeeTogo/></p>
                                                </div>
                                            </div>
                                            <h3 className="h3-after-logo">
                                                Cofee
                                            </h3>
                                            <p className="p-after-h3">
                                                Through True Rich Attended no end it his mother since favourable real
                                                had half every him.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4" id="col-line-full-desc-3">
                                        <div className="col-1-all">
                                            <div className="full-circle">
                                                <div className="circle">
                                                    <p className="icon-product"><MdFastfood/></p>
                                                </div>
                                            </div>
                                            <h3 className="h3-after-logo">
                                                Fast Food
                                            </h3>
                                            <p className="p-after-h3">
                                                Through True Rich Attended no end it his mother since favourable real
                                                had half every him.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12" id="second-col-line">
                                    <div className="col-lg-4" id="col-line-full-desc">
                                        <div className="col-1-all">
                                            <div className="full-circle">
                                            <div className="circle">
                                                <p className="icon-product"><FaCocktail/></p>
                                            </div>
                                            </div>
                                            <h3 className="h3-after-logo">
                                                Cocktails
                                            </h3>
                                            <p className="p-after-h3">
                                                Through True Rich Attended no end it his mother since favourable real
                                                had half every him.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4" id="col-line-full-desc">
                                        <div className="col-1-all">
                                            <div className="full-circle">
                                            <div className="circle">
                                                <p className="icon-product"><TbMeat/></p>
                                            </div>
                                            </div>
                                            <h3 className="h3-after-logo">
                                                Grill
                                            </h3>
                                            <p className="p-after-h3">
                                                Through True Rich Attended no end it his mother since favourable real
                                                had half every him.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4" id="col-line-full-desc-3">
                                        <div className="col-1-all">
                                            <div className="full-circle">
                                            <div className="circle">
                                                <p className="icon-product"><MdOutlineFoodBank/></p>
                                            </div>
                                            </div>
                                            <h3 className="h3-after-logo">
                                                Snacks
                                            </h3>
                                            <p className="p-after-h3">
                                                Through True Rich Attended no end it his mother since favourable real
                                                had half every him.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="our-meny-chart">
                            <div className="col-lg-12" id="full-menu">
                                <p className="y-text">
                                    OUR MENU
                                </p>
                                <div className="col-lg-6" id="left-menu-text">
                                    <h2 className="serving-h2">
                                        Discover our menu chart
                                    </h2>
                                    <br/>
                                </div>
                                <div className="col-lg-6" id="right-menu-text">
                                    <p className="serving-p">
                                        Through True Rich Attended does no end it his mother since favourable real had
                                        half every him case in packages enquire we up ecstatic.. Through True Rich
                                        Attended does no end it his mother
                                    </p>
                                </div>
                            </div>
                            <p className="most-popular-picks">
                                Most Popular Picks
                            </p>

                            <div className="row gy-5" id="products">
                                <div className="col-4" id="products-line">
                                    <div className="product-card">
                                        <div className="img-product-card">
                                            <img src={require('../../assets/9b49341b5513dab05bf409491dd24a2f.png')}
                                                 alt="s"/>
                                        </div>
                                        <div className="description-product-card">
                                            <p className="product-name">
                                                Choco Cup Cake
                                            </p>
                                            <p className="product-price">
                                                $8.85
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-4" id="products-line">
                                    <div className="product-card">
                                        <div className="img-product-card">
                                            <img src={require('../../assets/505b23f33c90a388da626c9b75752b80.png')}
                                                 alt="s"/>
                                        </div>
                                        <div className="description-product-card">
                                            <p className="product-name">
                                                Choco Cup Cake
                                            </p>
                                            <p className="product-price">
                                                $4.85
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4" id="products-line">
                                    <div className="product-card">
                                        <div className="img-product-card">
                                            <img src={require('../../assets/514d6299801380528da7da2ae696b94c.png')}
                                                 alt="s"/>
                                        </div>
                                        <div className="description-product-card">
                                            <p className="product-name">
                                                Chicken Burger
                                            </p>
                                            <p className="product-price">
                                                $8.85
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4" id="products-line">
                                    <div className="product-card">
                                        <div className="img-product-card">
                                            <img src={require('../../assets/7f86a9dc03457102f093f1ef2ba73627.png')}
                                                 alt="s"/>
                                        </div>
                                        <div className="description-product-card">
                                            <p className="product-name">
                                                French Fries
                                            </p>
                                            <p className="product-price">
                                                $7.85
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4" id="products-line">
                                    <div className="product-card">
                                        <div className="img-product-card">
                                            <img src={require('../../assets/fb819060027b2df3bf2c0cf4cb3a12cb.png')}
                                                 alt="s"/>
                                        </div>
                                        <div className="description-product-card">
                                            <p className="product-name">
                                                Sandwitch
                                            </p>
                                            <p className="product-price">
                                                $3.97
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4" id="products-line">
                                    <div className="product-card">
                                        <div className="img-product-card">
                                            <img src={require('../../assets/c38808ca00d1a1889ea602c4c9eb2bb7.png')}
                                                 alt="s"/>
                                        </div>
                                        <div className="description-product-card">
                                            <p className="product-name">
                                                Chinese Soup
                                            </p>
                                            <p className="product-price">
                                                $8.85
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link to="/menu">
                                <div className="button-view-menu">
                                    <button className="viewmenu">View Menu</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="text-and-video">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12" id="full-text-and-videos">
                                <div className="col-lg-5" id="left-text-and-videos">
                                    <div className="text-left">
                                        <p className="text-left-full">
                                            “<br/>
                                            Edit this text to make it your own. To edit, simply click directly on the
                                            text
                                            to start adding your own words. You can move the text by dragging and
                                            dropping
                                            the text
                                        </p>
                                        <div className="name-s-l-p">
                                            <div className="col-lg-12">
                                                <div className="col-lg-6" id="left-box-name">
                                                    <p className="name-only">
                                                        Joheny Andro
                                                        <p className="name-l">
                                                            Bhubaneswar, Odisha
                                                        </p>
                                                    </p>
                                                </div>
                                                <div className="col-lg-6" id="right-box-img">
                                                    <div className="name-i">
                                                        <img
                                                            src={require('../../assets/6032116652b60f5fe4639ac4274bee65.png')}
                                                            alt="s"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7" id="right-videos-and-test">
                                    <div className="video-right">
                                        <iframe
                                            src="https://www.youtube.com/embed/9SjCEOWd3PU" title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen>
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="read-out-lastest-blog">
                    <div className="container">
                        <div className="row">
                            <div className="lastest-blog">
                                <h2 className="lastest-blog-h2">
                                    <h2>Read Our Lastest Blog</h2>
                                </h2>
                            </div>
                        </div>
                        <div className="blog-post">
                            <div className="row gy-5" id="all-post-blog">
                                <div className="col-4" id="post-blog">
                                    <div className="blog-post">
                                        <div className="description-blog-post">
                                            <p className="date-blog-post">
                                                21 Jun 2021
                                            </p>
                                            <h3 className="heading-blog-post">
                                                Extra Thick Homemad Pizza Sauce
                                            </h3>
                                            <p className="description-post">
                                                It is a long established fact that a reader will be distracted by the
                                                readable content of a page.
                                            </p>
                                        </div>
                                        <div className="img-blog-post">
                                            <img
                                                src={require('../../assets/d823f18c810b8777910e998913ef9124.png')}
                                                alt="s"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-4" id="post-blog">
                                    <div className="blog-post">
                                        <div className="description-blog-post">
                                            <p className="date-blog-post">
                                                21 Jun 2021
                                            </p>
                                            <h3 className="heading-blog-post">
                                                The Best Way to Store Fresh Herbs
                                            </h3>
                                            <p className="description-post">
                                                It is a long established fact that a reader will be distracted by the
                                                readable content of a page.
                                            </p>
                                        </div>
                                        <div className="img-blog-post">
                                            <img
                                                src={require('../../assets/764bd86e671c1c4b0e02b6de6ce18097.png')}
                                                alt="s"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4" id="post-blog">
                                    <div className="blog-post">
                                        <div className="description-blog-post">
                                            <p className="date-blog-post">
                                                21 Jun 2021
                                            </p>
                                            <h3 className="heading-blog-post">
                                                5 ways to prepare porridge
                                            </h3>
                                            <p className="description-post">
                                                It is a long established fact that a reader will be distracted by the
                                                readable content of a page.
                                            </p>
                                        </div>
                                        <div className="img-blog-post">
                                            <img
                                                src={require('../../assets/41bc1560368ffb6466b80716c76f6f03.png')}
                                                alt="s"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12" id="full-map-block">
                                <div className="col-lg-3" id="left-map-block">
                                    <h4 className="h3-map-block-1">
                                        Working Hour
                                    </h4>
                                    <p className="p-map-block-1">
                                        Sunday to Saturday<br/>
                                        09:00 AM to 11:00 PM
                                    </p>
                                    <h4 className="h3-map-block-2">
                                        Location
                                    </h4>
                                    <p className="p-map-block-2">
                                        Street - 127, New York, <br/>
                                        United States<br/>
                                        546544
                                    </p>
                                    <h4 className="h3-map-block-3">
                                        Working Hour
                                    </h4>
                                    <p className="p-map-block-3">
                                        +123456789<br/>
                                        hey@yourdomain.com
                                    </p>

                                </div>
                                <div className="col-lg-9" id="right-map-block">
                                    <img src={require('../../assets/72f23b0c81b3602ac6897a6f7507626c.png')} alt="s"/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;