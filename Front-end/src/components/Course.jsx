import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import data from '../assets/data';

import Cards from './Cards';
import { Link } from 'react-router-dom'

const Course = () => {
    const [book, setBook] = useState([])

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data);
                setBook(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getBook();
    }, [])

    return (
        <>
            <div className='max-w-screen-2xl mx-auto md:px-20 px-4 mt-20 md:mt-40 text-center flex flex-col my-10 justify-evenly'>
                <h1 className='text-2xl font-semibold text-center'>We are delighted to have you <span className='text-pink-500'>here.</span></h1>
                <p className='mt-10 text-justify text-sm md:text-lg'>
                    Welcome to our Book Store, a haven for bibliophiles and casual readers alike! Our store offers an extensive collection of books across various genres, including fiction, non-fiction, mystery, fantasy, romance, and more.
                </p>
                <Link to='/' >
                    <div className='flex justify-center items-center h-full'>
                        <button className='px-3 py-1 bg-pink-500 hover:bg-pink-700 rounded-md text-white duration-300 my-5 w-20' >Back</button>
                    </div>
                </Link>
                <div className='my-20 grid grid-cols-1 md:grid-cols-3 gap-6 '>
                    {
                        book.map((course) => (
                            <Cards key={course.id} item={course} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course;
