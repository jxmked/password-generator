interface DictionaryOppositesProperties {
    version:'v1'|'v2'|'v3';
}

export default class Dictionary {
    static version_1:string[] = "0123456789abcdef".split("");
    static version_2:string[] = "ghijklmnopqrstuvwxyz".toUpperCase().split("");
    static version_3:string[] = [...Dictionary.version_1, ...Dictionary.version_2];
    test_pattern:RegExp;
    value:string;
    prefix:string;
    __password:string;
    __postfix_matcher:RegExp;
    
    constructor(){
        this.test_pattern = /()/;
        this.__postfix_matcher = /()/;
        this.value = "";
        this.prefix = "";
        this.__password = "";
    }
    
    opposites(value:string, {version}:DictionaryOppositesProperties):string {
        const dict:string[] = {
            v1:Dictionary.version_1,
            v2:Dictionary.version_2,
            v3:Dictionary.version_3
        }[version];
        
        return value.split("").map((c:string) => {
            let index:number = dict.indexOf(c);
            if(index === -1) {
                throw new Error("Out of index");
            }
            return dict[dict.length - 1 - index];
        }).join("");
    }
    
    test():boolean {
        return this.test_pattern.test(this.value);
    }
}
