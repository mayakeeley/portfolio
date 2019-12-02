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
            <p className={styles.close} onClick={this.props.closeModal}>
              x
            </p>
            <h2>{this.props.projectName}</h2>
            <div className={styles.desc}>
              <p>{this.props.desc}</p>
              <p className={styles.tech}>{this.props.techStack}</p>
              <a
                href={this.props.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {this.props.url}
              </a>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Modal;
