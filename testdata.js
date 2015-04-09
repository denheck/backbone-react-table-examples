var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017'); // connect to our database

var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    country: String
});

var JobSchema = new Schema({
    name: String,
    title: String,
    country: String
});

var User = mongoose.model('User', UserSchema);
var Job = mongoose.model('Job', JobSchema);

User.remove({}, function (err) {
    console.log(err || "Successfully removed all users");
});

Job.remove({}, function (err) {
    console.log(err || "Successfully removed all jobs");
});

var userData = require('./user-data.json');
var jobData = require('./job-data.json');
var total = userData.length + jobData.length;
var count = 0;

userData.forEach(function(item) {
    var user = new User();

    user.first_name = item.first_name;
    user.last_name = item.last_name;
    user.email = item.email;
    user.country = item.country;

    user.save(function(err) {
        if (err) {
            console.log(err);
            process.exit(1);
        }

        console.log('User created with first name: ' + item.first_name);
        if (++count >= total) process.exit(0);
    });
});

jobData.forEach(function(item) {
    var job = new Job();

    job.company = item.company;
    job.title = item.title;
    job.country = item.country;

    job.save(function(err) {
        if (err) {
            console.log(err);
            process.exit(1);
        }

        console.log('Job created with company: ' + item.company);
        if (++count >= total) process.exit(0);
    });
});