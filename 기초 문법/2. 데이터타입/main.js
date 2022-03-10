//데이터 타입
//String, Number, boolean, null, undefinded

/*
primitive(더이상 나눠질 수 없는 한가지 싱글아이템) single item : number, string,boolean,null,undefiedn,symbol
object,box container : single item들을 box로 묶은 거
function,first-class function : 다른 변수들 처럼 데이터 타입에 할당이 가능 
*/

/*
*1.String :js에서 모든 글자 타입 선언할 때 사용
*/
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value : ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
//template literals(string) : `$`를 사용해서 간편하게 출력하는 기법
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//js에서는 숫자 타입을 number 하나로만 구분한다.
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count} , type: ${typeof count}`);
console.log(`value: ${size} , type: ${typeof size}`);

//*2.number : special numeric values : infinity,-infinity,nan
//항상 연산을 할때 그 값이 유효한 값인지 확인을 해야한다
//아래에는 일어나는 여러가지 오류들의 예시
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' /2;
console.log(infinity);
console.log(negativeInfinity);

console.log(nAn);

//추가된 숫자 타입 
// *bigInt (fairly new, don't use it yet)
const bigInt = 1234567891234567894561231234567890n;
//(-2**53승 ~ 2**53승)까지 인식
//chrome + firefox에서ㄴ만 사용가능
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

/*
*3.boolean : 참/거짓
false : 0,null,undefined,NaN,''
true : any other value */
const conRead = true;
const test = 3<1; //false
console.log(`value: ${conRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);


//4.null : 아무것도 없는 것
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//5.undefined :선언은 되었지만 아무런 값이 지정되지 앟은 것