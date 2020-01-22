import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import history from './components/utils/history';
import { AUTH_CONFIG } from './components/Auth/auth0-variables';
import { Auth0Provider } from './components/Auth/Auth';

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
  console.log('TCL: appState', appState);
  console.log('TCL: window.location.pathname', window.location.pathname);
};

ReactDOM.render(
  <Auth0Provider
    domain={AUTH_CONFIG.domain}
    client_id={AUTH_CONFIG.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
