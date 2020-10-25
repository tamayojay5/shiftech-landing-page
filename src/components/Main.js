import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import './main.css';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import NavBar from './NavBar';

function Main() {
    return (
        <>

        <NavBar />
        
        <div className="slider-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        <div className="slider-text">
                            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                              <h1>ShifTech Innovations</h1>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
                              <h2>"Shift for the better, Shift to better tech"</h2>
                            </ScrollAnimation>             
                            <p>
                                <a href="#contact">Contact Us</a>
                                <a href="#services">More info</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <About />

        <Services />
     
        <Portfolio />
     
        <Contact />
   
   
      </>
    );
  }
  export default Main;
  