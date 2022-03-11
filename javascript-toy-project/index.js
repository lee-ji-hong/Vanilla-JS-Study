//TODO
// [x] 게임에 몇 명이 참가할 지를 선택한다
// [x] 참가자 순서를 정한다(편의상 숫자로 한다.)
// [x] A가 제시어를 입력 한 후 입력 버튼 클릭
// [x] A가 입력한 단어가 출력된다.(제시어가 비어있을 경우 A가 입력한 값을 출력한다.)
// [x] B는 A가 말할 단어의 끝음절로 시작하는 단어를 말한다.
// [x] 절차 4번에서 말한 단어가 올바른지 판단한다
// [x] 올바를 경우 c는 B가 말할 단어의 끝음절로 시작하는 단어를 말한다.
// [x] 올바르지 않을 경우에는 실패라고 표시한다.
// [x] 게임을 처음부터 다시 진행한다.

//TODO 추가 기능 구현
// [x] 입력한 값들이 enter를 쳤을 때 출력된다.

const number = Number(prompt("몇 명이 참가하나요?"));
const $button = document.querySelector(".btn-ghost");
const $input = document.querySelector(".main-input");
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");
let word; //제시어(제시어는 빈 값으로 놔둔다)
let newWord; // 새로 입력한 단어

const onClickButton = () => {
  if (!word) {
    //제시어가 비어 있는 경우
    word = newWord;
    $word.textContent = word;
    const order = Number($order.textContent);
    if (order + 1 > number) {
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }
    $input.value = "";
    $input.focus();
  } else {
    //제시어가 비어있지 않는 경우
    if (word[word.length - 1] === newWord[0]) {
      //제시어의 끝 음절과 새로 입력한 단어의 첫음절이 같다면
      word = newWord;
      $word.textContent = word;
      $input.value = "";
      const order = Number($order.textContent);
      if (order + 1 > number) {
        $order.textContent = 1;
      } else {
        $order.textContent = order + 1;
      }
      $input.value = "";
      $input.focus();
    } else {
      //올바르지 않다.
      alert("올바르지 않은 단어입니다");
    }
    $input.value = "";
    $input.focus();
  }
};
const onInput = (e) => {
  newWord = e.target.value;
};
const enterkeypress = (e) => {
  if (e.key === "Enter") {
    if (!word) {
      //제시어가 비어 있는 경우
      word = newWord;
      $word.textContent = word;
      const order = Number($order.textContent);
      if (order + 1 > number) {
        $order.textContent = 1;
      } else {
        $order.textContent = order + 1;
      }
      $input.value = "";
      $input.focus();
    } else {
      //제시어가 비어있지 않는 경우
      if (word[word.length - 1] === newWord[0]) {
        //제시어의 끝 음절과 새로 입력한 단어의 첫음절이 같다면
        word = newWord;
        $word.textContent = word;
        $input.value = "";
        const order = Number($order.textContent);
        if (order + 1 > number) {
          $order.textContent = 1;
        } else {
          $order.textContent = order + 1;
        }
        $input.value = "";
        $input.focus();
      } else {
        //올바르지 않다.
        alert("올바르지 않은 단어입니다");
      }
      $input.value = "";
      $input.focus();
    }
  }
};

$button.addEventListener("click", onClickButton);
$input.addEventListener("input", onInput);
$input.addEventListener("keypress", enterkeypress);
