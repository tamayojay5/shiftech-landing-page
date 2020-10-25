import React, { Component } from 'react';
import Logo from './../img/logo.png';

class NavBar extends Component {
    render() { 
        return ( 
        <>

            <div className="nav-area sticky-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light w-100">

                        <a className="navbar-brand" href="#">
                            <img src={Logo} width="30" height="30" className="d-inline-block align-top mr-2" alt="" loading="lazy" />
                            ShifTech Innovations
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                                <i className="fa fa-bars"></i>
                            </span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>

                    </nav>
                </div>
            </div>

        </>
    )

        }
}

export default NavBar;