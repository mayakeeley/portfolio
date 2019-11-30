import React, { Component } from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div className={styles.title}>
          <h2>
            MK <span>|</span> Portfolio
          </h2>
          <nav>
            <a
              href="https://github.com/mayakeeley"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/maya-keeley-8827a215b/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="mailto:maya.keeley@outlook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
