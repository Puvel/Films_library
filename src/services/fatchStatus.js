import noResult from '../templates/noResult.hbs';
import noRes from '../assets/images/noResult.jpg';

export function fatchStatus(res) {
  if (res.status >= 400) {
    document.querySelector('#pagination').innerHTML = '';
    document.querySelector('.js-gallery_list').innerHTML = noResult({
      noRes,
    });
    return;
  } else {
    return res.json();
  }
}
