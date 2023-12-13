import React from 'react';
import './sideBar.module.css';
import Menu from '../Menu/Menu';


const SideBar = (props) => {
  const menuItems = [
    {text: 'main', url: 'http://localhost:3000/'},
    {text: 'moodle', url: 'http://78.137.2.119:2929/'},
    {text: 'chsbc', url: 'http://csbc.edu.ua/'},
  ]
  return (
    <div className="sidebar">
      <h2 className="title">{props.title}</h2>
      <Menu list={menuItems} style_menuItem="incolumn"/>
    </div>
  );
};

export default SideBar;