import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import HeaderPanel from './components/header-panel';
import InputPanel from './components/input-panel';
import Infos from './info';
import GA from 'react-ga4';

GA.initialize('G-YD5NP06JKV');

function App() {

  /* useEffect(() => { 
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
       // dev
    } else {
      // prod
    }
  }, []); */
  GA.send('pageview');
  
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

const render = () => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
};

render();


