var Backbone = require('backbone');
var React = require('react');
var $ = require('jquery');

var Users = require('../collections/users');
var UserForm = require('../components/user-form');
var UsersTable = require('../components/users-table');

module.exports = Backbone.Controller.extend({
    routes: {
        'users': 'list',
        'users/create': 'create',
        'users/edit/id/:id': 'edit'
    },
    initialize: function () {
        this.users = new Users();
        this.users.fetch();
    },
    list: function () {
        // TODO: shouldn't have to use jQuery
        $(function () {
            React.render(
                <UsersTable users={this.users} />,
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
