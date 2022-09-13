import Dictionary from "./Dictionary";

class v1 extends Dictionary {
    constructor(value:string) {
        super();
        this.value = value;
        this.prefix = "PLDTWIFI";
        this.test_pattern = new RegExp("^(PLDTHOMEFIBR)([a-f0-9]{3,7})$", "gi");
        this.__postfix_matcher = new RegExp("(?<=(PLDTHOMEFIBR))([a-f0-9]{3,7})","gi");
    }

    get password():string {
        let postfix:string = this.value.match(this.__postfix_matcher)!.join("");
        return this.prefix + this.opposites(postfix, {version:'v1'});
    }
}

class v2 extends v1 {
    constructor(value:string) {
        super(value);
        this.test_pattern = new RegExp("^(PLDTHOMEFIBR_)([a-f0-9]{3,7})$", "gi");
        this.__postfix_matcher = new RegExp("(?<=(PLDTHOMEFIBR_))([a-f0-9]{3,7})","gi");
    }
} 

class v3 extends v1 {
    constructor(value:string) {
        super(value);
        this.test_pattern = new RegExp("^(PLDTFIBR)([a-f0-9]{3,7})$", "gi");
        this.__postfix_matcher = new RegExp("(?<=(PLDTFIBR))([a-f0-9]{3,7})","gi");
    }
} 

class v4 extends v1 {
    constructor(value:string) {
        super(value);
        this.test_pattern = new RegExp("^(PLDTFIBR_)([a-f0-9]{3,7})$", "gi");
        this.__postfix_matcher = new RegExp("(?<=(PLDTFIBR_))([a-f0-9]{3,7})","gi");
    }
}

class v5 extends v1 {
    constructor(value:string) {
        super(value);
        this.prefix = "wlan";
    }
}

class v6 extends v2 {
    constructor(value:string) {
        super(value);
        this.prefix = "wlan";
    }
}

class v7 extends v3 {
    constructor(value:string) {
        super(value);
        this.prefix = "wlan";
    }
}

class v8 extends v4 {
    constructor(value:string) {
        super(value);
        this.prefix = "wlan";
    }
}

const selections = [v1, v2, v3, v4, v5, v6, v7, v8];


export default selections;
