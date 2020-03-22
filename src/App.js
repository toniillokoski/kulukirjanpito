import React from 'react';
import './App.css';
import ViewList from '@material-ui/icons/ViewList';
import TrendingUp from '@material-ui/icons/TrendingUp';
import Settings from '@material-ui/icons/Settings';

function App() {
  return (
    <div className="App">
        <Header />

        <div name="content">
          <Kulukortti />
          <Kulukortti />
          <Kulukortti />
        </div>
        
        <Menu />
    </div>
  );
}

function Header(props) {
  return (
    <div className="header">
      <h1>Kulukirjanpito</h1>
    </div>
  )
}

function Kulukortti(props) {
  return (
    <div className="kulukortti">
      <div className="kulukortti__rivi">
      <div className="kulukortti__tyyppi">Sähkö</div>
      <div className="kulukortti__summa">437,50€</div>
      </div>
      <div className="kulukortti__rivi">
      <div className="kulukortti__maksupaiva">20.3.2020</div>
      <div className="kulukortti__ajanjakso">1.12.2019-28.2.2020</div>
      </div>
      <div className="kulukortti__rivi">
      <div className="kulukortti__laskuttaja">Fortum</div>
      <div className="kulukortti__keskiarvo">145,83€ / kk</div>
      </div>
    </div>
  );
}

function Menu(props) {
  return (
    <div className="menu">
      <div className="menu__nappi"><ViewList htmlColor="#fff" /></div>
      <div className="menu__nappi"><TrendingUp  htmlColor="#fff" /></div>
      <div className="menu__nappi"><Settings  htmlColor="#fff" /></div>
    </div>
  )
}

export default App;
