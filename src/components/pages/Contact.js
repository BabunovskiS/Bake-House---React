import React, {Component, useRef} from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import emailjs from 'emailjs-com';
import './Contact.css'


export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i6k39t7', 'template_ze6y1ee', form.current, '-oCNbH4BQG9muLQDk')
            .then((result) => {
                alert("You have successfully entered your information :D")
            }, (error) => {
                alert(error.message)
            });
        e.target.reset();
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12" id="full-contact">
                    <div className="col-lg-6" id="contact-left">
                        <div className="contact-left-text">
                            <h2 className="h2-contact-left">
                                Have a Question ?<br/>
                                Get in Touch with us 👋
                            </h2>
                            <p className="p-contact-left">
                                Fill up the Form and ou team will get back to within 24 hrs
                            </p>
                        </div>
                        <div className="form-full">
                            <form ref={form} onSubmit={sendEmail}>
                                <input type="text" name="user_name" placeholder="Name" id="text-name"/>
                                <input type="email" name="user_email" placeholder="E-mail" id="text-email"/>
                                <textarea name="message" placeholder="Message" id="text-message"/>
                                <input type="submit" value="Send Messege" id="text-button"/>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6" id="contact-right">
                        <div className="col-lg-6" id="right-about-us-page-img-left">
                            <div className="img-right-1">
                                <img src={require('../../assets/1eac5bf007f522afc9e31a2fc50055db.png')}
                                     alt="s"/>
                            </div>
                        </div>
                        <div className="col-lg-6" id="right-about-us-page-img-right">
                            <div className="img-right-2">
                                <img src={require('../../assets/9a8cf7e8be6942b17c513ef3e3dca977.png')}
                                     alt="s"/>
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
    );
};

export default Contact;