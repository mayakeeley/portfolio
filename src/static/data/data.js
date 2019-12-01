import inCollab from "../images/inCollab.jpg";
import quiz from "../images/quiz.jpg";
import hanjie from "../images/hanjie.jpg";
import minesweeper from "../images/minesweeper.jpg";

const projects = [
  {
    projectName: "In Collaboration",
    image: inCollab,
    url: "https://incollaboration.nology.io",
    techStack: "React, Reach Router, Firebase, Auth, Firebase Functions",
    desc: "4 week client project created with my colleagues to "
  },
  {
    projectName: "Minesweeper",
    image: minesweeper,
    url: "https://minesweeper.nology.io",
    techStack: "HTML, CSS, Javascript",
    desc:
      "3 hour challenge to generate random mines and the corresponding clues for a variety of sizes and mine numbers"
  },
  {
    projectName: "Blackbeard Quiz",
    image: quiz,
    url: "https://quiz.mayakeeley.com",
    techStack: "HTML, CSS, Javascript",
    desc: ""
  },
  {
    projectName: "Hanjie",
    image: hanjie,
    url: "https://hanjie.mayakeeley.com",
    techStack: "React, Auth?",
    desc: ""
  }
];

export default projects;
