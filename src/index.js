import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

console.log(process.env.REACT_APP_MY_VARIABLE);

ReactDOM.render(<App />, document.getElementById('root'));
