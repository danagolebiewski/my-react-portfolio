import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Project from "../Project";

function Portfolio() {
  const [projects] = [
    {
      name: "Employee Tracker",
      imageName: "employee-tracker.png",
      description: "HTML/CSS/JS",
      link: "Deployed",
      repo: "Github link",
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
  ];
  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project {...project} key={'project' + idx} />
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
