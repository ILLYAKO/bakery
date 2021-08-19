import React from "react";

const RegisterPage = () => {
  return (
    <div className="container form-register">
      <h2>Register</h2>
      <h4>Create your account. It's free and only takes a minute</h4>

      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            I accept the Terms of Use and Privacy Policy
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Register Now
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
