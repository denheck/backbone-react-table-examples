var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017'); // connect to our database

var Schema       = mongoose.Schema;
var BearSchema   = new Schema({
    name: String,
    location: String
});

var Bear = mongoose.model('Bear', BearSchema);

var testData = [
    {
        name: 'Jeff',
        location: 'Yellowstone'
    },
    {
        name: 'Bob',
        location: 'Upper Peninsula'
    },
    {
        name: 'Bill',
        location: 'Yukon'
    }
];

testData.forEach(function(item) {
    var bear = new Bear();
    bear.name = item.name;
    bear.location = item.location;
    bear.save(function(err) {
        if (err)
            console.log(err);

        console.log('Bear created with id: ' + item.id);
    });
});
