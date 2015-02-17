var Collection = require('./collection');
var Bear = require('../models/bear');

module.exports = Collection.extend({
    model: Bear,
    url: '/api/bears'
});