import { model, Schema } from 'mongoose';

const commentsSchema = new Schema({
    itemId: {
        type: Schema.Types.ObjectId,
        required: [true, 'item id is required in comments schema']
    },
    itemType: {
        type: String,
        enum: ['blog', 'comment', 'reply']
    },
    commentedBy: {
        type: Schema.Types.ObjectId,
        required: [true, 'likedBy id is required in comments schema']
    }
});

export default model('comments', commentsSchema);