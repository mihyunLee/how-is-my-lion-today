// -- DOM
const headerNav = document.querySelector(".header-nav");
const menuMoreBtn = headerNav.querySelector(".btn-more");
const menuList = headerNav.querySelector(".menu");

// -- Functions
/** 더보기 메뉴 모달을 연다. */
const openMoreMenu = () => {
  menuList.classList.toggle("open");
};

/** 더보기 메뉴 모달 닫는다. */
const closeMoreMenu = () => {
  menuList.classList.remove("open");
};

/** 주어진 target 요소 외부에 있는지를 확인한다.
 * @param {DOMElement} target - 외부에 있는지 확인하기 위한 기준 target 요소
 * @return {boolean} 메뉴 리스트와 더보기 버튼이 아니라면 true를 반환한다.
 */
const isOutsideMenuList = (target) => {
  const elementsToCheck = [menuList, menuMoreBtn];

  return (
    !elementsToCheck.some((element) => element === target) &&
    target.tagName !== "IMG"
  );
};

/** <a> 요소를 자식 요소로 가지고 있다면 새로운 링크를 연다.
 * @param {DOMEvent} e - 지정할 이벤트를 수신할 이벤트 객체
 */
const openNewLink = (e) => {
  for (let value of e.target.childNodes.values()) {
    if (value.tagName === "A") {
      const href = value.getAttribute("href");
      window.open(href, "_blank", "noreferrer");
    }
  }
};

// -- Event

// 더보기 모달 열고 닫기
menuMoreBtn.addEventListener("click", openMoreMenu);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMoreMenu(e);
  }
});
document.addEventListener("click", (e) => {
  if (isOutsideMenuList(e.target)) {
    closeMoreMenu(e);
  }
});

// 메뉴에서 리스트 아이템 클릭 시 링크 열기
menuList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    openNewLink(e);
  }
});
