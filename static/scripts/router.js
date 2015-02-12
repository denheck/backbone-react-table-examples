var Backbone = require('backbone');
var CrudController = require('./controllers/crud');

module.exports = Backbone.Router.extend({
    routes: {
        "things": CrudController.index,
        "things/create": CrudController.list,
        "things/edit/id/:id": CrudController.edit
    }
});