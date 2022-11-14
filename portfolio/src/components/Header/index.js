import React from 'react';
import './header.css';

function Header ({ children }) {
  return (
    <div >
      <header className='title'>
        <h1>Dana Golebiewski</h1>
      </header>
      {children}
    </div>
 
  );
}

export default Header;