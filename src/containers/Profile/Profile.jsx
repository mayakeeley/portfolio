import React, { Component } from "react";
import styles from "./Profile.module.css";

class Profile extends Component {
  state = {};
  render() {
    return (
      <div className={styles.profile}>
        <p>
          I am currently training with _nology as part of a 12-week intensive
          front-end Software Development course. I have taken leadership
          opportunities throughout, such as running a retrospective session,
          leading meetings for a client project and have won several awards on
          the course, including ‘Most Valuable Programmer’ and the ‘Product’
          award. I am keen to continue learning and developing beyond the course
          to widen my knowledge of tech and coding languages.
        </p>
        <br />
        <p>While on this course, I have been training in the following:</p>
        <ul>
          <li>HTML</li>
          <li>CSS/SCSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Firebase (Auth, Databases, Hosting, Functions)</li>
          <li>Git/Github</li>
          <li>Jest/Enzyme</li>
          <li>Agile</li>
        </ul>
      </div>
    );
  }
}

export default Profile;
