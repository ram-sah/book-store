import React from 'react'

const Cards = ({item}) => {
    console.log(item)
    return (
        <>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src= {item.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.title}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.description}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline"> ${item.price}</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
