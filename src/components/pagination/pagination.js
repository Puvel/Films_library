import './pagination.css';
import services from '../../services/services.js';
import { renderHomeGalleryList, renderSearchResultGalleryList} from '../mainFilmsList/mainFilmsList.js';
const gallery = document.querySelector('.js-gallery_list');

const Pagination = {
  code: '',

  Extend: function (data) {
    data = data || {};
    Pagination.size = data.size || 300;
    Pagination.page = data.page || 1;
    Pagination.step = data.step || 2;
  },

  Add: function (s, f) {
    for (let i = s; i < f; i++) {
      Pagination.code += '<a class = "pagination__page">' + i + '</a>';
    }
  },

  Last: function () {
    if (window.matchMedia('screen and (min-width: 768px)').matches) {
      Pagination.code +=
        '<i class = "pagination__separator">...</i><a class = "pagination__page">' +
        Pagination.size +
        '</a>';
    } else {
    }
  },

  First: function () {
    if (window.matchMedia('screen and (min-width: 768px)').matches) {
      Pagination.code +=
        '<a class = "pagination__page">1</a><i class = "pagination__separator">...</i>';
    } else {
    }
  },

  Fetch: function () {
    services.page = Pagination.page;
    gallery.innerHTML = '';
    const Search = document.querySelector('.search-form_input');
    if (!Search.value) {
      renderHomeGalleryList();
      Pagination.Start();
    } else {
      renderSearchResultGalleryList();
      Pagination.Start();
    }
  },

  Click: function () {
    Pagination.page = +this.innerHTML;
    Pagination.Fetch();
  },

  Prev: function () {
    const b = document.querySelector('.btn-prev');
    if (Pagination.page !== 1) {
      b.removeAttribute('disabled');
      Pagination.page--;
      if (Pagination.page < 1) {
        Pagination.page = 1;
        b.setAttribute('disabled', 'disabled');
      }
      Pagination.Fetch();
    }
  },

  Next: function () {
    const b = document.querySelector('.btn-next');
    if (Pagination.page !== Pagination.size) {
      b.removeAttribute('disabled', 'disabled');
      Pagination.page++;
      if (Pagination.page > Pagination.size) {
        Pagination.page = Pagination.size;
        b.setAttribute('disabled', 'disabled');
      }
      Pagination.Fetch();
    }
  },

  Bind: function () {
    const a = Pagination.e.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
      if (+a[i].innerHTML === Pagination.page)
        a[i].className = 'pagination__page current';
      a[i].addEventListener('click', Pagination.Click);
    }
  },

  Finish: function () {
    Pagination.e.innerHTML = Pagination.code;
    Pagination.code = '';
    Pagination.Bind();
  },

  Start: function () {
    if (window.matchMedia('screen and (min-width: 768px)').matches) {
      if (Pagination.size < Pagination.step * 2 + 6) {
        Pagination.Add(1, Pagination.size + 1);
      } else if (Pagination.page < Pagination.step * 2 + 1) {
        Pagination.Add(1, Pagination.step * 2 + 4);
        Pagination.Last();
      } else if (Pagination.page > Pagination.size - Pagination.step * 2) {
        Pagination.First();
        Pagination.Add(
          Pagination.size - Pagination.step * 2 - 2,
          Pagination.size + 1,
        );
      } else {
        Pagination.First();
        Pagination.Add(
          Pagination.page - Pagination.step,
          Pagination.page + Pagination.step + 1,
        );
        Pagination.Last();
      }
      Pagination.Finish();
    } else {
      if (Pagination.size < Pagination.step * 2 + 6) {
        Pagination.Add(1, Pagination.size + 2);
      } else if (Pagination.page < Pagination.step * 2) {
        Pagination.Add(1, Pagination.step * 2 + 2);
      } else if (Pagination.page > Pagination.size - Pagination.step * 2 + 2) {
        Pagination.Add(
          Pagination.size - Pagination.step * 2,
          Pagination.size + 1,
        );
      } else {
        Pagination.Add(
          Pagination.page - Pagination.step,
          Pagination.page + Pagination.step + 1,
        );
      }
      Pagination.Finish();
    }
  },

  Buttons: function (e) {
    const nav = e.getElementsByTagName('button');
    nav[0].addEventListener('click', Pagination.Prev);
    nav[1].addEventListener('click', Pagination.Next);
  },

  Create: function (e) {
    const html = [
      '<button class="pagination__btn btn-prev"></button>',
      '<span></span>',
      '<button class="pagination__btn btn-next"></button>',
    ];

    e.innerHTML = html.join('');
    Pagination.e = e.getElementsByTagName('span')[0];
    Pagination.Buttons(e);
  },

  Init: function (e, data) {
    Pagination.Extend(data);
    Pagination.Create(e);
    Pagination.Start();
  },
};

export const init = function () {
  Pagination.Init(document.getElementById('pagination'), {
    size: services.totalPages,
    page: services.page,
    step: 2,
  });
};

export default Pagination;
