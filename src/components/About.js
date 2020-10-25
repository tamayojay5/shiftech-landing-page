import React  from 'react';
import './main.css';
import Title from './../img/title.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

function About(){
    return (
    <>
            <div id="about" className="about-area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                <div className="section-header">
                  <h2>About</h2>
                  <p>A Little bit about our Company</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="about-img" >
                <ScrollAnimation animateIn='pulse' animateOut='pulse'>
                <img src={Title} alt="" />
                </ScrollAnimation>

                </div>
              </div>          
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="item-text">
                    <h4>Multinational Company</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa et quis nulla exercitationem itaque soluta ullam atque labore tempore cupiditate, aspernatur ut quas deleniti odio praesentium repudiandae ea animi nobis.</p>
                </div>
              </div>
            </div>    
          </div>  
        </div>        
        
        <div className="stats-area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="single-stats">
                  <i className="fa fa-users fa-2x"></i>
                  <h2>937</h2>
                  <p>Facebook Friends</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="single-stats">
                  <i className="fa fa-user-plus fa-2x"></i>
                  <h2>850</h2>
                  <p>Friend Requests</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="single-stats">
                  <i className="fa fa-coffee fa-2x"></i>
                  <h2>1500</h2>
                  <p>Cups of Coffee</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="single-stats">
                  <i className="fa fa-trophy fa-2x "></i>
                  <h2>1,000,000</h2>
                  <p>Awards Won</p>
                </div>
              </div>
            </div>
          </div>
        </div>

    </>
    )
}

export default About;