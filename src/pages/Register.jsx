import React from 'react'
import { registerSchema } from '../service/loginSchema'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerr } from "../service/auth";

import {
  successNotification,
  errorNotification,
} from "../service/notification";



function Register() {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const handleFormSubmit = (data) => {
    // login
    const { email,password,firstName,lastName } = data;
    registerr(
      { email,password,firstName,lastName },
      successNotification,
      errorNotification
    );
  };
  return (
    <div className='bg-[#202d33] flex justify-center items-center w-full h-[100vh]'>
        <div className='p-10 rounded-xl shadow-xl font-medium bg-white  w-full md:w-1/3'>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                            <div className="mb-4 mt-3">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    className="block focus:outline-none appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mt-3"
                                    placeholder="enter your firstName"
                                    {...register("firstName")}
                                />
                                <p className="text-red-600">{errors.firstName?.message}</p>
                            </div>
                            <div className="mb-4 mt-3">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    className="block focus:outline-none appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mt-3"
                                    placeholder="enter your lastName"
                                    {...register("lastName")}
                                />
                                <p className="text-red-600">{errors.lastName?.message}</p>
                            </div>                
                            <div className="mb-4 mt-3">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="block focus:outline-none appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mt-3"
                                    placeholder="enter your email"
                                    {...register("email")}
                                />
                                <p className="text-red-600">{errors.email?.message}</p>
                            </div>
                            <div className="mb-4 mt-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="block focus:outline-none appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mt-3"
                                    placeholder="enter your password"
                                    {...register("password")}
                                />
                                <p className="text-red-600">{errors.password?.message}</p>
                            </div>

                            <div className="mb-4 mt-3">
                                <button className="bg-[#005c4b] inline-block align-middle text-center select-none font-medium whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-site-color text-white hover:scale-110">Register</button>
                            </div>
                        </form>
        </div>
    </div>
  )
}

export default Register