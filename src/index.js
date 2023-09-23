import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Auth0Provider
        domain="dev-3d8vugkh5yocynym.us.auth0.com"
        clientId="zMUWV2nbGfNuJsZSBK1atd21L93EaIZ9"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
    >
        <App />
    </Auth0Provider>
);

