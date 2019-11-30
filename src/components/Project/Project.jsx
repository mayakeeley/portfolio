import React, { Component } from "react";
import styles from "./Project.module.css";

class Project extends Component {
  state = {};
  render() {
    return (
      <img
        className={styles.projects}
        src={this.props.image}
        alt={this.props.projectName}
        onClick={this.props.handleClick}
      />
    );
  }
}

export default Project;
