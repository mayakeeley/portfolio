import React, { Component } from "react";
import Project from "../../components/Project";
import styles from "./Projects.module.css";
import Modal from "../../components/Modal";
import data from "../../static/data/data";

class Projects extends Component {
  state = {
    isVisible: false,
    projectName: "",
    image: "",
    url: "",
    techStack: "",
    desc: ""
  };

  handleClick = (projectName, image, url, techStack, desc) => {
    this.setState({
      isVisible: !this.state.isVisible,
      projectName,
      image,
      url,
      techStack,
      desc
    });
  };

  closeModal = () => {
    this.setState({
      isVisible: !this.state.isVisible,
      projectName: "",
      image: ""
    });
  };
  render() {
    return (
      <article className={styles.projects}>
        <section>
          {data.map((project, index) => {
            return (
              <Project
                image={project.image}
                projectName={project.projectName}
                key={index}
                handleClick={() => {
                  this.handleClick(
                    project.projectName,
                    project.image,
                    project.url,
                    project.techStack,
                    project.desc
                  );
                }}
              />
            );
          })}
        </section>
        <Modal
          image={this.state.image}
          projectName={this.state.projectName}
          url={this.state.url}
          techStack={this.state.techStack}
          desc={this.state.desc}
          isVisible={this.state.isVisible}
          closeModal={this.closeModal}
        />
      </article>
    );
  }
}

export default Projects;
