import React from 'react';
import { render } from 'react-dom';

import './sass/index.scss';

let App = React.createClass({
  render: function(){
    return (
      <div className="app">
        Hello Electron!
      </div>
    )
  }
});

render(
  <App />,
  document.getElementById('root')
);
