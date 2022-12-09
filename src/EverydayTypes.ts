/**
 * 원시타입 문법
 * */
const numberType: number = 1234; //숫자 타입
const stringType: string = 'ABCD'; //문자 타입
const booleanType: boolean = true; //불린 타입
const undefinedType: undefined = undefined; //undefined 타입
const nullType: null = null; //null 타입
const symbolType: symbol = Symbol.for('abc');
/**
 * 특별한 경우가 아니면 쓰지 말아야 하는 타입
 * **/
let anyType:any = "123123"
anyType = "ABC";

/**
 * 함수
 * **/
//일반함수
function fun(x: number, y:number):number {return x+y};
console.log(fun(5,6));
//화살표 함수
const arrowFun: (x:number,y:number) => number  = (x,y) => x+y;
console.log(arrowFun(5,6));
//요렇게도 쓸 수 있어요
type arrow = (x:number,y:number) => number
const arrowFun2: arrow = (x,y) => x+y;
console.log(arrowFun2(5,6));
