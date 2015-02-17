var PageableCollection = require('backbone.paginator');

module.exports = PageableCollection.extend({
    parseRecords: function (resp) {
        return resp.data;
    }
});