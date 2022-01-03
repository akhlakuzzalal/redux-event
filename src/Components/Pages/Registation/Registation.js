import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import { useLocation, useNavigate } from "react-router-dom";
const Registation = () => {
  const { registerEmail, error, isLoading } = useFirebase();
    const { register, handleSubmit, reset } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
  const onSubmit = (data) => {
    const newData = { ...data, role: "customer" };
    registerEmail(newData.email, newData.password, newData.name, newData.role, location,navigate);
    reset();
  };
  return (
    <section className="login-page">
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
        <div className="login-part">
          <h1>Reg Form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input required placeholder="Enter Your Name" {...register("name")} />
            <input required placeholder="Enter Your Email" {...register("email")} />
            <input
              required
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {isLoading ? (
              <button className="btn btn-primary" type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm"
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
          <p className="loginReg">
            Already Register <Link to="/login">Login</Link>{" "}
          </p>
        </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Registation;
