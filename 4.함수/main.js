//함수(function)
//인자로 값을 넘겨 받는 것

//1)기본 배열 방식
const item1 = 3000;
const item2 = 2000;
const item3 = 5000;

const loyalty = 1000;
//인자에 원하는 이름을 지정
function showPrice(price) {
  console.log(price + loyalty);
}
showPrice(item1);
showPrice(item2);
showPrice(item3);

//2) return을 통해서 값을 넘겨받는 형식
//-어딘가에 값을 담아놓고 싶을 때
function showPrice(price) {
  return price + loyalty;
}
//price1,2,3에 return 값을 담아놓음
const price1 = showPrice(item1);
const price2 = showPrice(item2);
const price3 = showPrice(item3);
//출력
console.log(price1); //4000
console.log(price2); //5000
console.log(price3); //6000

//3)함수 자체를 변수에 담아서 표현
const showPrice = function (price) {
  return price + loyalty;
};

console.log(showPrice(item1)); //4000

//4)화살표 함수
//위의 방법처럼 function 옆에 인자를 표현하지 않고 화살표로 표현
const showPrice = (price) => {
  console.log(price + loyalty);
};

showPrice(item1);
