var Users = require('../collections/users');
var React = require('react');
var $ = require('jquery');
var Table = require('../views/table');

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
                var columns = [
                    {
                        name: "_id",
                        label: "id"
                    },
                    'first_name',
                    'last_name',
                    'email',
                    'country'
                ];

                React.render(
                    <Table collection={users} columns={columns} id-attribute={users.model.prototype.idAttribute}/>,
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
