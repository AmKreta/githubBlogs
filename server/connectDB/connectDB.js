import mongoose from 'mongoose';

const connectDB = async (dbname) => {
    try {
        let conn = await mongoose.connect(`${process.env.MONGO_URL}/${dbname}`, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.table({
            mongoDB: 'connected',
            host: conn.connection.host,
            name: conn.connection.name,
        });
    }
    catch (err) {
        console.log(err);
    }
}

export default connectDB;