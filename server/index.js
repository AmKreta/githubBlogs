
import express from 'express';
import fileupload from 'express-fileupload';
import { Server } from 'http';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';

//importing custom modules
import connectDB from './connectDB/connectDB.js';
import Routes from './routes/routes.js';
import errorHandler from './errorHandlerMiddleware/errorHandler.middleware.js';

//importing enviornment variables
dotenv.config({ path: path.resolve(process.cwd(), './config/config.env') });

//configuring express
const app = express();
app.use(cors());
app.use(express.json());
app.use(fileupload());

//setting up routes
app.use('/api', Routes);

//setting up error handling middlewares
app.use(errorHandler);

//connecting to database
connectDB('githubBlog');

//configuring server
const server = Server(app);
server.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT} in ${process.env.MODE} mode.`)
});
process.on('unhandeledRejection', (err, promise) => {
    console.log(err);
    server.close(() => {
        process.exit('terminating the process');
    })
});


