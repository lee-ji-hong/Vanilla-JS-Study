//TODO입력문을 저장한다
// [x] 첫번째 숫자를 저장할 변수를 만든다
// [x] 연산자를 저장할 변수를 만든다.
// [x] 두번째 숫자를 저장할 변수를 만든다

//TODO숫자버튼 클릭 이벤트
// [x] 숫자 버튼을 클릭하면 해당 숫자를 변수에 저장한다
// [] 숫자를 누르지 않고 연산자 버튼을 먼저 누른 경우에 alert창이 뜬다
// [] 두번째 숫자를 입력할 때 연산자가 입력되어있지 않으면 alert창이 뜬다

//TODO연산자버튼 클릭 이벤트
// [] 연산자 버튼을 클릭하면 해당 숫자를 변수에 저장한다

//TODO결과(=)버튼 클릭 이벤트
// [] 두번째 숫자가 존재하지 않을 경우 alert 창이 뜬다.
// [] 숫자 1과 숫자 2에 연산자를 적용해 계산한다
// [] 계산 결과를 화면에 출력한다

let numOne = "";
let operator = "";
let numTwo = "";

const $ = (selector) => document.querySelector(selector);
const operatorInput = $("#operator");
const resultInput = $("#result");
const onClickNumber = (e) => {
  if (operator) {
    numTwo += e.target.textContent;
  } else {
    numOne += e.target.textContent;
  }
  resultInput.value += e.target.textContent;
};

$("#num-0").addEventListener("click", onClickNumber);
$("#num-1").addEventListener("click", onClickNumber);
$("#num-2").addEventListener("click", onClickNumber);
$("#num-3").addEventListener("click", onClickNumber);
$("#num-4").addEventListener("click", onClickNumber);
$("#num-5").addEventListener("click", onClickNumber);
$("#num-6").addEventListener("click", onClickNumber);
$("#num-7").addEventListener("click", onClickNumber);
$("#num-8").addEventListener("click", onClickNumber);
$("#num-9").addEventListener("click", onClickNumber);
$("#plus").addEventListener("click", onClickNumber);
$("#minus").addEventListener("click", onClickNumber);
$("#divide").addEventListener("click", onClickNumber);
$("#clear").addEventListener("click", onClickNumber);
$("#multiply").addEventListener("click", onClickNumber);
$("#calculate").addEventListener("click", onClickNumber);
