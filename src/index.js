import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './index.css';
import 'grommet/grommet.min.css';

import registerServiceWorker from './registerServiceWorker';

import * as serviceGateway from './api/gateway';

serviceGateway.init({
  url: 'http://localhost:8081', // set your service url explicitly. Defaults to the one generated from your OpenAPI spec
  getAuthorization // Add a `getAuthorization` handler for when a request requires auth credentials
});

function getAuthorization() {
  return {
    token: ''
  };
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
