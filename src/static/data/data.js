import inCollab from "../images/inCollab.jpg";
import quiz from "../images/quiz.jpg";
import hanjie from "../images/hanjie.jpg";
import minesweeper from "../images/minesweeper.jpg";
import mirrors from "../images/mirrors.jpg";
import tugOfWar from "../images/tugOfWar.jpg";

const projects = [
  {
    projectName: "In Collaboration",
    image: inCollab,
    url: "https://in-collaboration-85912.web.app/login",
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
    projectName: "Hanjie",
    image: hanjie,
    url: "https://hanjie.mayakeeley.com",
    techStack: "React, Auth?",
    desc: ""
  },
  {
    projectName: "Blackbeard Quiz",
    image: quiz,
    url: "https://quiz.mayakeeley.com",
    techStack: "HTML, CSS, Javascript",
    desc: ""
  },
  {
    projectName: "Hall of Mirrors",
    image: mirrors,
    url: "https://mirrors.mayakeeley.com",
    techStack: "React, Authentication",
    desc:
      "_nology brief to create a hall of mirrors by using the user's profile photo"
  },
  {
    projectName: "Tug of War",
    image: tugOfWar,
    url: "https://tug-of-war.mayakeeley.com",
    techStack: "HTML, CSS, Vanilla Javascript",
    desc: "3 hour brief in week 3"
  }
];

export default projects;
