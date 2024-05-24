import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
    // handle input form from 'useForm react hook form'
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <>
            <div className="flex h-screen  ">
                <div id="my_modal" className=" justify-center items-center flex mx-auto">
                    <div className="modal-box p-14 rounded-xl flex flex-col justify-center items-center dark:bg-slate-500 dark:text-white relative">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link
                                to="/"
                                className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                            >
                                ✕
                            </Link>

                            <h3 className="font-bold text-lg text-center">Sign Up</h3>
                            <div className="">
                                <p className="py-4"> Name</p>
                                <input
                                    type="text"
                                    placeholder="Enter your Name"
                                    className="w-80 p-2 border rounded-md outline-none dark:bg-slate-500"
                                    // handle input form from 'useForm react hook form'
                                    {...register("name", { required: true })}
                                />
                                <br />
                                {errors.name && (
                                    <span className="text-sm text-red-500">
                                        This field is required
                                    </span>
                                )}
                                <p className="py-4">Email</p>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-80 p-2 border rounded-md outline-none dark:bg-slate-500"
                                    // handle input form from 'useForm react hook form'
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && (
                                    <span className="text-sm text-red-500">
                                        This field is required
                                    </span>
                                )}
                                <p className="py-4">Password</p>
                                <input
                                    type="password"
                                    placeholder="Enter your Password"
                                    className="w-80 p-2 border rounded-md outline-none dark:bg-slate-500"
                                    // handle input form from 'useForm react hook form'
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && (
                                    <span className="text-sm text-red-500">
                                        This field is required
                                    </span>
                                )}
                                {/* button */}
                                <div className="flex mt-8 justify-between">
                                    <button className=" px-4 py-1 bg-pink-500 hover:bg-pink-800 text-white rounded-md">
                                        Sign Up
                                    </button>
                                    <p className="flex justify-center items-center">
                                        Have account? {""}
                                        <Link to="/" className="ml-2 text-blue-500 dark:text-blue-300 underline cursor-pointer"
                                            onClick={() => document.getElementById("my_modal_3").showModal()}>
                                            Log In
                                        </Link>
                                        <Login />
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
