import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import HeaderPanel from './components/header-panel';
import InputPanel from './components/input-panel';
import Infos from './info';
import ReactGA from 'react-ga';

ReactGA.initialize('G-YD5NP06JKV');

function App() {
  useEffect(() => { 
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <div className="container">
      <div>
        <HeaderPanel/>
        <InputPanel/>
        <Infos/>
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
