import React from 'react';
import './main.css';
import Logo from './../img/logo.png';

function Footer() {
  return (
    <div className="Footer">      
        <div className="footer-area" id="footer">
        
        <footer className="footer">
            <div className="l-footer">
                <h1><img src={Logo} alt=""/></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius pariatur quibusdam culpa iusto natus cumque alias itaque vel aliquid, quae vitae laudantium repellendus est, non corporis temporibus, quaerat error.</p>
            </div>
            <ul className="r-footer">
                <li>
                    <h2>Explore</h2>
                    <ul className="boxes">
                        <li><a href="#">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </li>
                <li className="features">
                    <h2>Need Help?</h2>
                    <ul className="boxes h-boxes">
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Sales</a></li>
                        <li><a href="#">Certifications</a></li>
                        <li><a href="#">Customer Service</a></li>
                    </ul>
                </li>
                <li>
                    <h2>Legal</h2>
                    <ul className="boxes">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Contract</a></li>
                        
                    </ul>
                </li>
            </ul>
            <div className="b-footer">
                <p>All Rights Reserved by &copy; <code>WiTech Innovations</code> 2020</p>
            </div>
        </footer> 
    
</div>
    </div>
  );
}
export default Footer;
