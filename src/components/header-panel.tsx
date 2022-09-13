import React from "react";
import "./styles/header-panel.scss";

interface Props {
    title:string;
}
const Head = ({title}:Props) => {
    return (
        <div className="panel">
            <h3>{title}</h3>
        </div>
    )
}

export default Head;
