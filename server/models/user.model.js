import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'userName is required'],
        match: [/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/, 'username can only contain letter, no. and underscore']
    },
    fullName: {
        type: String,
        required: [true, 'first name is required'],
        match: [/^[a-zA-Z]+[ ]*[a-zA-Z]*[ ]*[a-zA-Z]*$/, 'first name can only contain letters']
    },
    email: {
        type: String,
        required: [true, 'mail id is required'],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'email is invalid'],
        unique: true
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    profilePicture: {
        type: String,
        default: '',
    },
    interests: {
        type: [String]
    },
    about: {
        type: String,
        default: 'Hey, i am blogging !'
    },
    bio: {
        type: String,
        default: 'I love to blog about web development...'
    },
    followers: {
        type: Number,
        default: 0
    },
    following: {
        type: Number,
        default: 0
    },
    bolgs: {
        type: Number,
        default: 0
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        return next();
    } catch (err) {
        return next(err);
    }
});

export default mongoose.model('user', userSchema);