import React from "react";
import "./resume.css";

function Resume() {
  return (
    <div className="resume">
      <ul>
      <li>
        <a className="link"
          href="https://docs.google.com/document/d/e/2PACX-1vRukW3lJbEq2ywW-J7Xk1bKjSg3rHdPfkhnXUZf4mp_GAmaiOPc-63B86mhcEwTjMRrCxRctR26zFZ9/pub"
          target="_blank"
        >
          Link to Resume
        </a>
      </li>
      </ul>
      {/* <img src="./assets/resume.png" alt="resume" className="resume-img" /> */}
    </div>
  );
}

export default Resume;
