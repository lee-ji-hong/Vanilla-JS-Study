//1. Use strict
//added in Es 5
//use this for Vanilla Javascript
'use strict';
//위의 use 선언은 사용되지 않은 언어를 확인 하기 위한 것 

/*Variable (변수)
2. let (added in Es6)
-mutable type
- let을 이용해서 변수 사용가능
*/
console.log(name);
name = 'hello';
//let:변수를 선언할 수있는 유일한 키워드
// let으로 선언된 변수는 그 아래에 사용 가능
//변수에 값의 재정의가 필요하다고 판단 될 때

console.log(name);

/*block scope {} vs global scope 
 block scope : 대괄호안에 있는 코드를 의미하는데
 블록 안에 존재하는 코드끼리만 소통가능하고 그외로는 소통 불가
 
 global scope : 대괄호 안팎으로 소통 가능 */

 /*let 이전에는 var 가 존재했는데 지금은 사용하지 않음
 프로그래밍 언어에서는 변수를 선언하고 값을 할당하는것이 대부분인데
 js var에서는 선언도 하기 전에 값을 할당 할 수 있다. 
 심지어 값을 할당하기도 전에 출력이 가능하다.
 
 또한 var는 block scope 을 무시하기 때문에 최근에는 사용하지 않는다.*/
 for(var i = 0; i < 10; i++) {
     var a = "hong";
     var b = "mango";
 }

 console.log(a,b);

 //var hoisting : 어디로 선언햇냐와 상관없이 항상 제일위로 선언을 끌어올리는 방식
 
 console.log(age);
 age = 4;
 console.log(age);
var age;

/* 3. Constants : 값을 할당하면 절대 수정되지 않는 방식
favor immutable data type always for a few reason;
웬만하면 let으로 변수 설정해두고 그 후에 constant 선언으로 바꿔라 
그 이유는 
*constans의 장점 
-immutable type
-security
- threa safety : 보통은 여러가지 변수들이 동시에 thread에 접근을 하게 되는데
이것이 위험부담이 크다
-reduce human mistakes
*/
const daysInWeek = 7;
console.log(daysInWeek);
const maxNumber = 5;
console.log(maxNumber);

