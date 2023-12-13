import React from 'react';
import './footer.module.css';
import Menu from '../Menu/Menu';



const Footer = (props) => {
  const mens = [
    {text: 'main', url: 'http://localhost:3000/'},
    {text: 'moodle', url: 'http://78.137.2.119:2929/'},
    {text: 'chsbc', url: 'http://csbc.edu.ua/'},
  ]
  return (
    <footer className="footer">
      <p>{props.title}</p>
      <Menu list={mens} style_menuItem="inline"/>
    </footer>
  );
};

export default Footer;