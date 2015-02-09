define(['marionette'], function (Marionette) {
    return Marionette.LayoutView.extend({
        el: 'body',

        regions: {
            left_nav: "#left-nav",
            main: "#main"
        }
    });
});