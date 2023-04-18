// -- DOM
const $focusStatus = document.querySelector(".focus-status p");
const $container = document.querySelector(".write-container");
const $forms = $container.querySelectorAll("form");
const $focusStatusLists = $container.querySelectorAll(".focus-level");

// -- Variables
let focusStatusArr = new Array(8).fill(0);

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
  $focusStatus.textContent = calculateFocusStatus();
};

// -- Events
$focusStatusLists.forEach((item, idx) =>
  item.addEventListener("click", (e) => {
    if (e.target.type === "radio") {
      focusStatusArr[idx] = parseInt(e.target.value);
      renderFocusStatus();
    }
  })
);
