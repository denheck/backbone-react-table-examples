var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017'); // connect to our database

var Schema       = mongoose.Schema;
var UserSchema   = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    country: String
});

var User = mongoose.model('User', UserSchema);
var testData = require('./mock_data.json');

testData.forEach(function(item) {
    var user = new User();
    user.first_name = item.first_name;
    user.last_name = item.last_name;
    user.email = item.email;
    user.country = item.country;
    user.save(function(err) {
        if (err)
            console.log(err);

        console.log('User created with first name: ' + item.first_name);
    });
});
