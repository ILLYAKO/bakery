import React, { useState, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../..";
import "./style.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store } = useContext(Context);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    store.login(email, password);
  };

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
          <label htmlFor="floatingInput">Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-floating">
          <label htmlFor="loginPassword">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="form-control"
            id="loginPassword"
            placeholder="Password"
          />
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button
          className="w-100 btn btn-lg btn-primary"
          type="button"
          onClick={onSubmitHandler}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default observer(LoginPage);
