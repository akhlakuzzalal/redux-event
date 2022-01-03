import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useFirebase from "../../../hooks/useFirebase";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { logIn, error, isLoading } = useFirebase();
  const onSubmit = (data) => {
    // console.log(data)
    logIn(data.email, data.password, location, navigate);
    reset();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2">
          <h1>LogIn</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                Login...
              </button>
            ) : (
              <input className="btn btn-primary" value="Login" type="submit" />
            )}
          </form>
          {error && <p className="text-danger">{error}</p>}
          <p>
            Already Login <Link to="/register">Register</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
