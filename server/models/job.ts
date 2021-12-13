import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    externalLink: { type: String, required: true},
    location: { type: String, required: true },
    hourlyPay: { type: Number, required: true },
    employmentType: { type: String, required: true},
    weeklyHours: { type: Number, requried: true },
    tags: { type: [String], default: [] },
    relatedMajors: { type: [String], default: [] },
    averageRating: { type: Number, default: 0 },
    postAuthor: { type: String, default: "" },
    datePosted: {type: Date, required: true, default: Date.now}
});

export default mongoose.model('job', JobSchema, 'jobs');
