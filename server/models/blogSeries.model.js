import { Schema, model } from 'mongoose';

const blogSeriesSchema = new Schema({
    seriesName: {
        type: String,
        required: [true, 'blog series name is required']
    },
    blogs: [Schema.Types.ObjectId],
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: Number,
        default: 0
    },
    shares: {
        type: Number,
        default: 0
    },
    addedToLibrary: {
        type: Number,
        default: 0
    }
});

export default model('blogSeries', blogSeriesSchema);