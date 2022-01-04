import React from "react";
import { useForm } from "react-hook-form";
const AddService = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{ console.log(data)
reset()}
  return (
    <div className="containter">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Title" {...register("title", { required: true })} />
        <textarea
          placeholder="Discretion"
          {...register("Discretion", { required: true })}
        />
        <input
          placeholder="Image Url"
          {...register("url", { required: false })}
        />
        <input
          placeholder="Per Person Service Charge"
          type="number"
          {...register("person", { required: true })}
        />
        {errors.exampleRequired && (
          <span className="text-danger">This field is required</span>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
