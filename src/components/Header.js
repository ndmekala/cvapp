import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super (props)
    }

    render() {
        return (
            <header className="d-flex flex-wrap justify-content-center py-3" id="header">

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="https://www.github.com/ndmekala/cvapp" class="nav-link">Repository</a></li>
                    <li className="nav-item"><a href="https://www.meka.la" class="nav-link">Portfolio</a></li>
                </ul>
            </header>
        )
    }
}

export default Header