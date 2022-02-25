//조건문
const animals = [
  { name: "lion", size: "big" },
  { name: "monkey", size: "medium" },
  { name: "dog", size: "small" },
];

//1)if문 : ~하다면 ~ 해라
//== : 데이터타입 비교 안함
//=== : 데이터타입까지 비교함
//웬만해서는 ===를 사용해서 데이터타입까지 비교하는 코드를 사용하기를 지향함
//이유는 오류를 줄이기 위해
const num = 10;
if (num == 10) {
  console.log("10입니다");
}
//2)if-else문 : ~~하다면 ~~하고, 그렇지 않다면 ~~해라
const a = 10;
if (a > 15) {
  console.log("a 가 15 큽니다.");
} else {
  console.log("a 가 15보다 크지 않습니다.");
}
//결과: "a 가 10보다 크지 않습니다."

//3)if-elseif문
const a = 10;
if (a === 5) {
  console.log("5입니다!");
} else if (a === 10) {
  console.log("10입니다!");
} else {
  console.log("5도 아니고 10도 아닙니다.");
}
//결과 : "10입니다!"

//4)switch/case 문 : 특정 값이 무엇이냐에 따라 다른 작업을 하고 싶을 때 사용
//device 값에 따라서 다른 결과가 출력된다.
//각 case 에서 실행할 코드를 작성하고 맨 마지막에 break; 를 해주어야 한다.
// break 를 하지 않으면 그 다음 case 의 코드까지 실행해버린다.
//맨 아래의 default: 는 device 값이 우리가 case 로 준비하지 않은 값일 경우를 의미한다.

const device = "iphone";

switch (device) {
  case "iphone":
    console.log("아이폰!");
    break;
  case "ipad":
    console.log("아이패드!");
    break;
  case "galaxy note":
    console.log("갤럭시 노트!");
    break;
  default:
    console.log("모르겠네요..");
}
