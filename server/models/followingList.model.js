import { model, Schema } from 'mongoose';

const followingListSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: [true, 'userId is required in following list']
    },
    list: [Schema.Types.ObjectId]
});

export default model('followingList', followingListSchema);

