const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactFormDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a schema and model for contacts
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String
});

const Contact = mongoose.model('Contact', contactSchema);

// Route to handle form submission
app.post('/contact', (req, res) => {
    const { name, email, phone, message } = req.body;

    // Create a new contact document
    const newContact = new Contact({
        name,
        email,
        phone,
        message
    });

    // Save the document to the
    newContact.save((err) => {
        if (err) {
            return res.status(500).send('Error while saving to database: ' + err.message);
        }
        res.status(200).send('Contact saved successfully');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
