import { model, Schema } from 'mongoose';

const chatGroupSchema = new Schema({
    superAdmin: {
        type: Schema.Types.ObjectId,
        required: [true, 'super admin user id is required in chatgroup schema']
    },
    admin: [Schema.Types.ObjectId],
    members: [Schema.Types.ObjectId],
    profilePicture:{
        type:String,
        default:'https://img-premium.flaticon.com/png/512/3820/3820134.png?token=exp=1621229383~hmac=1125d4351bb7a5504f0e7e13e3fb7a9b'
    },
    bio:{
        type:String,
        default:'hello world!'
    }
});

export default model('chatGroup', chatGroupSchema);