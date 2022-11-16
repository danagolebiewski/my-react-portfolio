import React, { useState } from "react";
import Project from "../Project";
// import employeeTracker from '../assets/employee-tracker.png';

function Portfolio() {
  const [projects] = useState ([
    {
      name: "Employee Tracker",
      imageName: "employee-tracker.png",
      description: "HTML/CSS/JS",
      link: "www.google.com",
      repo: "https://www.google.com",
    },
    {
      name: "Hi Blog, I'm Dad",
      imageName: "hi-blog-im-dad.png",
      description: "HTML/CSS/JS",
      link: "Deployed",
      repo: "Github link",
    },
    {
      name: "project 1",
      imageName: "employee-tracker.png",
      description: "HTML/CSS/JS",
      link: "Deployed",
      repo: "Github link",
    },
    {
      name: "Note Taker",
      imageName: "notetaker.png",
      description: "HTML/CSS/JS",
      link: "Deployed",
      repo: "Github link",
    },
    {
      name: "The Perfect Date Night",
      imageName: "theperfectdatenight.png",
      description: "HTML/CSS/JS",
      link: "Deployed",
      repo: "Github link",
    },
    {
      name: "project 1",
      imageName: "",
      description: "HTML/CSS/JS",
      link: "Deployed",
      repo: "Github link",
    },
  ]);
  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project = {project} key={'project' + idx} />
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
