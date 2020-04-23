import  navigationCard from '../../templates/navigationCard.hbs';
import './navigation.css';

const refs = {
  navigationCard: document.querySelector('.js-main_header'),
};
const markup = navigationCard()
refs.navigationCard.insertAdjacentHTML('beforeend', markup);




