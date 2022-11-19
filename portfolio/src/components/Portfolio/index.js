import React, { useState } from "react";
import Project from "../Project";
import portfolio from "./portfolio.css";

function Portfolio() {
  const [projects] = useState ([
    {
      name: "Hi Blog, I'm Dad",
      imageName: "hi-blog-im-dad.png",
      description: "A blog to store all of your witty puns and dad jokes",
      link: "https://hi-blog-im-dad.herokuapp.com/",
      repo: "https://github.com/Leximiller128/hi-blog-im-dad",
    },
    {
      name: "The Perfect Date Night",
      imageName: "theperfectdatenight.png",
      description: "Ability to search for dinner and a movie based on your location",
      link: "https://danagolebiewski.github.io/the-perfect-date/",
      repo: "https://github.com/danagolebiewski/the-perfect-date",
    },
    {
      name: "Social Network",
      imageName: "employee-tracker.png",
      description: "A social network web application where users can share their thoughts, react to friends thoughts, and create a friend list",
      link: "https://drive.google.com/file/d/1cuBXmvupLy3IQvW9fhYlRTeLSIHF3LOT/view",
      repo: "https://github.com/danagolebiewski/social-network",
    },
    {
      name: "Employee Tracker",
      imageName: "employee-tracker.png",
      description: "An app to keep track of your employees, their roles, and update their information. To view the app, clone the repo and run npm start",
      repo: "https://github.com/danagolebiewski/employee-tracker",
    },
    {
      name: "Note Taker",
      imageName: "notetaker.png",
      description: "This app allows you to add notes to a list and delete them when you are done.",
      link: "https://mighty-basin-07274.herokuapp.com/",
      repo: "Github link",
    },
    {
      name: "Team Profile Generator",
      imageName: "team-profile-generator.png",
      description: "This app keeps track of your team by importing vital contact information.",
      link: "Deployed",
      repo: "https://github.com/danagolebiewski/team-profile-generator",
    },
  ]);
  return (
    <div>
      <div className="portfolio">
        {projects.map((project, idx) => (
          <Project project = {project} key={'project' + idx} />
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
