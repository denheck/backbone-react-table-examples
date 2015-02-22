// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');
var mongoose   = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set our port

mongoose.connect('mongodb://localhost:27017'); // connect to our database

// define schema
var Schema       = mongoose.Schema;
var UserSchema   = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    country: String
});
UserSchema.plugin(mongoosePaginate);

var User = mongoose.model('User', UserSchema);


// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// on routes that end in /users
// ----------------------------------------------------
router.route('/users')

    // create a user (accessed at POST http://localhost:8080/users)
    .post(function(req, res) {

        var user = new User();		// create a new instance of the User model
        user.first_name = req.body.first_name;  // set the users name (comes from the request)
        user.last_name = req.body.last_name;  // set the users name (comes from the request)
        user.email = req.body.email;  // set the users name (comes from the request)
        user.country = req.body.country;  // set the users name (comes from the request)

        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User created!' });
        });


    })

    // get all the users (accessed at GET http://localhost:8080/api/users)
    .get(function(req, res) {
        var sortBy = {};

        if (req.query.sort && req.query.order) {
            sortBy[req.query.sort] = (req.query.order === 'asc') ? -1 : 1;
        }

        User.paginate({}, req.query.page, req.query.per_page, function(err, pageCount, users, itemCount) {

            if (err)
                res.send(err);

            res.json({
                data: users,
                total_pages: pageCount,
                total_entries: itemCount
            });
        }, {sortBy: sortBy});
    });

// on routes that end in /users/:user_id
// ----------------------------------------------------
router.route('/users/:user_id')

    // get the user with that id
    .get(function(req, res) {
        User.findById(req.params.user_id, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    })

    // update the user with this id
    .put(function(req, res) {
        User.findById(req.params.user_id, function(err, user) {

            if (err)
                res.send(err);

            user.name = req.body.name;
            user.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'User updated!' });
            });

        });
    })

    // delete the user with this id
    .delete(function(req, res) {
        User.remove({
            _id: req.params.user_id
        }, function(err, user) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);
app.use(express.static('static'));

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
