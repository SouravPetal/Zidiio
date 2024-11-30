const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactFormDB', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');

    // Create the collection
    db.createCollection('contacts', function(err, res) {
        if (err) throw err;
        console.log('Collection created!');
        mongoose.connection.close();
    });
});
