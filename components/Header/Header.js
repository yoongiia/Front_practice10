import React from 'react';
import './header.module.css';
import Logo from './Logo/Logo';
import logo from '../../public/logo.png'
import DateTime from './DateTime/DateTime';


const Header = (props) => {
  return (
    <header className="header">
      <Logo/>
      <p>{props.title}</p>
      <DateTime/>
    </header>
  );
};

export default Header;