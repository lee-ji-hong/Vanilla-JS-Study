/*2. Object : 어떠한 대상을 속성(key)과 값(value)으로 나눌 수 있는 쌍을 이루는 데이터
-index번호가 없다.  
*/

//1) 기본 방식
const monkey = {
  name: "kiki",
  age: 5,
  weight: 40,
  gender: "male",
  inCute: true,
  food: ["banana", "carrot", "potato"], //배열 형태로 key를 선언 할 수 있다.
  home: {
    location: "zoo",
    size: "big",
    price: 3000,
  }, //object 안에 또 다른 object를 넣을 수 있다.
};

console.log(monkey); //key와 value가 반환된다.

//2) 어떤 key 값을 추출하고 싶을 때 2가지 방법

console.log(monkey["name"]);
console.log(monkey.name);

//3)Object 안의 key 값을 변경하고 싶을 때
//- object는 const로 선언이 되었지만 그 안의 key 값은 아니기 때문에 변경이 가능하다
monkey.gender = "female";
console.log(monkey.gender);

//4)object 안에 있는 배열 추출하는 법
console.log(monkey.food[1]); //carrot 추출됨

//json(Javascript Object Notation) : object와 흡사한 형태를 지니고 있음
//-Object형태와 차이점은 key 값이 쌍따옴표로 표시한다
//- 데이터를 주고 받을 때(전송) 문자열 형태로 한번에 보내고 그것을 일정 규칙에 의해서 재사용도 가능하게 함
//-json.stringify : object가 json화 된다
const monkeyJSON = JSON.stringify(monkey);
console.log(monkeyJSON);

/*결과값
{"name":"kiki",
  "age": 5,
  "weight": 40,
  "gender": "male",
  "inCute": true,
  "food": ["banana", "carrot", "potato"], //배열 형태로 key를 선언 할 수 있다.
  "home": {"location": "zoo","size": "big","price": 3000,}
  }
*/

//-json.parse : json화된 것이 다시 object화 된다
const monkeyJSON = JSON.stringify(monkey);
const parsedJSON = JSON.parse(monkeyJSON);
console.log(parsedJSON);
/*결과값
name: "kiki",
  age: 5,
  weight: 40,
  gender: "male",
  inCute: true,
  food: ["banana", "carrot", "potato"], //배열 형태로 key를 선언 할 수 있다.
  home: {
    location: "zoo",
    size: "big",
    price: 3000,
  },*/
