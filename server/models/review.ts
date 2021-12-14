import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
    overall: { type: Number, required: true },
    workLifeBalance: { type: Number, required: true },
    culture: { type: Number, required: true },
    transportation: { type: Number, required: true },
    flexibility: { type: Number, required: true },
    headline: { type: String, required: true },
    reviewText: { type: String, required: true },
    jobReviewed: { type: String, required: true },
    reviewerName: { type: String, required: true },
    dateCreated: {type: Date, required: true, default: Date.now}
});

export default mongoose.model('review', ReviewSchema, 'reviews');