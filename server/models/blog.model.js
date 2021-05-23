import { model, Schema } from 'mongoose';

const pageSchema = new Schema({
    title: {
        type: String,
        required: [true, 'blog page title is required ']
    },
    content: {
        type: String,
        required: [true, 'blog page content string is required in blog schema']
    }
});

const blogSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        required: [true, 'author id is required in blog schema']
    },
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
    },
    tags: {
        type: [string]
    },
    blog: [pageSchema],
    title: {
        type: String,
        required: [true, 'blog title is required in blog schema']
    },
    preview: {
        type: String,
        default: 'http://internetoh.com/wp-content/uploads/2014/01/start-a-blog.jpg'
    }
});

export default model('blog', blogSchema);