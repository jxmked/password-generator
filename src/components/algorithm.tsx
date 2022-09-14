import a from './methods/pldthomedsl';
import b from './methods/pldthomefibr';
import GA from 'react-ga4';

const eventAction:Function = (value:string) => { 
  GA.event({
    action:"keyup",
    category:"generated_value",
    //value:String(value),
    label:value
  });
};

const methods:any = [...a, ...b];

const Algorithm:Function = (value:string):string[] => {
  const possible:string[] = [];
    
    // Removing White Spaces between characters
    // Replace All does not support es5 library
    value = value.split(" ").join("").toLowerCase();

    if(value.length > 7)
       eventAction(value);

    methods.forEach((method:any) => {
        const obj:ReturnType<typeof method> = new method(value);
	if(obj.test())
	    possible.push(obj.password);
    });

    return possible;
}

export default Algorithm;


