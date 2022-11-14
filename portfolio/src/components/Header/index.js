import React from 'react';


function Header ({ children }) {
  return (
    <div>
      <header>
        <h1>Dana Golebiewski</h1>
      </header>
      {children}
    </div>
 
  )
}

export default Header;