import React from 'react';
import Title from './../img/title.jpg';
import Jay from './../img/founder/jay.png';

function Portfolio() {
    return (

        <>

            <div id="portfolio" className="portfolio-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                            <div className="section-header">
                                <h2>Our Recent Works</h2>
                                <p>These are some works that finished so far</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single-work">
                                <img src={Title} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-work">
                                <img src={Title} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-work">
                                <img src={Title} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-work">
                                <img src={Title} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-work">
                                <img src={Title} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-work">
                                <img src={Title} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonial-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                            <div className="section-header">
                                <h2>Meet The Team</h2>
                                <p>These are the Handsome and Beautiful Founders.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="single-testi mb-5 ">
                                <div className="img-area">
                                    <img src={Jay} alt="" />
                                </div>
                                <h2>Engr. Reymark Tion</h2>
                                <p>Grabie jud ni katsada maayo kaayo sila tanan</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="single-testi mb-5">
                                <div className="img-area">
                                    <img src={Jay} alt="" />
                                </div>
                                <h2>Engr. Jay Tamayo</h2>
                                <p>Grabie jud ni katsada maayo kaayo sila tanan</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="single-testi mb-5">
                                <div className="img-area">
                                    <img src={Jay} alt="" />
                                </div>
                                <h2>Engr. Kent Caturan</h2>
                                <p>Grabie jud ni katsada maayo kaayo sila tanan</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="single-testi mb-5">
                                <div className="img-area">
                                    <img src={Jay} alt="" />
                                </div>
                                <h2>Engr. Riva Cunado</h2>
                                <p>Grabie jud ni katsada maayo kaayo sila tanan</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="single-testi mb-5">
                                <div className="img-area">
                                    <img src={Jay} alt="" />
                                </div>
                                <h2>Engr. Jeraiza Molina</h2>
                                <p>Grabie jud ni katsada maayo kaayo sila tanan</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="single-testi mb-5">
                                <div className="img-area">
                                    <img src={Jay} alt="" />
                                </div>
                                <h2>Engr. Charchel Quider</h2>
                                <p>Grabie jud ni katsada maayo kaayo sila tanan</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="single-testi mb-5">
                                <div className="img-area">
                                    <img src={Jay} alt="" />
                                </div>
                                <h2>Engr. Erwin Jumamil</h2>
                                <p>Grabie jud ni katsada maayo kaayo sila tanan</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="single-testi mb-5">
                                <div className="img-area">
                                    <img src={Jay} alt="" />
                                </div>
                                <h2>Engr. Airel Dan Tubo</h2>
                                <p>Grabie jud ni katsada maayo kaayo sila tanan</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="single-testi mb-5">
                                <div className="img-area">
                                    <img src={Jay} alt="" />
                                </div>
                                <h2>Engr. Karl Fabre</h2>
                                <p>Grabie jud ni katsada maayo kaayo sila tanan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Portfolio;