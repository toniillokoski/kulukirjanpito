import React from 'react';

import Kulukortti from '../Kulukortti/Kulukortti';
import Content from '../Content/Content';

function Items(props) {
    return (
      <Content>
        <Kulukortti />
        <Kulukortti />
        <Kulukortti />
        <Kulukortti />
      </Content>
    );
  }

  export default Items;