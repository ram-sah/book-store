import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Signup = () => {
    return (
        <>
            <div className="flex h-screen  ">
                <div id="my_modal1" className=" justify-center items-center flex mx-auto">
                    <div className="modal-box p-14 rounded-xl flex flex-col justify-center items-center dark:bg-slate-500 dark:text-white relative">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link
                                to="/"
                                className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                            >
                                ✕
                            </Link>
                        </form>
                        <h3 className="font-bold text-lg text-center">Sign Up</h3>
                        <div className="">
                            <p className="py-4"> Name</p>
                            <input
                                type="text"
                                placeholder="Enter your Name"
                                className="w-80 p-2 border rounded-md outline-none dark:bg-slate-500"
                            />
                            <p className="py-4">Email</p>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 p-2 border rounded-md outline-none dark:bg-slate-500"
                            />
                            <p className="py-4">Password</p>
                            <input
                                type="password"
                                placeholder="Enter your Password"
                                className="w-80 p-2 border rounded-md outline-none dark:bg-slate-500"
                            />
                        {/* button */}
                        <div className="flex mt-8 justify-between">
                            <button className="px-3 py-1 bg-pink-500 hover:bg-pink-800 text-white rounded-md">
                                Sign Up
                            </button>
                            <p className="flex justify-center items-center">
                                Have account? {""}
                                <Link to="/" className="ml-2 text-blue-500 dark:text-blue-300 underline cursor-pointer"
                                    onClick={() => document.getElementById("my_modal").showModal()}>
                                    Log In
                                </Link>
                                <Login />
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
