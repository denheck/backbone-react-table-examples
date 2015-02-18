var Collection = require('./collection');
var User = require('../models/user');

module.exports = Collection.extend({
    model: User,
    url: '/api/users'
});