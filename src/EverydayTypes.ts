/**
 * 원시타입 문법
 * */
let numberType: number = 1234; //숫자 타입
let stringType: string = 'ABCD'; //문자 타입
let booleanType: boolean = true; //불린 타입
let undefinedType: undefined = undefined; //undefined 타입
let nullType: null = null; //null 타입
let symbolType: symbol = Symbol.for('abc');

//고정된 원시값을 넣을 수도 있어요
const number:5 = 5;

/**
 * 특별한 경우가 아니면 쓰지 말아야 하는 타입
 * **/
let anyType:any = "123123"
anyType = "ABC";

/**
 *
 * */

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

/**
 * 배열
 */
const stringArray: string[] = ['1','2','3'];
console.log(stringArray);

const numberArray: number[] = [1,2,3];
console.log(numberArray);

//Tuple은 고정된 배열을 의미합니다.
const tuple: [number,string,string,number] = [3,'1','2',3];
console.log(tuple);

/**
 * 객체
 */
const object: {data:number,test:string} = {data:1,test:'test'};
console.log(object);