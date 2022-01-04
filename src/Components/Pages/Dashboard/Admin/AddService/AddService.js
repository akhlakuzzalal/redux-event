import React from "react";
import { useForm } from "react-hook-form";
import './AddService.css';
const AddService = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://limitless-dusk-46203.herokuapp.com/service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Data added successfully");
          reset();
        }
      });
  };
  return (
    <div className="add-service">
      <h1>Add Service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Title" {...register("title", { required: true })} />
        <textarea
          placeholder="Discretion"
          {...register("Discretion", { required: true })}
        />
        <input
          placeholder="Image Url"
          {...register("url", { required: true })}
        />
        <input
          placeholder="Per Person Service Charge"
          type="number"
          {...register("amount", { required: true })}
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
