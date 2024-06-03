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
const URL = process.env.MongoDbURL;
// Middleware to parse JSON requests
app.use(express.json());
//connect to mongodb server locally
try {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("Connected to MongoDb server")
} catch (error) {
    console.log("Error", error)
}

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Book Store API');
});
//defining routes
app.use('/book', bookRoute);
app.use('/user', userRoute);

//deployment
if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, 'Front-end', 'dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'Front-end', 'dist', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(` App listening on port ${port}`)
})
