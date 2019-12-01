import React, { Component } from "react";
import profile from "./profile.JPG";
import styles from "./Info.module.css";

class Info extends Component {
  state = {};
  render() {
    return (
      <section className={styles.info}>
        <img src={profile} alt="Maya Profile" />
        <div>
          <h1>Maya Keeley</h1>
          <p>Software Developer</p>
          <p>Current _nology student</p>
        </div>
      </section>
    );
  }
}

export default Info;
