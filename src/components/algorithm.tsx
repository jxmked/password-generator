import React from "react";
import b from './methods/pldthomedsl';
import c from './methods/pldthomefibr';

const methods:any = [...b, ...c]

export default (value:string):string[] => {
    const possible:string[] = [];
    // Removing White Spaces between characters
    // Replace All does not support es5 library
    value = value.split(" ").join("");
    
    for(const ClassObject of methods) {
        const obj:ReturnType<typeof ClassObject> = new ClassObject(value);
        
        if(! obj.test())
            continue;
        
        possible.push(obj.password);
    }
    
    return possible;
}
