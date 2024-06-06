import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './route/book-route.js';
import userRoute from './route/user-route.js';
import cors from 'cors';
import path from 'path';

dotenv.config()
const app = express()
app.use(cors());

const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
const URL = process.env.MongoDbURL;
mongoose.connect(URL)
  .then(() => console.log("Connected to MongoDb server"))
  .catch(error => console.log("Error", error));

//defining routes
app.use('/book', bookRoute);
app.use('/user', userRoute);

//deployment
if (process.env.NODE_ENV === 'production') {
    const dirname = path.resolve();
    app.use(express.static('Front-end/dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(dirname, "Front-end","dist","index.html"));
    });
}

app.listen(port, () => {
    console.log(` App listening on port ${port}`)
})
