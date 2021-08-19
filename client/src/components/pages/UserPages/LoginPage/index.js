import React from "react";
import "./style.css";

const LoginPage = () => {
  return (
    <div className="container form-signin">
      <form>
        <div className="text-center">
          <img
            className="mb-4"
            src={require("../../../../assets/images/bakery_logo.png").default.toString()}
            alt="bakery"
            width="100"
            height="100"
          />
        </div>

        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
