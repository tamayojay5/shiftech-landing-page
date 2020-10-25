import React from 'react';
import './main.css';


function Contact() {
    return (
        <>

            <div id="contact" className="contact-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                            <div id="wrap">
                                <h1 className="message">CONTACT US</h1>
                                <div id="form-wrap">
                                    <div className="col-md-8 offset-md-1">
                                        <div className="single-form">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Email address :</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleFormControlTextarea1">Message :</label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                                </div>
                                                <a href="#" type="submit" className="btn btn-lg btn-block btn-primary">Send</a>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact;