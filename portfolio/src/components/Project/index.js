// import React from 'react';
// import './project.css';

// const generateImage = (name, imageName) => {
//   try {
//     const src = require(`../../assets/${imageName}`);
//     return <img src={src} alt={name} className="card-img" />;
//   } catch (e) {
//     console.warn(e);
//     return <span>Image not found</span>;
//   }
// };

// function Project({ name, imageName, description, repo, link }) {
//   return (
//     <div className="project" key={name}>
//       {generateImage(name, imageName)}
//       <div className="project-text">
//         <h3>
//           <a href={link}>{name}</a>{' '}
//           <a href={`https://github.com/danagolebiewski/${repo}`}>{repo}</a>{' '}
//           {/* //can be github icon */}
//         </h3>
//         <p>{description}</p>
//       </div>
//   </div>
// )


  
// }
// export default Project;

import React from 'react';

function Project({ project }) {

  const { name, repo, link, description } = project;

  return (
    <div className="project" key={name}>
      {/* <img
        src={require(`../../assets/${name}.png`)}
        className="project-bg"
      /> */}
      <div className="project-text">
        <h3>
        <a href={link}>
            <i className="link">Link</i>
          </a>
          <a href={repo}>
            <i className="repo">Repo</i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;