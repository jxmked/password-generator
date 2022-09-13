import React from "react";


export default () => {
    const notes:string[] = [
        "PLDTHOMEDSLxxxxx",
        "PLDTHOMEDSLxxxxxx",
        "PLDTHOMEFibrxxxxxx",
        "PLDTHOMEFibr_xxxxxx",
        "PLDTFibr_xxxxxx"
    ];
    return (<>
        <div className="panel">Supported:
            <ul>
                {notes.map((str:string) => (<li>{str}</li>))}
            </ul>
        </div>
        <div className="panel">
            <label>May not work if</label>
            <ul>
                <li>Default password has been changed</li>
                <li>Moderm software version is updated</li>
            </ul>
        </div>
    </>);
}
