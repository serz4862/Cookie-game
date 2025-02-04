import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    counter: { type: Number, default: 0 },
    prizes: { type: Number, default: 0 }
});

export default mongoose.model('User', UserSchema);