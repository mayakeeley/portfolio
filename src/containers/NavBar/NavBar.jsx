import React, { Component } from "react";
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faUser, faPalette } from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className={styles.nav}>
        <div className={styles.options}>
          <p>
            <FontAwesomeIcon icon={faCode} className={styles.icon} />
            PROJECTS
          </p>
          <p>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
            PROFILE
          </p>
          <p>
            <FontAwesomeIcon icon={faPalette} className={styles.icon} />
            INTERESTS
          </p>
        </div>
      </nav>
    );
  }
}

export default NavBar;
