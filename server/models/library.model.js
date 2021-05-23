import { model, Schema } from 'mongoose';

const LibrarySchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: [true, 'userId is required in library schema']
    },
    library: [{
        section: {
            type: String,
            required: [true, 'section name is required']
        },
        blog: [{
            itemType: {
                type: String,
                enum: ['blogSeries,blog']
            },
            itemId: Schema.Types.ObjectId
        }]
    }]
});

export default model('followerList', LibrarySchema);

