let menuToggle = function() {
  // eslint-disable-next-line no-undef
  let menuMain = document.querySelector(".page-main__menu-wrapper");
  // eslint-disable-next-line no-undef
  let menuToggle = document.querySelector(".page-main__menu-toggle");

  if (!menuMain || !menuToggle) return;

  menuToggle.addEventListener("click", function() {
    menuMain.classList.toggle("menu--opened");
    console.log('hi');
  });
};

menuToggle();
