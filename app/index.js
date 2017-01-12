import React from 'react';
import { render } from 'react-dom';

import './sass/main.scss';

let Entry = React.createClass({
  render: function(){
    return (
      <div className="myDiv">
        Hello Electron!
      </div>
    )
  }
});

render(
  <Entry />,
  document.getElementById('root')
);
