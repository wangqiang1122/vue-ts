
// @ts-ignore
let a: string;
a = '叫啊叫啊叫';


function greating(preson: string): string {

     return 'ddddd';
}

function warnUser(message?: any): void {

    alert('22222')
}


// 函数重载

function info(a: {name: string}): string;

function info(a: string): {name: string};

function info(a: { name: string } | string): {name: string} | string {
    if (typeof a === 'object') {
        return a.name;
    } else {
        return { name: a };
    }
}

// 类

class Myapp {
    private _foo: string='3333'; // 私有属性不能继承
    protected _bar: string; // 保护属性可以继承
    public big: string='big'; // 公共的
    constructor(protected n: string, bar = '2222') {
      console.log(n)
        this._bar = bar;
    }
    get foo() {
      return this._foo;
    }
    set foo(val: string) {
       this._foo = val;
    }
}// 直接去


class SubMyapp extends Myapp{
    constructor(a: string) {
        super(a)
        // this._bar;
        // this.big;
    }
}
const comp1 = new Myapp('ddd');
const comp2 = new Myapp('dddd')
comp1.foo;
comp1.big;
