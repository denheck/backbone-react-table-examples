define(function (require) {
    var Backbone = require('backbone');
    var Layout = require('layout');
    var CrudController = require('controllers/crud');

    var layout = new Layout();
    var crudController = new CrudController({
        layout: layout
    });

    return Backbone.Marionette.AppRouter.extend({
        /**
         * dispatch routes to their respective controller methods
         */
        setup: function () {
            this.processAppRoutes(crudController, {
                "things": "list",
                "things/create": "create",
                "things/edit/id/:id": "edit"
            });
        }
    });
});