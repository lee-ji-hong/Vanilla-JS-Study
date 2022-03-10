//TODO
// [x] 게임에 몇 명이 참가할 지를 선택한다
// [x] 참가자 순서를 정한다(편의상 숫자로 한다.)
// [x] A가 제시어를 입력 한 후 입력 버튼 클릭
// [x] A가 입력한 단어가 출력된다.(제시어가 비어있을 경우 A가 입력한 값을 출력한다.)
// [] B는 A가 말할 단어의 끝음절로 시작하는 단어를 말한다.
// [] 절차 4번에서 말한 단어가 올바른지 판단한다
// [] 올바를 경우 c는 B가 말할 단어의 끝음절로 시작하는 단어를 말한다.
// [] 올바르지 않을 경우에는 실패라고 표시한다.
// [] 게임을 처음부터 다시 진행한다.

const number = Number(prompt("몇 명1이 참가하나요?"));
const $button = document.querySelector(".btn-ghost");
const $input = document.querySelector(".main-input");
const $word = document.querySelector("#word");
let word; //제시어(제시어는 빈 값으로 놔둔다)
let newWord;

// 입력 버튼 클릭 이벤트
const onClickButton = () => {
  if (!word) {
    //제시어가 비어있는가?
    //비어있다.
    word = newWord;
    $word.textContent = word;
  } else {
    //비어 있지 않다.
  }
};

// input에 글자 입력 이벤트
const onInput = (e) => {
  console.log("입력", e.target.value);
};

$button.addEventListener("click", onClickButton);
$input.addEventListener("input", onInput);
