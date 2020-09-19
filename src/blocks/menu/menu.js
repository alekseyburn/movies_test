const menu = document.querySelector('.menu');

menu.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (evt.target.nextSibling && evt.target.parentElement.classList.contains('menu__item')) {
    evt.target.parentElement.classList.toggle('menu__item--active');
  }
});
