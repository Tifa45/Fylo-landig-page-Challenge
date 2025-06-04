import { useState } from "react";
import { useForm } from "react-hook-form";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
    },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex-center-md gap-4 w-full ">
        <div className="w-full min-w-1/2 xl:w-[60%] mb-4 md:mb-0 ">
          <input
            {...register("email", {
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Please enter a valid email address",
              },
              required: "Please enter a valid email address",
            })}
            className="bg-white outline-none rounded-4xl p-4 w-full"
            type="email"
            placeholder="email@example.com"
          />
          
        </div>
        <div className=" md:w-1/2 xl:w-[35%]">
          <button type="submit" className="reg-btn">
            Get Started For Free
          </button>
        </div>
      </div>
      {errors.email && (
        <p className="text-red-500 font-bold px-8 mt-1 text-[14px]">
          {" "}
          {errors.email.message}{" "}
        </p>
      )}
     
    </form>
  );
}

export default RegisterForm;
