import React, { useState } from "react";
import Project from "../Project";
import portfolio from "./portfolio.css";

function Portfolio() {
  const [projects] = useState ([
    {
      name: "Tarot Keeper",
      imageName: "tarot-keeper.png",
      description: "This application would allow users to save their Tarot readings When they create an account so that they can come back to it without the long thinking proccess of that aha moment, when this application can save that for you including images, Decription and other information about that specific card.",
      link: "https://my-tarot-keeper.herokuapp.com/",
      repo: "https://github.com/Leximiller128/tarot_keeper2",
    },
    {
      name: "Hi Blog, I'm Dad",
      imageName: "hi-blog-im-dad.png",
      description: "Hi, Blog, I'm Dad is an app that allows a user to create a new profile, sign-in to their existing profile, view jokes, and save/create their own jokes to their profile.  It's more fun than a barrel of monkeys jumping on the bed!",
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
    }
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
