/// <reference path="../../../typings/index.d.ts" />

class hoge {
    hoge:string
    constructor(){
        this.hoge = "あああ";
        this.init();
    }
    init() {
        console.log('あいあ');
    }
}
module.exports = hoge;