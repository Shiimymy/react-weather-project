import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <App />
    <footer>
          <p>
            Coded by <a href="https://deft-banoffee-8f140b.netlify.app/" target="_blank" rel="noreferrer noopener" className="infoLinks">Eugénie BvN</a>, and open source on <a href="https://github.com/Shiimymy/react-weather-project" target="_blank" rel="noreferrer noopener" className="infoLinks">Github</a>
          </p>
        </footer>
    </div>
  </React.StrictMode>
);

reportWebVitals();
