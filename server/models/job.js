// Load required packages
var mongoose = require('mongoose');

// Define our task schema
var JobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    hourlyPay: { type: Number, required: true },
    employmentType: { type: String, required: true},
    weeklyHours: { type: Number, requried: true },
    dateCreated: {type: Date, required: true, default: Date.now}
});

// Export the Mongoose model
module.exports = mongoose.model('job', JobSchema, 'jobs');
