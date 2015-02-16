var Backbone = require('backbone');
var CrudController = require('./controllers/crud');

module.exports = Backbone.Router.extend({
    routes: {
        "things": CrudController.list,
        "things/create": CrudController.create,
        "things/edit/id/:id": CrudController.edit
    }
});