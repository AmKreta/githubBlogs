import { model, Schema } from 'mongoose';

const likesSchema = new Schema({
    itemId: {
        type: Schema.Types.ObjectId,
        required: [true, 'item id is required in likes schema']
    },
    itemType: {
        type: String,
        enum: ['blog', 'comment', 'reply'],
        required: [true, 'type mof liked item is required in likes schema']
    },
    likedBy: {
        type: Schema.Types.ObjectId,
        required: [true, 'likedBy id is required in likes schema']
    }
});

export default model('likes', likesSchema);