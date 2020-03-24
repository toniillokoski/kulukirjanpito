import React from 'react';
import moment from 'moment';
import './Kulukortti.css';

function Kulukortti(props) {

    let maksupaiva = moment(props.data.maksupaiva);
    let kausi = "";
    let keskiarvo;

    if (props.data.kaudenalku && props.data.kaudenloppu) {
      let kaudenalku = moment(props.data.kaudenalku);
      let kaudenloppu = moment(props.data.kaudenloppu);
      kausi = kaudenalku.format("D.M.Y") + " - " + kaudenloppu.format("D.M.Y");
      let paivat = kaudenloppu.diff(kaudenalku, 'days');
      keskiarvo = props.data.summa / paivat * 30;
    }

    return (
      <div className="kulukortti">
        <div className="kulukortti__rivi">
        <div className="kulukortti__tyyppi">{props.data.tyyppi}</div>
        <div className="kulukortti__summa">{props.data.summa.toFixed(2)} €</div>
        </div>
        <div className="kulukortti__rivi">
        <div className="kulukortti__maksupaiva">{maksupaiva.format("D.M.Y")}</div>
        <div className="kulukortti__ajanjakso">{kausi}</div>
        </div>
        <div className="kulukortti__rivi">
        <div className="kulukortti__laskuttaja">{props.data.saaja}</div>
        <div className="kulukortti__keskiarvo">{ keskiarvo ?  keskiarvo.toFixed(2) + "€ / kk" : ""}</div>
        </div>
      </div>
    );
  }

export default Kulukortti;