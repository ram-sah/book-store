import Book from "../model/book-model.js";

export const getBook = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
}
// get free books
export const getFreeBook = async (req, res) => {
    try {
        const books = await Book.find({ category: "Free" });
        res.status(200).json(books);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
}

// Controller to add a new book
export const addBook = async (req, res) => {
    try {
        const { name, price, category, title, image } = req.body;

        // Validate input
        if (!name || !price || !category || !title || !image) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create a new book instance
        const newBook = new Book({
            name,
            price,
            category,
            title,
            image
        });

        // Save the new book to the database
        await newBook.save();

        // Send a success response
        res.status(201).json({ message: 'Book added successfully!', book: newBook });
    } catch (error) {
        console.error('Error adding book:', error);
        res.status(500).json({ message: 'Internal Server Error', error });
    }
};
