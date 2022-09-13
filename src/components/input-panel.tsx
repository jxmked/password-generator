import React, { useState } from "react";
import ListItem from './item-list-panel';
import './styles/input-panel.scss';
import algo from './algorithm';

const InputPanel = () => {
    const [getElement, setElements] = useState(<></>);
    
    return (
        <div className="panel">
            <div className="inputs">
                <form onSubmit={(evt) => {evt.preventDefault(); return false}}>
                    <input 
                        onKeyUp={(evt) => setElements(<ListItem items={algo(evt.currentTarget.value!)} />)}
                        required
                        autoComplete="off"
                        type="text"
                        placeholder="WIFI SSID"
                    />
                </form>
                {getElement}
            </div>
        </div>
    )
}

export default InputPanel;
