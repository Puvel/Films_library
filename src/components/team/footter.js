
import items from '../team/menu.json';
import teamCardTemplate from '../../templates/footter-item.hbs';
console.log(items);
// const teamMarkup = items.map(item => {
//     return templateItem(item);
// }).join("");
//     // console.log(itemsAll);
//     const list = document.querySelector(".js-menu");
//     list.insertAdjacentHTML("beforeend", itemsAll);
//     const input = document.querySelector('.js-switch-input');
//     input.addEventListener('change', inputFn);
//     const body = document.body;
    
//     function inputFn(e){
//         console.log(e.target.checked);
        
//         if(e.target.checked) {
//             body.classList.remove('light-theme');
//             body.classList.add('dark-theme');
//             localStorage.setItem('theme', 'dark-theme')
//         }
//         else {
//             body.classList.remove('dark-theme');
//             body.classList.add('light-theme');
//             localStorage.setItem('theme', 'light-theme')
//         }
//     };
//     // const Theme = {
//     //     LIGHT: 'light-theme',
//     //     DARK: 'dark-theme',
//     //   };
//      const newTheme = localStorage.getItem('theme');
//     //  console.log(newTheme);
//      if (newTheme === "dark-theme") {
//         body.classList.add('dark-theme');
//         input.checked = true;
//      };