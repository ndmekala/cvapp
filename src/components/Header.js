import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header
        className="d-flex flex-wrap justify-content-center py-3"
        id="header"
      >
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a
              href="https://www.github.com/ndmekala/cvapp"
              className="nav-link"
            >
              Repository
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.meka.la" className="nav-link">
              Portfolio
            </a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
