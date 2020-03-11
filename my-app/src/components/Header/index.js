import React, { Component } from 'react';
import './style.css';

export default class Header extends Component {
    render(){
        return (
            <nav>
                <div className="nav-wrapper">
                <a href="/" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Item</a></li>
                </ul>
                </div>
            </nav>
        );
    }
}