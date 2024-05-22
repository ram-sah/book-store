import React from 'react';
import store from '../../public/store.avif'

const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2xl mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-20 md:mt-40 justify-evenly '>
                <div className=" w-full md:w-1/2 order-2 md:order-1 my-10">
                    <h1 className=' text-2xl text-center md:text-5xl '>
                        Welcome to our Book Store, a haven for <span className='text-pink-600 leading-relaxed'>bibliophiles !</span>
                    </h1>
                    <p className='mt-10 text-justify px-2 text-sm md:text-lg'>Our store offers an extensive collection of books across various genres, including fiction, non-fiction, mystery, fantasy, romance, and more. Whether you're seeking the latest bestsellers, timeless classics, or hidden gems, our well-curated selection ensures that you'll find the perfect read. Our knowledgeable staff is always on hand to offer personalized recommendations and assist with any queries.</p>
                    <label className="input input-bordered flex items-center gap-2 my-8">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className="grow" placeholder="Email " />
                    </label>
                    <button className='px-4 py-2 bg-pink-700 rounded-md text-white'> Submit</button>
                </div>
                <div className=" w-full md:w-1/2 order-1 md:mb-4 ">
                    <img src={store} alt="" className="md:w-[650px] md:h-[350px] md:ml-12 " />
                </div>
            </div>
        </>
    )
}

export default Banner;
