import React, {Component} from 'react'
import './Blog.css'
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

class Blog extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="featured-blog">
                        <p className="featured-text">
                            Featured Blogs
                        </p>
                        <div className="col-lg-12" id="full-articles">
                            <Link to="/thai-curry">
                                <div className="col-lg-6" id="left-article">
                                    <img src={require('../../assets/adddff7ce549c0483b66b1809d1a1162.png')}
                                         alt="s"/>
                                    <div className="text-top-left">
                                        <p className="text-top-left-p">TRENDING</p>
                                    </div>
                                    <div className="text-centered">
                                        <p className="text-centered-p">
                                            A guide to Thai<br/>Curry
                                        </p>
                                    </div>
                                    <div className="text-bottom-left">
                                        <p className="text-bottom-left-p">
                                            <img src={require('../../assets/baf975398b74732b52898a2562dfa9a6.png')}
                                                 alt="s"/>
                                        </p>
                                        <p className="text-bottom-left-p-name">
                                            Andrew Jonson
                                        </p>
                                        <p className="text-bottom-left-p-date">
                                            27th January 2021
                                        </p>
                                    </div>
                                </div>
                            </Link>


                            <div className="col-lg-6" id="right-articles">
                                <div className="col-lg-12" id="right-articles-post-1">
                                    <Link to="/thai-curry">
                                        <div className="col-lg-4" id="right-articles-post-1-left">
                                            <img src={require('../../assets/88a4fca571c7657d9e06f87a7b3d9722.png')}
                                                 alt="s"/>
                                        </div>
                                        <div className="col-lg-8" id="right-articles-post-1-right">
                                            <h4 className="right-articles-post-1-right-h4">
                                                You can move the text by dragging and dropping the text
                                            </h4>
                                            <p className="right-articles-post-1-right-description">
                                                Writing UX copies can be a little frustrating and confusing, and
                                                sometimes
                                            </p>
                                        </div>
                                    </Link>
                                </div>


                                <div className="col-lg-12" id="right-articles-post-2">
                                    <Link to="/thai-curry">
                                        <div className="col-lg-4" id="right-articles-post-1-left">
                                            <img src={require('../../assets/23f46e60e57dfdfed3c0bbb4543555ac.png')}
                                                 alt="s"/>
                                        </div>
                                        <div className="col-lg-8" id="right-articles-post-1-right">
                                            <h4 className="right-articles-post-1-right-h4">
                                                Edit this text to make it your own. To edit, simply
                                            </h4>
                                            <p className="right-articles-post-1-right-description">
                                                Writing UX copies can be a little frustrating and confusing, and
                                                sometimes
                                            </p>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-lg-12" id="right-articles-post-3">
                                    <Link to="/thai-curry">
                                        <div className="col-lg-4" id="right-articles-post-1-left">
                                            <img src={require('../../assets/82d96ed07e95ebe4223b3f59f7b15424.png')}
                                                 alt="s"/>
                                        </div>
                                        <div className="col-lg-8" id="right-articles-post-1-right">
                                            <h4 className="right-articles-post-1-right-h4">
                                                You can move the text by dragging and dropping the text
                                            </h4>
                                            <p className="right-articles-post-1-right-description">
                                                Writing UX copies can be a little frustrating and confusing, and
                                                sometimes
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="all-articles-block">
                        <p className="articles-block-text">
                            All Articles
                        </p>

                        <div className="col-lg-12" id="all-aricles-first-col">
                            <div className="col-lg-6" id="left-articles-first-col">
                                <Link to="/thai-curry">
                                    <div className="col-lg-5" id="articles-img">
                                        <img src={require('../../assets/a6376be50eb806a6bce3973207fd2a92.png')}
                                             alt="s"/>
                                    </div>
                                    <div className="col-lg-7" id="articles-text">
                                        <div className="col-lg-2" id="author-img">
                                            <img src={require('../../assets/baf975398b74732b52898a2562dfa9a6.png')}
                                                 alt="s"/>
                                        </div>
                                        <div className="col-lg-10" id="author-name-date">
                                            <div className="author-name">
                                                <p>Andrew Jonson</p>
                                            </div>
                                            <div className="author-date">
                                                27th January 2022
                                            </div>
                                        </div>
                                        <h4 className="h4-text-center">
                                            A guide to Thai Curry
                                        </h4>
                                        <p className="read-more-post">
                                            Read More
                                        </p>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-6" id="right-articles-first-col">
                                <Link to="/thai-curry">
                                    <div className="col-lg-5" id="articles-img">
                                        <img src={require('../../assets/230723d222406d85b11dccaca4607de7.png')}
                                             alt="s"/>
                                    </div>
                                    <div className="col-lg-7" id="articles-text">
                                        <div className="col-lg-2" id="author-img">
                                            <img src={require('../../assets/baf975398b74732b52898a2562dfa9a6.png')}
                                                 alt="s"/>
                                        </div>
                                        <div className="col-lg-10" id="author-name-date">
                                            <div className="author-name">
                                                <p>Andrew Jonson</p>
                                            </div>
                                            <div className="author-date">
                                                27th January 2022
                                            </div>
                                        </div>
                                        <h4 className="h4-text-center">
                                            The best guacamole recipe with only 4 ingredients
                                        </h4>
                                        <p className="read-more-post">
                                            Read More
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-12" id="all-aricles-second-col">
                            <Link to="/thai-curry">
                                <div className="col-lg-6" id="left-articles-first-col">
                                    <div className="col-lg-5" id="articles-img">
                                        <img src={require('../../assets/f1976049dbbcc3f9dff644e157e99b1d.png')}
                                             alt="s"/>
                                    </div>
                                    <div className="col-lg-7" id="articles-text">
                                        <div className="col-lg-2" id="author-img">
                                            <img src={require('../../assets/baf975398b74732b52898a2562dfa9a6.png')}
                                                 alt="s"/>
                                        </div>
                                        <div className="col-lg-10" id="author-name-date">
                                            <div className="author-name">
                                                <p>Andrew Jonson</p>
                                            </div>
                                            <div className="author-date">
                                                27th January 2022
                                            </div>
                                        </div>
                                        <h4 className="h4-text-center">
                                            How to store Tomatoes (and Whether to Refrigerate Them)
                                        </h4>
                                        <p className="read-more-post">
                                            Read More
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6" id="right-articles-first-col">
                                    <div className="col-lg-5" id="articles-img">
                                        <img src={require('../../assets/98255cbdb5767bc4c648766949a96536.png')}
                                             alt="s"/>
                                    </div>
                                    <div className="col-lg-7" id="articles-text">
                                        <div className="col-lg-2" id="author-img">
                                            <img src={require('../../assets/baf975398b74732b52898a2562dfa9a6.png')}
                                                 alt="s"/>
                                        </div>
                                        <div className="col-lg-10" id="author-name-date">
                                            <div className="author-name">
                                                <p>Andrew Jonson</p>
                                            </div>
                                            <div className="author-date">
                                                27th January 2022
                                            </div>
                                        </div>
                                        <h4 className="h4-text-center">
                                            The Absolute Best Way to Cook French Fries
                                        </h4>
                                        <p className="read-more-post">
                                            Read More
                                        </p>
                                    </div>
                                </div>
                            </Link>
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
                                        <img src={require('../../assets/72f23b0c81b3602ac6897a6f7507626c.png')}
                                             alt="s"/>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Blog;