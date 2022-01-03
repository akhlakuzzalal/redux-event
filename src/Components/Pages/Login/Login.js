import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useFirebase from "../../../hooks/useFirebase";
import { useLocation, useNavigate } from "react-router-dom";
import './Login.css';
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
    <section className="login-page">
        <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="login-part">
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input required placeholder="Email" {...register("email")} />
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
                  Login...
                </button>
              ) : (
                <input className="btn btn-primary" value="Login" type="submit" />
              )}
            </form>
            {error && <p className="text-danger">{error}</p>}
            <p className="loginReg">
              Already Login <Link to="/register">Register</Link>{" "}
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
