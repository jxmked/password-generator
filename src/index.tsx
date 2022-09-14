import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import HeaderPanel from './components/header-panel';
import InputPanel from './components/input-panel';
import Infos from './info';
import GA from 'ga-4-react';

const ga = new GA('G-YD5NP06JKV');

function App() {
/*
  useEffect(() => { 
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
       // dev
    } else {
      // prod
    }
  }, []); */

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

(async () => {
	ga.initialize().then((gai:any) => {
		gai.pageview(window.location.pathname);
		gai.gtag("working", 'page-loaded', window.location.pathname);

		root.render(
			<React.StrictMode>
				<App />
			</React.StrictMode>
		);
	}, (err:any) => console.error(err));
})();
