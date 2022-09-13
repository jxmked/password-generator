import a from './methods/pldthomedsl';
import b from './methods/pldthomefibr';

const methods:any = [...a, ...b]

const Algorithm:Function = (value:string):string[] => {
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

export default Algorithm;
