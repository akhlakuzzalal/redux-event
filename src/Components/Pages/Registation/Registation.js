import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
const Registation = () => {
  const { registerEmail, error, isLoading } = useFirebase();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const newData = { ...data, role: "customer" };
    registerEmail(newData.email, newData.password, newData.name, newData.role);
    reset();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2">
          <h1>Reg Form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input required placeholder="name" {...register("name")} />
            <input required placeholder="email" {...register("email")} />
            <input
              required
              type="password"
              placeholder="password"
              {...register("password")}
            />
            {isLoading ? (
              <button className="btn btn-primary" type="button" disabled>
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Register...
              </button>
            ) : (
              <input
                className="btn btn-primary"
                value="Register"
                type="submit"
              />
            )}
          </form>
          {error && <p className="text-danger">{error}</p>}
          <p>
            Already Register <Link to="/login">Login</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registation;
