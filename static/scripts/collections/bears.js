define(['backbone.paginator', 'models/bear'], function (PageableCollection, Bear) {
    return PageableCollection.extend({
        model: Bear
    });
});