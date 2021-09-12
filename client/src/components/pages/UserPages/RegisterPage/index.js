import React, { useState, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../..";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store } = useContext(Context);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    store.registration(email, password);
  };

  return (
    <div className="container form-register">
      <h2>Register</h2>
      <h4>Create your account. It's free and only takes a minute</h4>

      <form>
        <div className=" form-floating mb-3">
          <label htmlFor="floatingInput" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="floatingPassword" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            I accept the Terms of Use and Privacy Policy
          </label>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onSubmitHandler}
        >
          Register Now
        </button>
      </form>
    </div>
  );
};

export default observer(RegisterPage);
