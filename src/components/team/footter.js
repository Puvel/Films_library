import items from '../team/menu.json';
import './footter.css';
import teamCardTemplate from '../../templates/footter-item.hbs';
import Pasha from '../../assets/images/team/Pasha.jpg';
import Liza from '../../assets/images/team/Liza1.jpg';
import Katya from '../../assets/images/team/Katya.jpg';
import Natasha from '../../assets/images/team/Natasha1.jpg';
import Olia from '../../assets/images/team/Olia.jpg';
import Fahriddin from '../../assets/images/team/Fahriddin1.jpg';
import Misha from '../../assets/images/team/Misha.jpg';
import Ira from '../../assets/images/team/Ira2.jpg';
import fb from '../../assets/images/icons/facebook.svg';
import insta from '../../assets/images/icons/instagram.svg';
import linkedin from '../../assets/images/icons/linkedin-logo.svg';

const refs = {
  mainHeaderBg: document.querySelector('.main_header-bg'),
  headerInput: document.querySelector('.search-form_wrapper'),
  headerBtn: document.querySelector('.btn'),
  activeLink: document.querySelector('.nav__home'),
  activeLinkLibrary: document.querySelector('.nav__library'),
  homeLink: document.querySelector('.nav__home'),
  libraryLink: document.querySelector('.nav__library'),
};

const teamMarkup = items
  .map(item => {
    return teamCardTemplate(item);
  })
  .join('');

const list = document.querySelector('.footer-description__link');

list.addEventListener('click', showCards);

function showCards() {
  const galleryList = document.querySelector('.js-gallery_list');
  galleryList.innerHTML = markup;
  const divPagination = document.querySelector('#pagination');
  divPagination.style.padding = 0;
  divPagination.innerHTML = ' ';
  const cardItem = document.querySelector('.js-cardItem');
  cardItem.innerHTML = '';
  refs.mainHeaderBg.classList.remove('main_header-bg');
  refs.mainHeaderBg.classList.remove('main_header-bg-btn');
  refs.mainHeaderBg.classList.add('main_header-bg-card');
  refs.headerInput.innerHTML = '';
  refs.headerBtn.innerHTML = '';
  refs.activeLinkLibrary.classList.remove('nav__btn--active');
  refs.activeLink.classList.remove('nav__btn--active');
}

const markup = `<section class="cards">
<div class="container">
    <h2 class="services_title">наша команда</h2>
    <ul class="services-list">

    <li class="services-item">
    <div class="pic">
        <img class="services-img" src="${Pasha}" alt="bgbgb" width="260" height="300">
    </div>
    <div class="content">
        <h3 class="services-item__title">Pavlo Chenchovyi</h3>
        <p class="services-item__description">Team Lead</p>
        <p class="services-item__email">puvelko@gmail.com</p>                  
        <ul class="social">
        <li class="cl_li">
            <a href="https://www.instagram.com/olia_melnyk_/" class="fa fa-facebook">
                <img class="" src="${insta}" width="36" height="16" alt="image description">
            </a>
        </li>
        <li class="cl_li">
            <a href="https://www.facebook.com/olya.melnik.336" class="fa fa-twitter">
                <img class="" src="${fb}" width="16" height="16" alt="image description">
            </a>
        </li>
        <li class="cl_li">
            <a href="#" class="fa fa-linkedin">
                <img class="" src="${linkedin}" width="16" height="16" alt="image description">
            </a>
        </li>
    </ul>
    </div>                                    
</li>
        
        <li class="services-item">
            <div class="pic">
                <img src="${Liza}" alt="bgbgb" width="260" height="300" class="services-img" >
            </div>
            <div class="content">
                <h3 class="services-item__title">Liza Domasheva</h3>
                <p class="services-item__description">Front End Developer</p>
                <p class="services-item__email">lizidomasheva@gmail.com</p>                  
                <ul class="social">
            <li class="cl_li">
                <a href="https://www.instagram.com/olia_melnyk_/" class="fa fa-facebook">
                    <img class="" src="${insta}" width="36" height="16" alt="">
                </a>
            </li>
            <li class="cl_li">
                <a href="https://www.facebook.com/olya.melnik.336" class="fa fa-twitter">
                    <img class="" src="${fb}" width="16" height="16" alt="">
                </a>
            </li>
            <li class="cl_li">
                <a href="#" class="fa fa-linkedin">
                    <img class="" src="${linkedin}" width="16" height="16" alt="">
                </a>
            </li>
        </ul>
            </div>
           
        </li>

       

        <li class="services-item">
            <div class="pic">
                <img class="services-img" src="${Katya}" alt="bgbgb" width="260" height="300">
            </div>
            <div class="content">
                <h3 class="services-item__title">Kateryna Myronova</h3>
                <p class="services-item__description">Scrum Master</p>
                <p class="services-item__email">katrin.myronova@gmail.com</p>                  
                <ul class="social">
            <li class="cl_li">
                <a href="https://www.instagram.com/olia_melnyk_/" class="fa fa-facebook">
                    <img class="" src="${insta}" width="36" height="16" alt="image description">
                </a>
            </li>
            <li class="cl_li">
                <a href="https://www.facebook.com/olya.melnik.336" class="fa fa-twitter">
                    <img class="" src="${fb}" width="16" height="16" alt="image description">
                </a>
            </li>
            <li class="cl_li">
                <a href="#" class="fa fa-linkedin">
                    <img class="" src="${linkedin}" width="16" height="16" alt="image description">
                </a>
            </li>
        </ul>
            </div>
            
        </li>

        <li class="services-item">
            <div class="pic">
                <img class="services-img" src="${Natasha}" alt="bgbgb" width="260" height="300">
            </div>
            <div class="content">
                <h3 class="services-item__title">Natasha Maydannik</h3>
                <p class="services-item__description">Front End Developer</p>
                <p class="services-item__email">nattuardy@gmail.com</p>                 
                <ul class="social">
                <li class="cl_li">
                    <a href="https://www.instagram.com/olia_melnyk_/" class="fa fa-facebook">
                        <img class="" src="${insta}" width="36" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a href="https://www.facebook.com/olya.melnik.336" class="fa fa-twitter">
                        <img class="" src="${fb}" width="16" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a href="#" class="fa fa-linkedin">
                        <img class="" src="${linkedin}" width="16" height="16" alt="image description">
                    </a>
                </li>
            </ul>
            </div>
        </li>

        <li class="services-item">
            <div class="pic">
                <img class="services-img" src="${Ira}" alt="bgbgb" width="260" height="300">
            </div>
            <div class="content">
                <h3 class="services-item__title">Irina Ilina</h3>
                <p class="services-item__description">Front End Developer</p>
                <p class="services-item__email">irynailina@gmail.com</p>                 
                <ul class="social">
                <li class="cl_li">
                    <a href="https://www.instagram.com/olia_melnyk_/" class="fa fa-facebook">
                        <img class="" src="${insta}" width="36" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a href="https://www.facebook.com/olya.melnik.336" class="fa fa-twitter">
                        <img class="" src="${fb}" width="16" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a href="#" class="fa fa-linkedin">
                        <img class="" src="${linkedin}" width="16" height="16" alt="image description">
                    </a>
                </li>
            </ul>
            </div>

        </li>

        <li class="services-item">
            <div class="pic">
                <img class="services-img" src="${Olia}" alt="OliaMelnyk" width="260" height="300">
            </div>
            <div class="content">
                <h3 class="services-item__title">Olia Melnyk</h3>
                <p class="services-item__description">Front End Developer</p>
                <p class="services-item__email">olgamelnyk10111989@gmail.com</p>                  
                <ul class="social">
                <li class="cl_li">
                    <a href="https://www.instagram.com/olia_melnyk_/" class="fa fa-facebook">
                        <img class="" src="${insta}" width="36" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a href="https://www.facebook.com/olya.melnik.336" class="fa fa-twitter">
                        <img class="" src="${fb}" width="16" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a href="#" class="fa fa-linkedin">
                        <img class="" src="${linkedin}" width="16" height="16" alt="image description">
                    </a>
                </li>
            </ul>
            </div>

        </li>

        <li class="services-item">
            <div class="pic">
                <img class="services-img" src="${Fahriddin}" alt="Fahriddin Nomanjanov" width="260" height="300">
            </div>
            <div class="content">
                <h3 class="services-item__title">Fahriddin</h3>
                <h3 class="services-item__title">Nomanjanov</h3>
                <p class="services-item__description">Front End Developer</p>
                <p class="services-item__email">fahriddinnomanjanov@gmail.com</p>                  
                <ul class="social">
                <li class="cl_li">
                    <a href="https://www.instagram.com/olia_melnyk_/" class="fa fa-facebook">
                        <img class="" src="${insta}" width="36" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a href="https://www.facebook.com/olya.melnik.336" class="fa fa-twitter">
                        <img class="" src="${fb}" width="16" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a href="#" class="fa fa-linkedin">
                        <img class="" src="${linkedin}" width="16" height="16" alt="image description">
                    </a>
                </li>
            </ul>
            </div>

        </li>

        <li class="services-item">
            <div class="pic">
                <img class="services-img" src="${Misha}" alt="Mykhail Dyatel" width="260" height="300">
            </div>
            <div class="content">
                <h3 class="services-item__title">Mykhail Dyatel</h3>
                <p class="services-item__description">Front End Developer</p>
                <p class="services-item__email">misha.dyatel@gmail.com</p>                  
                <ul class="social">
                <li class="cl_li">
                    <a href="https://www.instagram.com/olia_melnyk_/" class="fa fa-facebook">
                        <img class="" src="${insta}" width="36" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a href="https://www.facebook.com/olya.melnik.336" class="fa fa-twitter">
                        <img class="" src="${fb}" width="16" height="16" alt="image description">
                    </a>
                </li>
                <li class="cl_li">
                    <a href="#" class="fa fa-linkedin">
                        <img class="" src="${linkedin}" width="16" height="16" alt="image description">
                    </a>
                </li>
            </ul>
            </div>

        </li>

    </ul>
</div>
</section>`;
