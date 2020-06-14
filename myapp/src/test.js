"use strict";
// @ts-ignore
let a;
a = '叫啊叫啊叫';
function greating(preson) {
    return 'ddddd';
}
function warnUser(message) {
    alert('22222');
}
function info(a) {
    if (typeof a === 'object') {
        return a.name;
    }
    else {
        return { name: a };
    }
}
// 类
class Myapp {
    constructor(n, bar = '2222') {
        this.n = n;
        this._foo = '3333'; // 私有属性不能继承
        this.big = 'big'; // 公共的
        console.log(n);
        this._bar = bar;
    }
    get foo() {
        return this._foo;
    }
    set foo(val) {
        this._foo = val;
    }
} // 直接去
class SubMyapp extends Myapp {
    constructor(a) {
        super(a);
        // this._bar;
        // this.big;
    }
}
const comp1 = new Myapp('ddd');
const comp2 = new Myapp('dddd');
comp1.foo;
comp1.big;
//# sourceMappingURL=test.js.map