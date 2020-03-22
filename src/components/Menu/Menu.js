import React from 'react';
import { Link } from 'react-router-dom';

import ViewList from '@material-ui/icons/ViewList';
import TrendingUp from '@material-ui/icons/TrendingUp';
import Settings from '@material-ui/icons/Settings';

import './Menu.css'

function Menu(props) {
    return (
      <div className="menu">
        <Link to="/"><div className="menu__nappi"><ViewList htmlColor="#fff" /></div></Link>
        <Link to="/stats"><div className="menu__nappi"><TrendingUp  htmlColor="#fff" /></div></Link>
        <Link to="/settings"><div className="menu__nappi"><Settings  htmlColor="#fff" /></div></Link>
      </div>
    )
  }

  export default Menu;