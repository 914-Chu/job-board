import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dateCreated: {type: Date, required: true, default: Date.now}
});

export default mongoose.model('user', UserSchema, 'users');