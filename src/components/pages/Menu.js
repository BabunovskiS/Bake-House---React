import React, {Component} from 'react'
import './Menu.css'
import {Tab, Tabs} from "react-bootstrap";


function Sonnet() {
    return null;
}

class Menu extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" id="header-about">
                        <p className="text-our-menu">
                            OUR MENU
                        </p>
                        <div className="col-lg-6" id="left-heading-about">
                            <h2 className="left-heading-h2">
                                Discover<br/>
                                Our menu Chart
                            </h2>
                        </div>
                        <div className="col-lg-6" id="right-heading-about">
                            <p className="right-heading-text">
                                Through True Rich Attended does no end it his mother since favourable real had half
                                every him case in packages enquire we up ecstatic.. Through True Rich Attended does no
                                end it his mother
                            </p>
                        </div>
                    </div>

                    <div className="nav-menu">
                        <Tabs
                            defaultActiveKey="all"
                            id="uncontrolled-tab-example"
                            className="mb-3">
                            <Tab eventKey="all" title="All" id="All">
                                <div className="row gy-5" id="full-pc">
                                    <div className="col-4" id="product-center">
                                        <div className="product-card">
                                            <div className="img-product-card">
                                                <img src={require('../../assets/9b49341b5513dab05bf409491dd24a2f.png')}
                                                     alt="s"/>
                                            </div>
                                            <div className="description-product-card">
                                                <p className="product-name">
                                                    Drp Cofee
                                                </p>
                                                <p className="product-price">
                                                    $8.85
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-4" id="product-center">
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
                                    <div className="col-4" id="product-center">
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
                                    <div className="col-4" id="product-center">
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
                                    <div className="col-4" id="product-center">
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
                                    <div className="col-4" id="product-center">
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
                                <p/>
                                <p/>
                                <p/>
                                <br/>
                                <div className="row gy-5" id="full-pc">
                                    <div className="col-4" id="product-center">
                                        <div className="product-card">
                                            <div className="img-product-card">
                                                <img src={require('../../assets/271fd675680271f889030b034ba9c65f.png')}
                                                     alt="s"/>
                                            </div>
                                            <div className="description-product-card">
                                                <p className="product-name">
                                                    Quafe Brade
                                                </p>
                                                <p className="product-price">
                                                    $7.85
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-4" id="product-center">
                                        <div className="product-card">
                                            <div className="img-product-card">
                                                <img src={require('../../assets/347afb3d860851eeecc9613887b72853.png')}
                                                     alt="s"/>
                                            </div>
                                            <div className="description-product-card">
                                                <p className="product-name">
                                                    Dalgona Cofee
                                                </p>
                                                <p className="product-price">
                                                    $4.97
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4" id="product-center">
                                        <div className="product-card">
                                            <div className="img-product-card">
                                                <img src={require('../../assets/6a07694e0dace2d2e3f2b52e07bc30f2.png')}
                                                     alt="s"/>
                                            </div>
                                            <div className="description-product-card">
                                                <p className="product-name">
                                                    Chowmin Noodle
                                                </p>
                                                <p className="product-price">
                                                    $8.85
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4" id="product-center">
                                        <div className="product-card">
                                            <div className="img-product-card">
                                                <img src={require('../../assets/9e7814bdfdae2c21255f90651d96a8f9.png')}
                                                     alt="s"/>
                                            </div>
                                            <div className="description-product-card">
                                                <p className="product-name">
                                                    Coka Cola
                                                </p>
                                                <p className="product-price">
                                                    $7.85
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4" id="product-center">
                                        <div className="product-card">
                                            <div className="img-product-card">
                                                <img src={require('../../assets/9e26f9e1989d230fc135d70860c3c0ff.png')}
                                                     alt="s"/>
                                            </div>
                                            <div className="description-product-card">
                                                <p className="product-name">
                                                    Fruit Salad
                                                </p>
                                                <p className="product-price">
                                                    $3.97
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4" id="product-center">
                                        <div className="product-card">
                                            <div className="img-product-card">
                                                <img src={require('../../assets/9eddd17fae645ca3a45b9bfb830c9b49.png')}
                                                     alt="s"/>
                                            </div>
                                            <div className="description-product-card">
                                                <p className="product-name">
                                                    Cocktail
                                                </p>
                                                <p className="product-price">
                                                    $8.85
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="FastFood" title="Fast Food" id="ffood">
                                <div className="row gy-5" id="full-pc">
                                    <div className="col-4" id="product-center">
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

                                    <div className="col-4" id="product-center">
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
                                    <div className="col-4" id="product-center">
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
                                </div>
                            </Tab>
                            <Tab eventKey="Salad" title="Salad" id="salad">
                                <div className="row gy-5" id="full-pc">
                                    <div className="col-4" id="product-center">
                                        <div className="product-card">
                                            <div className="img-product-card">
                                                <img src={require('../../assets/9e26f9e1989d230fc135d70860c3c0ff.png')}
                                                     alt="s"/>
                                            </div>
                                            <div className="description-product-card">
                                                <p className="product-name">
                                                    Fruit Salad
                                                </p>
                                                <p className="product-price">
                                                    $3.97
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="Soda" title="Soda" id="soda">
                                <div className="row gy-5" id="full-pc">
                                    <div className="col-4" id="product-center">
                                        <div className="product-card">
                                            <div className="img-product-card">
                                                <img src={require('../../assets/9e7814bdfdae2c21255f90651d96a8f9.png')}
                                                     alt="s"/>
                                            </div>
                                            <div className="description-product-card">
                                                <p className="product-name">
                                                    Coka Cola
                                                </p>
                                                <p className="product-price">
                                                    $7.85
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="Cofee" title="Cofee" id="coffe">
                                <div className="row gy-5" id="full-pc">
                                    <div className="col-4" id="product-center">
                                        <div className="product-card">
                                            <div className="img-product-card">
                                                <img src={require('../../assets/9b49341b5513dab05bf409491dd24a2f.png')}
                                                     alt="s"/>
                                            </div>
                                            <div className="description-product-card">
                                                <p className="product-name">
                                                    Drp Cofee
                                                </p>
                                                <p className="product-price">
                                                    $8.85
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4" id="product-center">
                                        <div className="product-card">
                                            <div className="img-product-card">
                                                <img src={require('../../assets/347afb3d860851eeecc9613887b72853.png')}
                                                     alt="s"/>
                                            </div>
                                            <div className="description-product-card">
                                                <p className="product-name">
                                                    Dalgona Cofee
                                                </p>
                                                <p className="product-price">
                                                    $4.97
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="Cocktails" title="Cocktails" id="coctails">
                                <div className="row gy-5" id="full-pc">
                                    <div className="col-4" id="product-center">
                                        <div className="product-card">
                                            <div className="img-product-card">
                                                <img src={require('../../assets/9eddd17fae645ca3a45b9bfb830c9b49.png')}
                                                     alt="s"/>
                                            </div>
                                            <div className="description-product-card">
                                                <p className="product-name">
                                                    Cocktail
                                                </p>
                                                <p className="product-price">
                                                    $8.85
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="QuafeCake" title="Quafe Cake" id="qcake">
                                <div className="row gy-5" id="full-pc">
                                    <div className="col-4" id="product-center">
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
                                    <div className="col-4" id="product-center">
                                        <div className="product-card">
                                            <div className="img-product-card">
                                                <img src={require('../../assets/271fd675680271f889030b034ba9c65f.png')}
                                                     alt="s"/>
                                            </div>
                                            <div className="description-product-card">
                                                <p className="product-name">
                                                    Quafe Brade
                                                </p>
                                                <p className="product-price">
                                                    $7.85
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Tab>
                            <Tab eventKey="Snacks" title="Soup and Noodle">
                                <div className="row gy-5" id="full-pc">
                                    <div className="col-4" id="product-center">
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
                                    <div className="col-4" id="product-center">
                                        <div className="product-card">
                                            <div className="img-product-card">
                                                <img src={require('../../assets/6a07694e0dace2d2e3f2b52e07bc30f2.png')}
                                                     alt="s"/>
                                            </div>
                                            <div className="description-product-card">
                                                <p className="product-name">
                                                    Chowmin Noodle
                                                </p>
                                                <p className="product-price">
                                                    $8.85
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
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


    export default Menu;