// import  navigationCard from '../../templates/navigationCard.hbs';
import '../../stylesheet/main.css';


// const refs = {
//   navigationCard: document.querySelector('.js-main_header'),
// };
// const markup = navigationCard()
// refs.navigationCard.insertAdjacentHTML('beforeend', markup);

const navMenu = document.querySelector('.nav__list')

navMenu.addEventListener('click', navClickHandler);

function navClickHandler(e) {
  e.preventDefault();
  console.log(e.target)
  if(e.target === e.currentTarget) {
    return
  }
  const activeLink = e.currentTarget.querySelector('.nav__btn--active');
  console.log(activeLink)
    if(activeLink){
    activeLink.classList.remove('nav__btn--active');
  }
  e.target.classList.add('nav__btn--active');
}

