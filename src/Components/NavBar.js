import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      hideNav: ""
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ hideNav: window.innerWidth <= 760 });
  }
  // "right hide-on-med-and-down"
  render() {
    // console.log(this.state.hideNav);
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link className="brand-logo" to="/">
              CodeBrews
            </Link>
            <ul
              id={this.state.hideNav === false ? "nav-mobile" : "mobile-demo"}
              className={
                this.state.hideNav === false
                  ? "right hide-on-med-and-down"
                  : "sidenav"
              }
            >
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
        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">Javascript</a>
          </li>
          <li>
            <a href="mobile.html">Mobile</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
