import React from 'react';
import './header.scss';

const Header = () => (
  <div className="header">
    <div className="row">
      <div className="logo"/>
      <div className="logout">
        <a href={'/logout'}>Logout</a>
      </div>
    </div>
  </div>
);

export default Header;