import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link className="brand-logo" to="/">
              CodeBrews
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/about">Our Gallery</Link>
              </li>
              <li>
                <Link to="/about">About CB.css</Link>
              </li>
              <li>
                <Link to="/about">Misc</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
