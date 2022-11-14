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

function Project({ name, imageName, description, repo, link }) {
  return (
    <div className="project" key={name}>
      {generateImage(name, imageName)}
      <div className="project-text">
        <h3>
          <a href={link}>{name}</a>{' '}
          <a href={`https://github.com/danagolebiewski/${repo}`}>{repo}</a>{' '}
          {/* //can be github icon */}
        </h3>
        <p>{description}</p>
      </div>
  </div>
)


  
}
export default Project;
