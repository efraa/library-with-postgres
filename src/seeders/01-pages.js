'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pages', [{

      nextPage: 1,
      prevPage: 3,
      page: 2,
      content: "<div class='premium-link'>\n<a class=\"no-margin-bottom btn white-text green-cf big-radius z-depth-1 right-space\" href=\"/subscribe\">Premium\n</a><a href=\"/users/sign_in\"><span class='hidden-xs'>Ingresar</span>\n<i class='material-icons black-text hidden-sm hidden-md hidden-lg'>account_box</i>\n</a></div>\n<div class='search'>\n<form action=\"/search\" accept-charset=\"UTF-8\" method=\"get\"><input name=\"utf8\" type=\"hidden\" value=\"&#x2713;\" />\n<input type=\"search\" name=\"keyword\" id=\"aa-search-input\" autocomplete=\"off\" class=\"white radius small-padding be-normal no-border no-margin f-neutral neutral-050\" placeholder=\"Buscar...\" />\n</form>\n</div>\n</div>\n</div>\n</nav>\n<nav class='big-padding black-cf white-text absolute full-width z-depth-1 courses-grid' id='courses-navigation'>\n<div class='text-center full-width absolute' style='top:20px;left:0;'>\n<p class='transparent-56'>\n<i class='material-icons spin loading align-icon'>cached</i>\nCargando\n</p>\n</div>\n</nav>\n<nav class='big-padding black-cf white-text absolute full-width z-depth-1 paths-grid' id='paths-navigation'>\n<div class='text-center full-width absolute' style='top:5px;left:0;'>\n<p class='transparent-56'>\n<i class='material-icons spin loading align-icon'>cached</i>\nCargando\n</p>\n</div>",
      bookId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pages', null, {})
  }
}
