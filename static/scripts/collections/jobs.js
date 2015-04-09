var Backbone = require('backbone');
var Job = require('../models/job');

module.exports = Backbone.Collection.extend({
    model: Job,
    url: '/api/jobs'
});