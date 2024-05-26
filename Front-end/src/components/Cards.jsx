import React from 'react'

const Cards = ({ item }) => {
    const itemStatus = (item && item.price) ? "Buy Now" : "$1+ Donate";

    return (
        <>
            <div className='border w-96 md:w-full mx-auto bg-base-100 shadow-xl rounded-2xl transform transition-transform duration-300 hover:scale-105 dark:bg-slate-500 dark:text-white'>
                <div className="card w-full justify-evenly items-center text-justify" style={{ "height": "400px" }}>
                    <figure className="relative w-full ">
                        <img src={item.image} alt="book image" className="object-cover object-top w-full h-full" />
                    </figure>
                    <div className="card-body ">
                        <div className='flex justify-between gap-4'>
                            <h2 className="card-title">
                                {item.title} </h2>
                            <h4 className="badge badge-secondary">{item.category}</h4>
                        </div>
                        <p>{item.description}</p>
                        <div className="card-actions pt-2 justify-between">
                            <div className="badge badge-outline p-3">${item.price}</div>
                            <div className="badge badge-outline bg-gray-400 text-white p-4 hover:bg-gray-600 cursor-pointer">
                                {itemStatus}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cards;
