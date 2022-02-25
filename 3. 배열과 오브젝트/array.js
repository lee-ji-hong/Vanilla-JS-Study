//배열과 오브젝트

/*1. array : 여러가지 값들을 하나로 묶어서 나열하는 것
-대괄호로 묶어서 각각의 값들을 표현
-문자열과 숫자열을 섞어서 배열을 만들 수도 있다.
-index 번호는 순서대로 0,1,2,3...
*/

// 1)기본 배열 방식
const animals = ["lion", "rabbit", "monkey"];
console.log(animals);

//2) 배열에 값을 추가하고 싶을때

// - 배열이 작을 경우 직접 index 번호를 지정해서 줄 수 있다
const animals = ["lion", "rabbit", "monkey"];
animals[3] = "tiger";
console.log(animals);

// - 배열이 몇번인지 알 수 없을 정도로 길 경우 맨 처음 혹은 맨 마지막으로 지정해줄 수 있다
const animals = ["lion", "rabbit", "monkey"];
//unshift : 맨 처음
animals.unshift("dog");
//push : 맨 마지막
animals.push("tiger");
console.log(animals);

//3)배열의 값을 추출하고 싶을 때
//- pop : 배열의 맨 뒤에서 부터 추출
//pop를 한 번 호출하면 맨 뒤의 값이 빠지고, 계속해서 호출하면 뒤에서부터 값이 빠진다.
const animals = ["lion", "rabbit", "monkey"];
animals.pop();
console.log(animals);

//-splice: 배열에 어떤 값을 빼고 싶을 때
//splice(빼고싶은 인덱스 시작 번호,개수)
const animals = ["lion", "rabbit", "monkey", "dog", "cat"];
animals.splice(0, 2); //0번째 인덱스부터 2개 추출 =>"monkey", "dog", "cat" 3개만 반환
console.log(animals);

//-slice: 배열에 어떤 값을 빼고 싶을 때
//slice(start?: number, end?: number)
const slicedAnimals = animals.slice(0, 2);
console.log(slicedAnimals, animals);
//slicedAnimals => index가 0부터 2의 앞자리까지 반환
//animals => 변화가 없다
//즉 splice는 배열 전체에 변화를 주지만 slice는 배열을 바꾸지는 않고 값만 반환한다
//둘 중 편하고 쉬운 것을 상황에 맞게 사용하면 된다.

//4) Array.isArray() : 어떤 값이 배열인지 알 수 있는 방법
//배열인 경우에는 true, 배열이 아닌 경우에는 false를 반환
const animals = ["lion", "rabbit", "monkey"];
const fruits = "apple, banana, strawberry";
console.log(Array.isArray(animals)); //true
console.log(Array.isArray(fruits)); //false

//5)배열의 index번호를 알아내는 법

//-배열의 개수가 짧을 때
//console.log를 통해서 index를 직접 출력시킨 후 확인
const animals = ["lion", "rabbit", "monkey"];
console.log(animals);

//-indexOf: 배열의 개수가 많을 때
const animals = ["lion", "rabbit", "monkey"];
console.log(animals.indexOf("monkey")); //2가 출력된다
