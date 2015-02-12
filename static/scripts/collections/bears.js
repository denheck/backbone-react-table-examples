var PageableCollection = require('backbone.paginator');
var Bear = require('../models/bear');

module.exports = PageableCollection.extend({
    model: Bear,
    url: '/api/bears'
});