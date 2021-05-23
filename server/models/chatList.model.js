import { model, Schema } from 'mongoose';

const chatListSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: [true, 'user id is required in chat list schema']
    },
    type: {
        type: String,
        enum: ['private', 'group']
    },
    list: [Schema.Types.ObjectId]
});

export default model('chatList', chatListSchema);