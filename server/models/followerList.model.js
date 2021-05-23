import { model, Schema } from 'mongoose';

const followerListSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: [true, 'userId is required in followers list']
    },
    list: [Schema.Types.ObjectId]
});

export default model('followerList', followerListSchema);

