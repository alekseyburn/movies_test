const moviesList = document.querySelector('.movies__list');
// const favButton = document.querySelector('.movies__btn--fav')
moviesList.addEventListener('click', (evt) => {
  const favButton = evt.target.parentElement.parentElement;
  if (favButton.classList.contains('movies__btn--fav')) {
    favButton.classList.toggle('fav-full');
  }
  console.dir();
})
