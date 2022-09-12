import React, { KeyboardEventHandler, useState, useEffect } from "react";
import ListItem from './item-list-panel';
import './styles/input-panel.scss';
import algo from './algorithm';

interface Props {
    placeHolder:string
}

export default ({placeHolder}:Props) => {
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
                        placeholder={placeHolder}
                    />
                </form>
                {getElement}
            </div>
        </div>
    )    
}
