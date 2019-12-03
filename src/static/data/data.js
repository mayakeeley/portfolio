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
    url: "https://incollaboration.nology.io",
    techStack: "SCSS, React, Reach Router, Firebase, Auth, Firebase Functions",
    desc:
      "Client project: I worked as part of a team of nine on a client project as part of the _nology training course. During this time we used agile principles, working in sprints with daily standups and weekly retrospectives. The concept was to create a platform for the In Collaboration community to connect on and share ideas and projects. We implemented the use of trello, user stories and paired programming. I worked in a variety of roles, running a retrospective, leading meetings with the client and on the code itself. I, and another team member, taught ourselves how to use firebase functions to send notifications to a mailing list when a post is created on the app."
  },
  {
    projectName: "Minesweeper",
    image: minesweeper,
    url: "https://minesweeper.mayakeeley.com",
    techStack: "HTML, CSS, Javascript",
    desc:
      "_nology brief: Build a program which generates and visualises the minesweeper (uncovered) game field. Input: 3 parameters – number of rows, number of columns, number of mines. Rules: each field is either empty, mine or number (1-8). Generate a rectangular field based on input number of rows and columns. Place mines randomly in the field – there can be only one mine in each field. Calculate the number clues and display the field. Output: simple visualisation of uncovered game board."
  },
  {
    projectName: "Hanjie",
    image: hanjie,
    url: "https://hanjie.mayakeeley.com",
    techStack: "React",
    desc:
      "Personal interest project: I created a hanjie game using React to consolidate my knowledge of two dimensional arrays, states  and components. This project is currently a work in progress as I would like to add multiple puzzles to this application."
  },
  {
    projectName: "Blackbeard Quiz",
    image: quiz,
    url: "https://quiz.mayakeeley.com",
    techStack: "HTML, CSS, Javascript",
    desc:
      "Personal interest project: I created this quiz in week 3 of the _nology course. This allowed me to consolidate my knowledge of javascript, data and objects. It was later used in the _nology weekly consolidation quiz."
  },
  {
    projectName: "Hall of Mirrors",
    image: mirrors,
    url: "https://mirrors.mayakeeley.com",
    techStack: "React, Authentication",
    desc:
      "_nology brief: Make a react application that allows the user to login with their gmail account. When logged in, they will be shown their profile picture numerous times. Each picture shown should be modified with different angles and should be different to the other pictures. When each mirror is clicked it should toggle between a normal look and the distorted mirror look."
  },
  {
    projectName: "Tug of War",
    image: tugOfWar,
    url: "https://tug-of-war.mayakeeley.com",
    techStack: "HTML, CSS, Vanilla Javascript",
    desc:
      "_nology brief: Build a tug of war game. Two players should be able to play on one screen. The user that does the most actions enough times wins the tug of war. Requirements: You can reset the game to play as many times as you want without having to refresh the browser and you can see how many times each player has won."
  }
];

export default projects;
