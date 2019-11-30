import React, { Component } from "react";
import styles from "./Modal.module.css";

class Modal extends Component {
  render() {
    const style = this.props.isVisible ? null : { display: "none" };
    return (
      <article className={styles.background} style={style}>
        <div className={styles.modal}>
          <img src={this.props.image} alt={this.props.projectName} />
          <div className={styles.description}>
            <p onClick={this.props.closeModal}>x</p>
            <h2>{this.props.projectName}</h2>
            <p>{this.props.desc}</p>
            <p>{this.props.techStack}</p>
            <a href={this.props.url}>{this.props.url}</a>
          </div>
        </div>
      </article>
    );
  }
}

export default Modal;
