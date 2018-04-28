import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import IfasStore from './ifasStore'

window.ifasStore = IfasStore;
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
