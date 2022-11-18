import React from 'react';
import './project.css';

const generateImage = (name, imageName) => {
  try {
    const src = require(`../../assets/${imageName}`);
    return <img src={src} alt={name} className="card-img" />;
  } catch (e) {
    console.warn(e);
    return <span>Image not found</span>;
  }
};

function Project({ project }) {
  const {name, imageName, description, repo, link} = project
  return (
    <div className="project" key={name}>
      {generateImage(name, imageName)}
      <div className="project-text">
        <h3>
          <a className="links" href={`${link}`}>Link</a>{' '} 
          <a className="links" href={`${repo}`}>Repo</a>{' '}
        </h3>
        <h3 className="links">{description}</h3>
      </div>
  </div>
)


  
}
export default Project;
