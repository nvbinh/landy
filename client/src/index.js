import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import App from './App';

// import * as api from './app/api';
import Router from './app/routes';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
// registerServiceWorker();
