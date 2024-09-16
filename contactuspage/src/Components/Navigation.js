import React from 'react';

const Navigation = () => {
  const navStyle = {
    listStyle: 'none', // Adjust as needed
    
  };

  const listItemStyle = {
    margin: '0 10px', // Adjust spacing between list items
  
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand">
          <img 
            src={process.env.PUBLIC_URL + "/Images/logo.png"}
            alt=""
          />
        </a>

        <ul className="d-flex " style={navStyle}>
            <li style={listItemStyle}> Home</li>
            <li style={listItemStyle}> Contact</li>
            <li style={listItemStyle}> About</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
