import React from 'react';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import './navbar.scss';
import logo from '../../assets/logo.jpg';
type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="navbar-menu">
                    <a href="#" className="navbar-menu-item">Home</a>
                    <a href="#" className="navbar-menu-item">About</a>
                    <a href="#" className="navbar-menu-item">Services</a>
                    <a href="#" className="navbar-menu-item">Pricing</a>
                    <a href="#" className="navbar-menu-item">Contact</a>
                </div>
                {/* <div className="navbar__menu__icon">
                    <Bars3Icon className="navbar__menu__icon__bars" />
                    <XMarkIcon className="navbar__menu__icon__x" />
                </div> */}
            </div>
        </div>
    )
}

export default Navbar;