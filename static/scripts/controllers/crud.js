var Users = require('../collections/users');
var React = require('react');
var $ = require('jquery');
var BackboneReactTable = require('backbone-react-table');
var Table = BackboneReactTable.Table;
var TableRow = BackboneReactTable.TableRow;

/**
 * The basic structure of a CRUD controller. Includes create, edit and list pages for modifying a database table.
 */
module.exports = (function () {
    var users = new Users();

    var UserForm = React.createClass({
        handleSubmit: function (e) {
            e.preventDefault();
            var firstName = this.refs.first_name.getDOMNode().value.trim();
            var lastName = this.refs.last_name.getDOMNode().value.trim();
            var email = this.refs.email.getDOMNode().value.trim();
            var country = this.refs.country.getDOMNode().value.trim();

            if (!firstName || !lastName || !email || !country) {
                return;
            }

            users.create({
                first_name: firstName,
                last_name: lastName,
                email: email,
                country: country
            });

            this.refs.first_name.getDOMNode().value = '';
            this.refs.last_name.getDOMNode().value = '';
            this.refs.email.getDOMNode().value = '';
            this.refs.country.getDOMNode().value = '';
        },
        render: function () {
            return (
                <form className="bearForm" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Yogi" ref="first_name" />
                    <input type="text" placeholder="Bear" ref="last_name" />
                    <input type="text" placeholder="yogi.bear@gmail.com" ref="email" />
                    <input type="text" placeholder="USA" ref="country" />
                    <input type="submit" value="Post" />
                </form>
            );
        }
    });

    return {
        list: function () {
            users.fetch();

            /**
             * render my components in the DOM
             */
            // TODO: shouldn't have to use jQuery
            $(function () {
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

                var options = {
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

                React.render(
                    <Table options={options} collection={users} />,
                    document.getElementById('main')
                );
            });
        },
        create: function () {
            /**
             * render my components in the DOM
             */
            // TODO: shouldn't have to use jQuery
            $(function () {
                React.render(
                    <UserForm />,
                    document.getElementById('main')
                );
            });
        },
        edit: function (id) {
            var user = users.get(id);

            /**
             * render my components in the DOM
             */
            // TODO: shouldn't have to use jQuery
            // TODO: need to make sure form is populated for editing
            $(function () {
                React.render(
                    <UserForm model={user}/>,
                    document.getElementById('main')
                );
            });
        }
    }
})();
