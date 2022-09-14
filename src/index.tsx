import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import HeaderPanel from './components/header-panel';
import InputPanel from './components/input-panel';
import Infos from './info';
import GA from 'ga-4-react';

const ga = new GA('G-YD5NP06JKV');

function App() {
  useEffect(() => { 
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
       // dev
    } else {
      // prod
      (async (sw, scope) => {
      	if('serviceWorker' in navigator){
	   try {
	   	const nsw = await navigator.serviceWorker.register(sw, {scope:scope});
		if(nsw.installing)
			console.log("Making available offline");
		else if(nsw.waiting)
			console.log("Available Offline");
		else if(nsw.active)
			console.log("Currently Serving as Offline");
	   } catch(err){
	   	console.error(err);
	   }
	}	
      })("/sw.js", "/");
    }
  }, []);

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
