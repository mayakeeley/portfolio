import React, { Component } from "react";
import styles from "./Interests.module.css";
import art from "./art.jpg";
import dancing from "./dancing.jpg";
import filmmaking from "./filmmaking.jpg";

class Interests extends Component {
  state = {};
  render() {
    return (
      <div className={styles.interests}>
        <div>
          <img src={art} alt="art" />
          <p>
            I have pursued Art throughout my school life and have recently
            started taking a weekly life-drawing class.
          </p>
        </div>
        <div>
          <img src={filmmaking} alt="filmmaking" />
          <p>
            Having made films from a young age, I have taught myself many
            different editing software systems to keep up with technology
            developments.
          </p>
        </div>
        <div>
          <img src={dancing} alt="dancing" />
          <p>
            I have been trained in ballet from the age of four, achieving Grade
            8 and participating in many shows.
          </p>
        </div>
      </div>
    );
  }
}

export default Interests;
