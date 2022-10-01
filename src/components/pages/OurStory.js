import React, {Component} from 'react'
import './OurStory.css'

class OurStory extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="our-story-full">
                        <div className="col-lg-12" id="full-our-story-col">
                            <div className="col-lg-6" id="left-our-story-col">
                                <h1 className="h1-left-our-story-col">
                                    Our Story
                                </h1>
                                <p className="p-left-our-story-col">
                                    Through True Rich Attended does no end it his mother since favourable real had half
                                    every him case in packages enquire we up ecstatic.
                                </p>
                                <div className="full-img-left-our-story">
                                    <div className="col-lg-6" id="img-left-our-story">
                                        <div className="img-left-our-story-1">
                                            <img src={require('../../assets/492a0dc396ca1d6d708c90c44ab6d354.jfif')}
                                                 alt="s"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6" id="img-right-our-story">
                                        <div className="img-left-our-story-2">
                                            <img src={require('../../assets/ddcae7512c22d9dab1713cd2db386259.jfif')}
                                                 alt="s"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6" id="right-our-story-col">
                                <div className="right-our-story-col-full-text">
                                    <h3 className="right-our-story-h3">
                                        One of the best cafes in <span>New York.</span>
                                    </h3>
                                    <p className="right-our-story-p1">
                                        Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.
                                    </p>
                                    <p className="right-our-story-p2">
                                        Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice.                                    </p>

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

export default OurStory;