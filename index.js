import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App/App.js';
import './App/App.css';
import './App/App.test.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
