import React from "react";
import './info.scss';

const Info:Function = () => {
    const notes:string[] = [
        "PLDTHOMEDSLxxxxx",
        "PLDTHOMEDSLxxxxxx",
        "PLDTHOMEFibrxxxxxx",
        "PLDTHOMEFibr_xxxxxx",
        "PLDTFibr_xxxxxx"
    ];
    return (<>
        <div className="panel info">
            <label>Supported:</label>
            <ul>
                {notes.map((str:string) => (<li>{str}</li>))}
            </ul>
        </div>
        <div className="panel info">
            <label>May not work if</label>
            <ul>
                <li>Default password has been changed</li>
                <li>Moderm software version is updated</li>
            </ul>
        </div>
    </>);
}


export default Info;
