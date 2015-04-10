var Backbone = require('backbone');
var JobsController = require('./controllers/jobs');
var UsersController = require('./controllers/users');

module.exports = Backbone.Router.extend({
    initialize: function() {
        this.controllers = {
            jobs: new JobsController({router: this}),
            users: new UsersController({router: this})
        };

        Backbone.history.start();
    }
});
