import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

const FreeBooks = () => {
    const [book, setBook] = useState([])

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("/book");
                console.log(res.data.filter((e) => e.category === "Free"));
                setBook(res.data.filter((e) => e.category === "Free"));
            } catch (error) {
                console.log(error);
            }
        }
        getBook();
    }, [])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <dir className=" max-w-screen-2xl mx-auto md:px-20 px-4  my-10 md:mt-20 justify-evenly ">
                <h1 className=' text-2xl font-semibold'>Free Offered Books</h1>
                <p className='mt-10 text-justify text-sm md:text-lg'>Free Books also we host regular events such as author signings, book clubs, and reading sessions to foster a vibrant literary community.
                    Visit us to explore, discover, and immerse yourself in the world of books.</p>
                <div className=' my-20 '>
                    <Slider {...settings} >
                        {book.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>

                </div>
            </dir>
        </>
    )
}

export default FreeBooks;
