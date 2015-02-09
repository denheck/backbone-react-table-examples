define(['marionette'], function (Marionette) {
    /**
     * The basic structure of a CRUD controller. Includes create, edit and list pages for modifying a database table.
     */
    return Marionette.Controller.extend({
        initialize: function () {
            this.layout = this.getOption('layout');
        },

        list: function () {
            this.layout.getRegion('main');
        },
        create: function () {

        },
        edit: function (id) {

        }
    });
});