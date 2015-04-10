var Backbone = require('backbone');
var BackboneController = require('backbone.controller');
var React = require('react');
var $ = require('jquery');

var Jobs = require('../collections/jobs');

var BackboneReactTable = require('backbone-react-table');
var Table = BackboneReactTable.Table;

/**
 * The basic structure of a CRUD controller. Includes create, edit and list pages for modifying a database table.
 */
module.exports = Backbone.Controller.extend({
    initialize: function () {
        this.jobs = new Jobs();
    },
    list: function () {
        jobs.fetch();

        /**
         * render my components in the DOM
         */
        // TODO: shouldn't have to use jQuery
        $(function () {
            var jobTableOptions = {
                columns: [
                    {
                        name: 'company',
                        label: 'company',
                        sort: true
                    },
                    {
                        name: 'title',
                        label: 'title',
                        sort: true
                    },
                    {
                        name: 'country',
                        label: 'country',
                        sort: true
                    }
                ]
            };

            React.render(
                <div>
                    <Table options={jobTableOptions} collection={jobs} />
                </div>,
                document.getElementById('main')
            );
        });
    }
});
