import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    title: String,
    image: String,
    updatedAt: Date
}, { timestamps: true });

// Add unique index on the 'name' field
bookSchema.index({ name: 1 }, { unique: true });

const Book = mongoose.model('Book', bookSchema);

export default Book;
