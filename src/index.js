import React from 'react';
import { render } from 'react-dom';

import './sass/index.scss';

let App = React.createClass({
  render: function(){
    return (
      <h1 className="app">
        Hello world!!
      </h1>
    )
  }
});

render(
  <App />,
  document.getElementById('root')
);
