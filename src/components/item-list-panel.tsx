import React from "react";

interface Props {
    items:string[];
}

const ListItem = ({items}:Props) => {
    const elements:JSX.Element[] = items.map((item:string) => {
        return (
            <li key={"__" + item}>{item}</li>
        )
    });

    return (
        <ul className="pwd-list">{elements}</ul>
    )
}

export default ListItem;
