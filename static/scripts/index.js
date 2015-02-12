/**
 * Bootstrap backbone
 */
var Backbone = require('backbone');
var jQuery = require('jquery');
Backbone.$ = jQuery;

/**
 * Start routing
 * @type {exports}
 */
var Router = require('./router');
new Router();

/**
 * Monitor hashchange events and dispatch routes
 */
Backbone.history.start();