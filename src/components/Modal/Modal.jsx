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
            <p
              className={styles.close}
              id={styles.close}
              onClick={this.props.closeModal}
            >
              x
            </p>
            <h2>{this.props.projectName}</h2>
            <div className={styles.desc}>
              <div>
                <p>{this.props.desc}</p>
                <br/>
                <p className={styles.tech}>{this.props.techStack}</p>
              </div>
              <a
                href={this.props.url}
                rel="noopener noreferrer"
                target="_blank"
                className={styles.link}
              >
                Visit site
              </a>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Modal;
