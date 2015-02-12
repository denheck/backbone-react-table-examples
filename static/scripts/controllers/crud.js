var Bears = require('../collections/bears');

/**
 * The basic structure of a CRUD controller. Includes create, edit and list pages for modifying a database table.
 */
module.exports = {
    list: function () {
        var bears = new Bears();
        bears.fetch();
    },
    create: function () {

    },
    edit: function (id) {

    }
};
