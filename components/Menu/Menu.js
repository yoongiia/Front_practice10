import React from 'react';
import './style_menu.module.css';
import getId from '../../helpers';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic';

const MenuItem = dynamic(() => import('./MenuItem/MenuItem'), {ssr: false})

const Menu = ({menuItems, style_menuItem}) => {
    const keys = getId()
    return (
        <ul className={style_menuItem}>
        {menuItems.map((item) => (
            <MenuItem key={keys()} text={item.text} url={item.url}/>
        ))}
        </ul>
    );
}
const mapStateToProps = (state) => {
    return {
      menuItems: state.menu.menuItems,
    };
  };

export default connect(mapStateToProps)(Menu);
