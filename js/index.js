// -- DOM
const $focusStatus = document.querySelector(".focus-status");
const $focusStatusText = $focusStatus.querySelector("p");
const $focusStatusImg = $focusStatus.querySelector("img");
const $container = document.querySelector(".write-form");
const $focusStatusLists = $container.querySelectorAll(".focus-level");
const $textarea = $container.querySelectorAll(".textarea");
const $textareaControls = $container.querySelectorAll(".controls");
const $resetBtn = $container.querySelector(".btn-reset");

// -- Variables
let focusStatusArr =
  localStorage.getItem(`각 교시 집중도`)?.split(",") || new Array(8).fill(0);

// -- Functions
const calculateFocusStatus = () => {
  let sum = 43 - focusStatusArr.reduce((acc, val) => acc + val, 0);
  let status = "";

  switch (parseInt(sum / 8)) {
    case 5:
    case 4:
      status = "완벽한 사자";
      break;
    case 3:
      status = "열정적인 사자";
      break;
    case 2:
      status = "평범한 사자";
      break;
    case 1:
      status = "멍 때리는 사자";
      break;
    default:
      status = "피곤한 사자";
  }

  return status;
};

const renderFocusStatus = () => {
  $focusStatusText.textContent = calculateFocusStatus();

  const url = `${$focusStatusText.textContent.split("사자")[0].trim()}.png`;
  $focusStatusImg.src = `./images/${url}`;
};

/** 글자수 제한하기 */
const truncateText = (text, maxLength) => {
  let truncatedText = "";
  let currentLength = 0;

  for (let i = 0; i < text.length; i++) {
    if (currentLength <= maxLength) {
      truncatedText += text.charAt(i);
    } else {
      break;
    }
  }
  return truncatedText;
};

/** 새로고침 시 저장된 회고 내용, 텍스트 길이, 집중도 불러오기 */
const init = () => {
  let initContent = new Array($textarea.length);

  $textarea.forEach((item, idx) => {
    // 마지막 textarea 일 경우 실행
    if (idx === $textarea.length - 1) {
      const content = localStorage.getItem("오늘의 회고");

      if (content) {
        initContent[idx] = content;
        item.previousElementSibling.innerText = `오늘의 회고 작성하기 (${initContent[idx].length}/200)`;
        item.value = content;
      } else {
        item.previousElementSibling.innerText = `오늘의 회고 작성하기 (0/200)`;
      }
    } else {
      // 나머지 textarea에 실행
      const content = localStorage.getItem(`${idx + 1}교시 회고`);

      if (content) {
        initContent[idx] = content;
        item.previousSibling.textContent = `이번 교시의 배움을 100자 이내로 요약해보세요! (${initContent[idx].length}/100)`;
        item.value = content;
      } else {
        item.previousSibling.textContent = `이번 교시의 배움을 100자 이내로 요약해보세요! (0/100)`;
      }
    }
  });

  $focusStatusLists.forEach((item, idx) => {
    const focusStatus = localStorage.getItem(`각 교시 집중도`);

    item.querySelectorAll("input").forEach((radio) => {
      if (focusStatus && radio.value === focusStatus.split(",")[idx]) {
        radio.setAttribute("checked", true);
      } else {
        radio.removeAttribute("checked");
      }
    });
  });
};

/** 사용자 입력값 초기화 */
const reset = () => {
  $textarea.forEach((item, idx) => {
    if (idx === $textarea.length - 1) {
      item.previousElementSibling.innerText = `오늘의 회고 작성하기 (0/200)`;
    } else {
      item.previousSibling.textContent = `이번 교시의 배움을 100자 이내로 요약해보세요! (0/100)`;
    }
  });

  localStorage.clear();
  init();
};

// -- Events
$focusStatusLists.forEach((item, idx) =>
  item.addEventListener("click", (e) => {
    if (e.target.type === "radio") {
      focusStatusArr[idx] = parseInt(e.target.value);
      localStorage.setItem(`각 교시 집중도`, focusStatusArr);
      renderFocusStatus();
    }
  })
);

$textarea.forEach((item, idx) => {
  // textarea에 focus시 컨트롤 보임
  item.addEventListener("focus", () => {
    $textareaControls[idx].style.display = "block";
  });

  // textarea에 focusout시 컨트롤 숨기기
  item.addEventListener("focusout", () => {
    $textareaControls[idx].style.display = "none";
  });

  // textarea 입력 내용 글자 수 제한하기
  item.addEventListener("input", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }

    const maxLength = item.getAttribute("maxlength");
    const currentText = item.value;
    let currentLength = currentText.length;

    if (currentLength > maxLength) {
      item.value = truncateText(currentText, maxLength);
      currentLength = maxLength;
    }

    // 마지막 textarea 일 때
    if (idx === $textarea.length - 1) {
      item.previousElementSibling.innerText = `오늘의 회고 작성하기 (${currentLength}/200)`;
    } else {
      item.previousSibling.textContent = `이번 교시의 배움을 100자 이내로 요약해보세요! (${currentLength}/100)`;
    }
  });

  // localStorage에 회고 내용 저장
  item.addEventListener("change", (e) => {
    if (idx === $textarea.length - 1) {
      localStorage.setItem(`오늘의 회고`, e.target.value);
    } else {
      localStorage.setItem(`${idx + 1}교시 회고`, e.target.value);
    }
  });
});

$resetBtn.addEventListener("click", reset);

init();
