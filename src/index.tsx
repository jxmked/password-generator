import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import HeaderPanel from './components/header-panel';
import InputPanel from './components/input-panel';

const validate_ssid = (str:string) => {
  return /^(pldt)(home)?(fibr)([a-zA-Z0-9]{3,7})$/gi.test(str);
}


/***
 * Method 1: PLDTHOMEDSL12345 -> <last 5 number > * 3 -> PLDTWIFI<Result>
 * Method 2: PLDTHOMEFIBR_cdf123 -> <chars after _> -> convert to dict -> wlan<Result>
 * 
 */
function App() {
  /**
   * I am actually new in React and this is the best way i can do for now :)
   */
  const [getPWD, setSSID] = useState(<></>);
  const [valid, setValid] = useState(false);

  const dictionary:{[key:string]:string} = {
    "0":"f",
    "1":"e",
    "2":"d",
    "3":"c",
    "4":"b",
    "5":"a",
    "6":"9",
    "7":"8",
    "8":"7",
    "9":"6",
    "a":"5",
    "b":"4",
    "c":"3",
    "d":"2",
    "e":"1",
    "f":"0",
    "g":"Z",
    "h":"Y",
    "i":"X",
    "j":"W",
    "k":"V",
    "l":"U",
    "m":"T",
    "n":"S",
    "o":"R",
    "p":"Q",
    "q":"P",
    "r":"O",
    "s":"N",
    "t":"M",
    "u":"L",
    "v":"K",
    "w":"J",
    "x":"I",
    "y":"H",
    "z":"G"
  };

  const keyUpEvent = (str:string) => {
    str = str.trim();

    if(validate_ssid(str)) setValid(true);
    else {
      setValid(false);
      setSSID(<></>)
      return;
    }
    
    str = str.replace(/^(pldt)(home)?(fibr)/gi, "")
    const result:string = str.split("").map((c:string) => {
      return dictionary[c.toLowerCase()];
    }).join("");

    setSSID(<li>PLTWIFI{result}</li>);
  }

  return (
    <div className="container">
      <div>
       <HeaderPanel
          title='PLDT WiFi'
       />
       <InputPanel
          placeHolder='PLDT Wifi SSID'
       />
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
