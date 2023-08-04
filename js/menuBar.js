// -- DOM
const headerNav = document.querySelector(".header-nav");
const menuMoreBtn = headerNav.querySelector(".btn-more");
const menuList = headerNav.querySelector(".menu");

// -- Functions
const openMoreMenu = () => {
  menuList.classList.toggle("open");
};

const isOutsideMenuList = (target) => {
  const elementsToCheck = [menuList, menuMoreBtn];
  return (
    !elementsToCheck.some((element) => element === target) &&
    target.nodeName !== "IMG"
  );
};

const closeMoreMenu = (e) => {
  if (e.key === "Escape" || isOutsideMenuList(e.target)) {
    menuList.classList.remove("open");
  }
};

// -- Event
menuMoreBtn.addEventListener("click", openMoreMenu);
document.addEventListener("keydown", closeMoreMenu);
document.addEventListener("click", closeMoreMenu);
