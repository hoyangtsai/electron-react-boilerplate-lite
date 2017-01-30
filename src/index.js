import React from 'react';
import { render } from 'react-dom';

import './sass/index.scss';

class App extends React.Component {
  render() {
    return (
      <h1 className="app">
        Hello world!!
      </h1>
    )
  }
}

render(
  <App />,
  document.getElementById('root')
);
