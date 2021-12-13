// Load required packages
import mongoose from 'mongoose';

// Define our task schema
const JobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    hourlyPay: { type: Number, required: true },
    employmentType: { type: String, required: true},
    weeklyHours: { type: Number, requried: true },
    dateCreated: {type: Date, required: true, default: Date.now}
});

// Export the Mongoose model
export default mongoose.model('job', JobSchema, 'jobs');
