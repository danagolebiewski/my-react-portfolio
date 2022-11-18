import React, { useState } from "react";
import Project from "../Project";
import portfolio from "./portfolio.css";

function Portfolio() {
  const [projects] = useState ([
    {
      name: "Hi Blog, I'm Dad",
      imageName: "hi-blog-im-dad.png",
      description: "HTML/CSS/JS/JQUERY/BOOTSTRAP/MYSQL/NODE.JS/EXPRESS",
      link: "https://hi-blog-im-dad.herokuapp.com/",
      repo: "https://github.com/Leximiller128/hi-blog-im-dad",
    },
    {
      name: "The Perfect Date Night",
      imageName: "theperfectdatenight.png",
      description: "HTML/CSS/JS/BULMA/JQUERY",
      link: "https://danagolebiewski.github.io/the-perfect-date/",
      repo: "https://github.com/danagolebiewski/the-perfect-date",
    },
    {
      name: "Social Network",
      imageName: "employee-tracker.png",
      description: "HTML/CSS/JS",
      link: "Deployed",
      repo: "Github link",
    },
    {
      name: "Employee Tracker",
      imageName: "employee-tracker.png",
      description: "JavaScript",
      link: "",
      repo: "https://github.com/danagolebiewski/employee-tracker",
    },
    {
      name: "Note Taker",
      imageName: "notetaker.png",
      description: "HTML/CSS/JS",
      link: "https://mighty-basin-07274.herokuapp.com/",
      repo: "Github link",
    },
    {
      name: "Team Profile Generator",
      imageName: "team-profile-generator.png",
      description: "HTML/CSS/JS",
      link: "Deployed",
      repo: "Github link",
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
