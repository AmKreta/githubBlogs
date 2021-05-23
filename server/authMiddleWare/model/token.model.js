import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema({
    access_token_secret: {
        type: String,
        required: [true, 'access_token_secret is required in token schema']
    },
    refresh_token_secret: {
        type: String,
        required: [true, 'refresh_token_secret is required in token schema']
    },
    recently_issued_acess_token: {
        type: String,
        required: [true, 'recently_issued_access_token is required in token schema']
    },
    user_id: {
        type: String,
        required: [true, 'user_id is required in token schema'],
        unique: true
    }
});

export default mongoose.model('token', tokenSchema);