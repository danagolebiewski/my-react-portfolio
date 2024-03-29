import React from "react";
import Dana from "../../assets/dana.webp";
import "./about.css";

function About() {
  return (
    <div className="container home">
      <div className="dana">
        <img className="danaimg" src={Dana} alt="Dana Golebiewski" />
      </div>

      <div className="info">
        <h2 className="heading">Full Stack Web Developer</h2>
        <p>
        Former massage therapist transitioning to programming specializing in data analytics and front and back-end development. Combining my excellent service skills with a newfound passion for computer software to help people in new ways.
          </p>
          <p>
          Extra-curricular activities include being a member of Boulder County Roller Derby. Volunteer duties indclue: Board Member, MVP of the league, training committee member, team captain, and assistant coach for new recruits. Love collaborating as a team to reach common goals
          and help everyone achieve success.
          </p>
          <p>
          I thrive on witnessing and helping everyone around me succeed
          and being able to contribute to that success.
        </p>
      </div>
    </div>
  );
}

export default About;
// test push comment//