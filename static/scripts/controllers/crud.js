define(function (require) {
    var Marionette = require('marionette');
    //var Bears = require('collections/bears');
    //var BearsTable = require('views/bears-table');

    /**
     * The basic structure of a CRUD controller. Includes create, edit and list pages for modifying a database table.
     */
    return Marionette.Controller.extend({
        initialize: function () {
            this.layout = this.getOption('layout');
        },

        list: function () {
            //var bears = new Bears();
            //var bearsTable = new BearsTable({
            //    collection: bears
            //});
            //this.layout.getRegion('main').show(bearsTable);
        },
        create: function () {

        },
        edit: function (id) {

        }
    });
});