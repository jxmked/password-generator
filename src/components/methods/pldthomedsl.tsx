import Dictionary from "./Dictionary";

class v1 extends Dictionary {
    constructor(value:string) {
        super();
        
        this.value = value;
        this.prefix = "wlan";
        this.test_pattern = new RegExp("^(PLDTHOMEDSL)([0-9]{3,7})$", "gi");
        this.__postfix_matcher = new RegExp("(?<=(PLDTHOMEDSL))([0-9]{3,7})", "gi");
    }
    
    get password():string {
        let postfix:string = this.value.match(this.__postfix_matcher)!.join("");
        return this.prefix + Number(postfix) * 3;
    }
}

class v2 extends Dictionary {
    constructor(value:string) {
        super();
        this.value = value;
        this.prefix = "PLDTWIFI";
        this.test_pattern = new RegExp("^(PLDTHOMEDSL)([a-fA-F0-9]{3,7})$", "gi");
        this.__postfix_matcher = new RegExp("(?<=(PLDTHOMEDSL))([a-fA-F0-9]{3,7})","gi");
    }

    get password():string {
        let postfix:string = this.value.match(this.__postfix_matcher)!.join("");
        return this.prefix + this.opposites(postfix, {version:'v1'});
    }
}

class v5 extends v2 {
    get password():string {
        let postfix:string = this.value.match(this.__postfix_matcher)!.join("")

	// Convert to decimal
	try {
	    let dec:number = parseInt(postfix, 16);
	    return this.prefix + (dec * 3);
	} catch(err:any){
	    return "--Error--";
	    //throw new Error("Hex is out of index");
	}

    }
}

class v3 extends v1 {
    constructor(value:string){
        super(value);
        this.prefix = "PLDTWIFI";
    }
}

/*
class v4 extends v2 {
    constructor(value:string){
        super(value);
        this.prefix = "wlan";
    }
} */

const selections = [v1, v2, v3, v5];

export default selections;
