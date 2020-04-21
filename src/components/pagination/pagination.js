import './pagination.css';

const Pagination = {
  code: '',
  // --------------------
  // Utility
  // --------------------
  // converting initialize data
  Extend: function (data) {
    data = data || {};
    Pagination.size = data.size || 300;
    Pagination.page = data.page || 1;
    Pagination.step = data.step || 2;
  },

  // add pages by number (from [s] to [f])
  Add: function (s, f) {
    for (let i = s; i < f; i++) {
      Pagination.code += '<a class = "pagination__page">' + i + '</a>';
    }
  },

  // add last page with separator
  Last: function () {
    if (window.matchMedia('screen and (min-width: 768px)').matches) {
      Pagination.code +=
        '<i class = "pagination__separator">...</i><a class = "pagination__page">' +
        Pagination.size +
        '</a>';
    } else {
    }
  },

  // add first page with separator
  First: function () {
    if (window.matchMedia('screen and (min-width: 768px)').matches) {
      Pagination.code +=
        '<a class = "pagination__page">1</a><i class = "pagination__separator">...</i>';
    } else {
    }
  },

  // --------------------
  // Handlers
  // --------------------

  // change page
  Click: function () {
    Pagination.page = +this.innerHTML;
    Pagination.Start();
  },

  // previous page
  Prev: function () {
    Pagination.page--;
    if (Pagination.page < 1) {
      Pagination.page = 1;
    }
    Pagination.Start();
  },

  // next page
  Next: function () {
    Pagination.page++;
    if (Pagination.page > Pagination.size) {
      Pagination.page = Pagination.size;
    }
    Pagination.Start();
  },

  // --------------------
  // Script
  // --------------------

  // binding pages
  Bind: function () {
    const a = Pagination.e.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
      if (+a[i].innerHTML === Pagination.page)
        a[i].className = 'pagination__page current';
      a[i].addEventListener('click', Pagination.Click);
    }
    console.log(Pagination.page);
  },

  // write pagination
  Finish: function () {
    Pagination.e.innerHTML = Pagination.code;
    Pagination.code = '';
    Pagination.Bind();
  },

  // find pagination type
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
        Pagination.Add(1, Pagination.size + 1);
      } else if (Pagination.page < Pagination.step * 2) {
        Pagination.Add(1, Pagination.step * 2 + 2);
        //   Pagination.Last();
      } else if (Pagination.page > Pagination.size - Pagination.step * 2 + 2) {
        //   Pagination.First();
        Pagination.Add(
          Pagination.size - Pagination.step * 2,
          Pagination.size + 1,
        );
      } else {
        //   Pagination.First();
        Pagination.Add(
          Pagination.page - Pagination.step,
          Pagination.page + Pagination.step + 1,
        );
        //   Pagination.Last();
      }
      Pagination.Finish();
    }
  },

  // --------------------
  // Initialization
  // --------------------

  // binding buttons
  Buttons: function (e) {
    const nav = e.getElementsByTagName('a');
    nav[0].addEventListener('click', Pagination.Prev);
    nav[1].addEventListener('click', Pagination.Next);
  },

  // create skeleton
  Create: function (e) {
    const html = [
      '<a class="pagination__btn btn-prev"></a>', // previous button
      '<span></span>', // pagination container
      '<a class="pagination__btn btn-next"></a>', // next button
    ];

    e.innerHTML = html.join('');
    Pagination.e = e.getElementsByTagName('span')[0];
    Pagination.Buttons(e);
  },

  // init
  Init: function (e, data) {
    Pagination.Extend(data);
    Pagination.Create(e);
    Pagination.Start();
  },
};

/* * * * * * * * * * * * * * * * *
 * Initialization
 * * * * * * * * * * * * * * * * */

const init = function () {
  Pagination.Init(document.getElementById('pagination'), {
    size: 13, // pages size
    page: 1, // selected page
    step: 2, // pages before and after current
  });
};

document.addEventListener('DOMContentLoaded', init);

