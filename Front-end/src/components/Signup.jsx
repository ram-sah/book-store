import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from '../context/AuthProvider';

const Signup = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const [authUser, setAuthUser] = useAuth();
    // handling input form from 'useForm react hook form'
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            full_name: data.full_name,
            email: data.email,
            password: data.password,
        }
        await axios.post(`${import.meta.env.MongoDbURL}/user/signup`, userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success("Signup Successful");
                    setTimeout(() => {
                        setAuthUser(res.data.user)
                        localStorage.setItem("Users", JSON.stringify(res.data.user));
                        window.location.reload();
                    }, 1000)
                    navigate(from, { replace: true });
                }
            }).catch((err) => {
                console.log(err)
                toast.error("Error: " + err.response.data.message)
            })
    }
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
                                    {...register("full_name", { required: true })}
                                />
                                <br />
                                {errors.full_name && (
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
