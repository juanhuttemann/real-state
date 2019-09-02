import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div>Logo</div>
                <nav>
                    <a href="#">create ads</a>
                    <a href="#">about us</a>
                    <a href="#">log in</a>
                    <a href="#" className="register-btn">log in</a>
                </nav>
            </header>
        )
    }
}