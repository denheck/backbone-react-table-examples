var PageableCollection = require('backbone.paginator');

module.exports = PageableCollection.extend({
    queryParams: {
        totalPages: null,
        totalRecords: null,
        sortKey: "sort"
    },
    parseRecords: function (resp) {
        return resp.data;
    },
    parseState: function (resp) {
        return {
            totalRecords: resp.total_entries,
            totalPages: resp.total_pages
        };
    }
});