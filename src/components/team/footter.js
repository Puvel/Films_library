import * as basicLightbox from 'basiclightbox'
import items from '../team/menu.json';
import './footter.css'
import teamCardTemplate from '../../templates/footter-item.hbs';

const teamMarkup = items.map(item => {
return teamCardTemplate(item);
}).join("");

const list = document.querySelector(".footer-description__link");

list.addEventListener('click',showModal)


function showModal (e){
    if(e.target === e.currentTarget) {
        const instance = basicLightbox.create(`
        <section class="cards">
                <div class="container">
                    <h2 class="services_title">наша команда</h2>
                    <ul class="services-list">
                        
                        <li class="services-item">
                            <div class="pic">
                                <img class="services-img" src="src="../../assets/images/team/Liza1.jpg" alt="bgbgb" width="150" height="170">
                            </div>
                            <div class="content">
                                <h3 class="services-item__title">Liza Domasheva</h3>
                                <p class="services-item__description">Front End Developer</p>
                                <p class="services-item__email">lizidomasheva@gmail.com</p>                  
                                <ul class="social">
                            <li class="cl_li">
                                <a href="https://www.instagram.com/olia_melnyk_/" class="fa fa-facebook">
                                    <img class="" src="../../assets/images/icons/instagram.svg" width="36" height="16" alt="image description">
                                </a>
                            </li>
                            <li class="cl_li">
                                <a href="https://www.facebook.com/olya.melnik.336" class="fa fa-twitter">
                                    <img class="" src="../../assets/images/icons/facebook.svg" width="16" height="16" alt="image description">
                                </a>
                            </li>
                            <li class="cl_li">
                                <a href="#" class="fa fa-linkedin">
                                    <img class="" src="../../assets/images/icons/linkedin-logo.svg" width="16" height="16" alt="image description">
                                </a>
                            </li>
                        </ul>
                            </div>
                           
                        </li>
        
                        <li class="services-item">
                            <div class="pic">
                                <img class="services-img" src="./img/photos/Ira2.JPG" alt="bgbgb" width="150" height="170">
                            </div>
                            <div class="content">
                                <h3 class="services-item__title">Pavlo Chenchovyi</h3>
                                <p class="services-item__description">Team Lead</p>
                                <p class="services-item__email">puvelko@gmail.com</p>                  
                                <ul class="social">
                                <li class="cl_li">
                                    <a href="https://www.instagram.com/olia_melnyk_/" class="fa fa-facebook">
                                        <img class="" src="../../assets/images/icons/instagram.svg" width="36" height="16" alt="image description">
                                    </a>
                                </li>
                                <li class="cl_li">
                                    <a href="https://www.facebook.com/olya.melnik.336" class="fa fa-twitter">
                                        <img class="" src="../../assets/images/icons/facebook.svg" width="16" height="16" alt="image description">
                                    </a>
                                </li>
                                <li class="cl_li">
                                    <a href="#" class="fa fa-linkedin">
                                        <img class="" src="../../assets/images/icons/linkedin-logo.svg" width="16" height="16" alt="image description">
                                    </a>
                                </li>
                            </ul>
                            </div>                                    
                        </li>
        
                        <li class="services-item">
                            <div class="pic">
                                <img class="services-img" src="src="../../assets/images/team/Ira2.JPG" alt="bgbgb" width="260" height="300">
                            </div>
                            <div class="content">
                                <h3 class="services-item__title">Kateryna Myronova</h3>
                                <p class="services-item__description">Scrum Master</p>
                                <p class="services-item__email">katrin.myronova@gmail.com</p>                  
                                <ul class="social">
                            <li class="cl_li">
                                <a href="https://www.instagram.com/olia_melnyk_/" class="fa fa-facebook">
                                    <img class="" src="../../assets/images/icons/instagram.svg" width="36" height="16" alt="image description">
                                </a>
                            </li>
                            <li class="cl_li">
                                <a href="https://www.facebook.com/olya.melnik.336" class="fa fa-twitter">
                                    <img class="" src="../../assets/images/icons/facebook.svg" width="16" height="16" alt="image description">
                                </a>
                            </li>
                            <li class="cl_li">
                                <a href="#" class="fa fa-linkedin">
                                    <img class="" src="../../assets/images/icons/linkedin-logo.svg" width="16" height="16" alt="image description">
                                </a>
                            </li>
                        </ul>
                            </div>
                            
                        </li>
        
                        <li class="services-item">
                            <div class="pic">
                                <img class="services-img" src="src="../../assets/images/team/Ira2.JPG" alt="bgbgb" width="150" height="170">
                            </div>
                            <div class="content">
                                <h3 class="services-item__title">Natasha Maydannik</h3>
                                <p class="services-item__description">Front End Developer</p>
                                <p class="services-item__email">nattuardy@gmail.com</p>                 
                                <ul class="social">
                                <li class="cl_li">
                                    <a href="https://www.instagram.com/olia_melnyk_/" class="fa fa-facebook">
                                        <img class="" src="../../assets/images/icons/instagram.svg" width="36" height="16" alt="image description">
                                    </a>
                                </li>
                                <li class="cl_li">
                                    <a href="https://www.facebook.com/olya.melnik.336" class="fa fa-twitter">
                                        <img class="" src="../../assets/images/icons/facebook.svg" width="16" height="16" alt="image description">
                                    </a>
                                </li>
                                <li class="cl_li">
                                    <a href="#" class="fa fa-linkedin">
                                        <img class="" src="../../assets/images/icons/linkedin-logo.svg" width="16" height="16" alt="image description">
                                    </a>
                                </li>
                            </ul>
                            </div>
                        </li>
        
                        <li class="services-item">
                            <div class="pic">
                                <img class="services-img" src="../../assets/images/team/Ira2.JPG" alt="bgbgb" width="150" height="170">
                            </div>
                            <div class="content">
                                <h3 class="services-item__title">Irina Ilina/h3>
                                <p class="services-item__description">Front End Developer</p>
                                <p class="services-item__email">irynailina@gmail.com</p>                 
                                <ul class="social">
                                <li class="cl_li">
                                    <a href="https://www.instagram.com/olia_melnyk_/" class="fa fa-facebook">
                                        <img class="" src="../../assets/images/icons/instagram.svg" width="36" height="16" alt="image description">
                                    </a>
                                </li>
                                <li class="cl_li">
                                    <a href="https://www.facebook.com/olya.melnik.336" class="fa fa-twitter">
                                        <img class="" src="../../assets/images/icons/facebook.svg" width="16" height="16" alt="image description">
                                    </a>
                                </li>
                                <li class="cl_li">
                                    <a href="#" class="fa fa-linkedin">
                                        <img class="" src="../../assets/images/icons/linkedin-logo.svg" width="16" height="16" alt="image description">
                                    </a>
                                </li>
                            </ul>
                            </div>
        
                        </li>
        
                        <li class="services-item">
                            <div class="pic">
                                <img class="services-img" src="src="../../assets/images/team/Olia.jpg" alt="Olia Melnyk" width="150" height="170">
                            </div>
                            <div class="content">
                                <h3 class="services-item__title">Olia Melnyk</h3>
                                <p class="services-item__description">Front End Developer</p>
                                <p class="services-item__email">olgamelnyk10111989@gmail.com</p>                  
                                <ul class="social">
                                <li class="cl_li">
                                    <a href="https://www.instagram.com/olia_melnyk_/" class="fa fa-facebook">
                                        <img class="" src="../../assets/images/icons/instagram.svg" width="36" height="16" alt="image description">
                                    </a>
                                </li>
                                <li class="cl_li">
                                    <a href="https://www.facebook.com/olya.melnik.336" class="fa fa-twitter">
                                        <img class="" src="../../assets/images/icons/facebook.svg" width="16" height="16" alt="image description">
                                    </a>
                                </li>
                                <li class="cl_li">
                                    <a href="#" class="fa fa-linkedin">
                                        <img class="" src="../../assets/images/icons/linkedin-logo.svg" width="16" height="16" alt="image description">
                                    </a>
                                </li>
                            </ul>
                            </div>
        
                        </li>
        
                        <li class="services-item">
                            <div class="pic">
                                <img class="services-img" src="src="../../assets/images/team/Fahriddin1.jpg alt="Fahriddin Nomanjanov" width="150" height="170">
                            </div>
                            <div class="content">
                                <h3 class="services-item__title">Fahriddin</h3>
                                <h3 class="services-item__title">Nomanjanov</h3>
                                <p class="services-item__description">Front End Developer</p>
                                <p class="services-item__email">fahriddinnomanjanov@gmail.com</p>                  
                                <ul class="social">
                                <li class="cl_li">
                                    <a href="https://www.instagram.com/olia_melnyk_/" class="fa fa-facebook">
                                        <img class="" src="../../assets/images/icons/instagram.svg" width="36" height="16" alt="image description">
                                    </a>
                                </li>
                                <li class="cl_li">
                                    <a href="https://www.facebook.com/olya.melnik.336" class="fa fa-twitter">
                                        <img class="" src="../../assets/images/icons/facebook.svg" width="16" height="16" alt="image description">
                                    </a>
                                </li>
                                <li class="cl_li">
                                    <a href="#" class="fa fa-linkedin">
                                        <img class="" src="../../assets/images/icons/linkedin-logo.svg" width="16" height="16" alt="image description">
                                    </a>
                                </li>
                            </ul>
                            </div>
        
                        </li>
        
                        <li class="services-item">
                            <div class="pic">
                                <img class="services-img" src="src="../../assets/images/team/Misha.jpg" alt="Mykhail Dyatel" width="150" height="170">
                            </div>
                            <div class="content">
                                <h3 class="services-item__title">Mykhail Dyatel</h3>
                                <p class="services-item__description">Front End Developer</p>
                                <p class="services-item__email">misha.dyatel@gmail.com</p>                  
                                <ul class="social">
                                <li class="cl_li">
                                    <a href="https://www.instagram.com/olia_melnyk_/" class="fa fa-facebook">
                                        <img class="" src="../../assets/images/icons/instagram.svg" width="36" height="16" alt="image description">
                                    </a>
                                </li>
                                <li class="cl_li">
                                    <a href="https://www.facebook.com/olya.melnik.336" class="fa fa-twitter">
                                        <img class="" src="../../assets/images/icons/facebook.svg" width="16" height="16" alt="image description">
                                    </a>
                                </li>
                                <li class="cl_li">
                                    <a href="#" class="fa fa-linkedin">
                                        <img class="" src="../../assets/images/icons/linkedin-logo.svg" width="16" height="16" alt="image description">
                                    </a>
                                </li>
                            </ul>
                            </div>
        
                        </li>
        
                    </ul>
                </div>
            </section>
        `)
        
        instance.show()
    }
}
