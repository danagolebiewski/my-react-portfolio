import React from "react";
import Dana from "../../assets/dana.webp";

function About() {
  return (
    <div className="container home">
            <h1>Dana Golebiewski</h1>
      <div className="dana">
        <img src={Dana} alt="Dana Golebiewski" />
      </div>
      <h1 className="text-light">Full Stack Web Developer</h1>
      <p>
        Full Stack Web Developer with a background in business ownership,
        massage therapy, and life-long dedication to learning. Self-starter with
        excellent communication and customer service skills. Known among former
        clients for being able to listen to their needs and delivering a
        consistently excellent product. Mentor a new massage therapist to coach
        on advanced massage therapy techniques, business ownership, and
        cultivating an interpersonal relationship with each client.
        Extra-curricular activities include being MVP of the roller derby
        league, co-chair of the training committee, team captain, and coach of
        the new recruits. Love collaborating as a team to reach common goals and
        help everyone achieve success. I thrive on witnessing and helping
        everyone around me succeed and being able to contribute to that success.
      </p>

    </div>
  );
}

export default About;
