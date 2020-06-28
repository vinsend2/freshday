var MainMenuBtn = document.querySelector(".page-header__tuggle");
var MainMenuList = document.querySelector(".main-menu");

MainMenuBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    MainMenuList.classList.toggle("main-menu--open");
    MainMenuBtn.classList.toggle("page-header__tuggle--open");
})