import { model, Schema } from 'mongoose';

const chatSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        required: [true, 'sender id is required in chat model']
    },
    receiver: {
        type: Schema.Types.ObjectId,
        required: [true, 'receiver id is required in chat model']
    },
    text: {
        type: String
    },
    media: [{
        type: String
    }]
});

export default model('chat', chatSchema);

