
import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#pablo">Ministry of Home Affairs</a>
              </li>
              <li>
                <a href="#pablo">WHO</a>
              </li>
              <li>
                <a href="#pablo">About</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="https://www.covid19india.org/">
              CoViD 19
            </a>
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
