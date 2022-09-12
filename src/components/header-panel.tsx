import React from "react";
import "./styles/header-panel.scss";

interface Props {
    title:string;
}
export default ({title}:Props) => {
    return (
        <div className="panel">
            <h3>{title}</h3>
        </div>
    )
}
