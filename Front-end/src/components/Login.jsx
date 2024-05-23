import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => console.log(data)

    return (
        <>
            <dialog id="my_modal_3" className="modal w-96 rounded-xl mx-auto shadow-xl">
                <div className="modal-box overflow-hidden p-14 flex flex-col justify-center items-center dark:bg-slate-500 dark:text-white relative">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog" >
                        {/* if there is a button in form, it will close the modal */}
                        <Link
                            to="/"
                            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >
                            ✕
                        </Link>
                    </form>
                    <h3 className="font-bold text-lg text-center mb-5">Log In</h3>
                    <div className=" ">
                        <p className="py-4">Email</p>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-80 p-2 border rounded-md outline-none dark:bg-slate-500"
                            {...register("email", { required: true })}
                        />
                        <p className="py-2 mt-8">Password</p>
                        <input
                            type="password"
                            placeholder="Enter your Password"
                            className="w-80 p-2 border rounded-md outline-none dark:bg-slate-500"
                            {...register("password", { required: true })}
                        />
                        {/* button */}
                        <div className="flex mt-16 justify-between items-center ">
                            <button className=" px-4 py-1 bg-pink-500 hover:bg-pink-800 text-white rounded-md">
                                Log In
                            </button>
                            <p className=" flex justify-center items-center text-sm">
                                Not Registered? {" "}
                                <Link
                                    to="/signup"
                                    className="ml-2 text-blue-500 dark:text-blue-300 underline cursor-pointer"
                                    onClick={() => document.getElementById("my_modal").close()}
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Login;
