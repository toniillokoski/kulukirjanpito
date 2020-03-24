import React from 'react';

import Kulukortti from '../Kulukortti/Kulukortti';
import Content from '../Content/Content';

function Items(props) {

    let rows = props.data.map(invoice => {
        return (
          <Kulukortti data={invoice} />
        )
      }
    );

    return (
      <Content>
        {rows}
      </Content>
    );
  }

  export default Items;