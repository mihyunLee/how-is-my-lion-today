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

const openNewLink = (e) => {
  for (let value of e.target.childNodes.values()) {
    if (value.tagName === "A") {
      const href = value.getAttribute("href");
      window.open(href, "_blank", "noreferrer");
    }
  }
};

// -- Event
menuMoreBtn.addEventListener("click", openMoreMenu);
document.addEventListener("keydown", closeMoreMenu);
document.addEventListener("click", closeMoreMenu);
menuList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    openNewLink(e);
  }
});
