import React from 'react'

const Contact = () => {
    return (
        <>
            <div className=' max-w-screen-2xl mx-auto my-40 flex flex-col justify-center items-center dark:text-black '>
                <div className='w-96 flex flex-col gap-5 py-5 px-10 rounded-2xl shadow-2xl shadow-red-200 drop-shadow-2xl dark:bg-slate-100' >
                    <h1 className='text-center font-bold text-2xl my-10'>Contact Us</h1>
                    <label className=" input flex items-center gap-2">
                        Name:
                        <input type="text" className="grow" placeholder="Enter your name" />
                    </label>
                    <label className="input flex items-center gap-2">
                        Email:
                        <input type="text" className="grow" placeholder="Enter your email" />
                    </label>
                    <label className="input flex items-center gap-2">
                        Phone:
                        <input type="tel" className="grow" placeholder="Enter your Phone" />
                    </label>
                    <textarea className=" textarea" placeholder="Enter your message"></textarea>
                    <div className='pt-5 pb-10 text-center'>
                        <button type='submit' className='px-3 py-2 bg-pink-500 hover:bg-pink-800 rounded-md text-white'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
