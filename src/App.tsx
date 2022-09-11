import React, { useState } from 'react';
import './App.scss';
import { useCopyToClipboard } from 'usehooks-ts'

const generate_password:Function = (value:string) => {
  return value.split('').map((c:string) => {
    return (
     <li>{c}</li>
    )
  })
}

const get_password = () => {

};

function App() {
  

  return (
    <div className="container">
      <div>
        <div className='panel'>
          <h3>PLDT WIFI SSID</h3>
        </div>
        <div className='panel'>
          <div className="input-group">
            <input required type="text" name="text" autoComplete='false' className="ssid" />
            <label className="ssid-label">SSID</label>
          </div>
        </div>
        <div className='panel'>
          <ul className='pwd-list'>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
