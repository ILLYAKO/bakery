import React, { useState, useContext } from "react";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router";
import { Context } from "../../../..";
import "./style.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store } = useContext(Context);
  const history = useHistory();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await store.login(email, password);
    if (store.isAuth) {
      history.push("/");
    }
  };

  return (
    <div className="container form-signin">
      <form noValidate validated="true">
        <div className="text-center">
          <img
            className="mb-4"
            src={require("../../../../assets/images/bakery_logo.png").default.toString()}
            alt="bakery"
            width="100"
            height="100"
          />
        </div>

        <h1 className="h3 mb-3 fw-normal">Please login</h1>
        <label htmlFor="floatingInput">Email address</label>
        <input
          required="true"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          aria-describedby="emailHelp"
        />

        <label htmlFor="loginPassword">Password</label>
        <input
          required="true"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="form-control"
          id="loginPassword"
          placeholder="Password"
        />

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
