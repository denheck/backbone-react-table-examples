var Backbone = require('backbone');
var React = require('react');
var $ = require('jquery');
var BackboneReactTable = require('backbone-react-table');

var Users = require('../collections/users');
var UserForm = require('../components/user-form');

var Table = BackboneReactTable.Table;
var TableRow = BackboneReactTable.TableRow;

module.exports = Backbone.Controller.extend({
    routes: {
        'users': 'list',
        'users/create': 'create',
        'users/edit/id/:id': 'edit'
    },
    initialize: function () {
        this.users = new Users();
    },
    list: function () {
        this.users.fetch();

        /**
         * collection: collection (required)
         * Options (required):
         *
         *      columns: array of String column names or object literal with column definitions
         *              column definition properties:
         *                       name: String column name (required)
         *                      label: String column name which appears to the user
         *                      sortable: Boolean determining if a collection can be sorted by the column
         *                      headerColumnCallback: Function to add custom header column. Should return React component
         */
        var userTableOptions = {
            columns: [
                {
                    name: "select",
                    render: function () {
                        return (<th><input type="checkbox" /></th>);
                    }
                },
                {
                    name: "_id",
                    label: "id"
                },
                {
                    name: 'first_name',
                    label: 'first_name',
                    sort: true
                },
                {
                    name: 'last_name',
                    label: 'last_name',
                    sort: true
                },
                {
                    name: 'email',
                    label: 'email',
                    sort: true
                },
                {
                    name: 'country',
                    label: 'country',
                    sort: true
                }
            ],
            rows: {
                render: function (model, columns, defaultRender) {
                    if (model.get('first_name') !== 'Joseph') {
                        return defaultRender(model);
                    }

                    return <TableRow className="info" key={model.id} model={model} columns={columns} />
                }
            }
        };

        $(function () {
            React.render(
                <div>
                    <Table options={userTableOptions} collection={this.users} />
                </div>,
                document.getElementById('main')
            );
        }.bind(this));
    },
    create: function () {
        /**
         * render my components in the DOM
         */
        // TODO: shouldn't have to use jQuery
        $(function () {
            React.render(
                <UserForm users={this.users} />,
                document.getElementById('main')
            );
        }.bind(this));
    },
    edit: function (id) {

    }
});
