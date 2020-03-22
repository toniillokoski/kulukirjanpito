import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <Kulukortti />
        <Kulukortti />
        <Kulukortti />
    </div>
  );
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

export default App;
