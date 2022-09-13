import ReactGA from 'react-ga';
import a from './methods/pldthomedsl';
import b from './methods/pldthomefibr';

const methods:any = [...a, ...b]

const Algorithm:Function = (value:string):string[] => {
    const possible:string[] = [];
    
    // Removing White Spaces between characters
    // Replace All does not support es5 library
    value = value.split(" ").join("").toLowerCase();
    
    if(value.length > 8){
        ReactGA.event({
            category: 'event',
            action: value
        });
    }

    for(const ClassObject of methods) {
        const obj:ReturnType<typeof ClassObject> = new ClassObject(value);
        
        if(obj.test())
            possible.push(obj.password);
    }
    
    return possible;
}

export default Algorithm;
