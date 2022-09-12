import React from "react";
/**
 * Structure in here
 */

interface Options {
    validate:(str:string) => boolean;
    func:(str:string) => string;
}

type methodType = {[key:string]:Options};

const methods:methodType = {
    PLDTHOMEDSL:  {
        validate:(str:string):boolean => {
            // Regex here to test if its qualified to process here
            return true;
        },
        func:(str:string):string => {
            return String();
        }
    },
    PLDTHOMEFIBR:  {
        validate:(str:string):boolean => {
            // Regex here to test if its qualified to process here
            return true;
        },
        func:(str:string):string => {
            return String();
        }
    },
    PLDTFIBR: {
        validate:(str:string):boolean => {
            // Regex here to test if its qualified to process here
            return true;
        },
        func:(str:string):string => {
            return String();
        }
    },
    PLDTWIFI: {
        validate:(str:string):boolean => {
            // Regex here to test if its qualified to process here
            return true;
        },
        func:(str:string):string => {
            return String();
        }
    }
}

const get_method:Function = (str:string):string => {
    return String();
}


export default (str:string):string[] => {
    const mthd:string = get_method(str);
    const pwds:string[] = [];
    
    // try in every methods
    for(const [k, v] of Object.entries(methods))
        if(v.validate(str))
            pwds.push(v.func(str))
    
    return pwds;
}
