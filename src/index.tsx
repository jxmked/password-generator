import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import HeaderPanel from './components/header-panel';
import InputPanel from './components/input-panel';
import Infos from './info';
import registerServiceWorker from './serviceWorker-Installer';


/***
 * Method 1: PLDTHOMEDSL12345 -> <last 5 number > * 3 -> PLDTWIFI<Result>
 * Method 2: PLDTHOMEFIBR_cdf123 -> <chars after _> -> convert to dict -> wlan<Result>
 * 
 */
function App() {
  registerServiceWorker();
  
  return (
    <div className="container">
      <div>
       <HeaderPanel
          title='PLDT WiFi'
       />
       <InputPanel
          placeHolder='PLDT Wifi SSID'
       />

        <Infos />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
