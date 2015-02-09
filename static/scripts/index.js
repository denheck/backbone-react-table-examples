require(["backbone", "router"], function (Backbone, Router) {
    var app = new Backbone.Marionette.Application();
    var router = new Router();

    /**
     * Define routes within callback before app starts.
     */
    router.listenTo(app, "before:start", router.setup);

    /**
     * Start app
     */
    app.start();

    /**
     * Monitor hashchange events and dispatch routes
     */
    Backbone.history.start();
});