import  navigationCard from '../../templates/navigationCard.hbs';
import './navigation.css';

const refs = {
  navigationCard: document.querySelector('.js-main_header'),
  btnHome:document.querySelector('.nav__home'),
  btnMylibrary:document.querySelector('.nav__library')

};
const markup = navigationCard()
refs.navigationCard.insertAdjacentHTML('beforeend', markup);


refs.btnHome.addEventListener('submit', clickImg);
refs.btnMylibrary.addEventListener('click',loadMore);

function clickImg (e) {
  e.preventDefault()
  if(e.target === e.currentTarget) { 
      return 
  }