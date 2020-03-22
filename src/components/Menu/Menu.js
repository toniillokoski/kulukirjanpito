import React from 'react';

import ViewList from '@material-ui/icons/ViewList';
import TrendingUp from '@material-ui/icons/TrendingUp';
import Settings from '@material-ui/icons/Settings';

import './Menu.css'

function Menu(props) {
    return (
      <div className="menu">
        <div className="menu__nappi"><ViewList htmlColor="#fff" /></div>
        <div className="menu__nappi"><TrendingUp  htmlColor="#fff" /></div>
        <div className="menu__nappi"><Settings  htmlColor="#fff" /></div>
      </div>
    )
  }

  export default Menu;