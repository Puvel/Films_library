import '../../stylesheet/main.css';

const navMenu = document.querySelector('.nav__list');

navMenu.addEventListener('click', navClickHandler);

function navClickHandler(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  const activeLink = e.currentTarget.querySelector('.nav__btn--active');
  if (activeLink) {
    activeLink.classList.remove('nav__btn--active');
  }
  e.target.classList.add('nav__btn--active');
}
