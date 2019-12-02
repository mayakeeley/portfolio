import React, { Component } from "react";
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Projects from "../Projects";
import { faUser, faPalette } from "@fortawesome/free-solid-svg-icons";
import Profile from "../Profile";
import Interests from "../Interests";
import { Link, Router } from "@reach/router";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <>
        <nav className={styles.nav}>
          <div className={styles.options}>
            <Link to="/">
              <p>
                <FontAwesomeIcon icon={faCode} className={styles.icon} />
                PROJECTS
              </p>
            </Link>
            <Link to="/profile">
              <p>
                <FontAwesomeIcon icon={faUser} className={styles.icon} />
                PROFILE
              </p>
            </Link>
            <Link to="/interests">
              <p>
                <FontAwesomeIcon icon={faPalette} className={styles.icon} />
                INTERESTS
              </p>
            </Link>
          </div>
        </nav>
        <Router primary={false}>
          <Projects path="/" />
          <Profile path="/profile" />
          <Interests path="/interests" />
        </Router>
      </>
    );
  }
}

export default NavBar;
