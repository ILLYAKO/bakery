import React, { useState, useContext } from "react";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import { Context } from "../../../..";
import "./style.css";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store } = useContext(Context);
  const history = useHistory();


  const onSubmitHandler = async (e) => {
    e.preventDefault();
   await store.registration(email, password);
       if (store.isAuth) {
         history.push("/");
       }
  };

  return (
    <div className="container form-register">
      <h1 className="h3 mb-3 fw-normal">Please register</h1>
      <h5>Create your account. It's free and only takes a minute.</h5>

      <form>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="name@example.com"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="form-control"
            id="passwordInput"
            placeholder="Password"
          />
        </div>
        {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            I accept the Terms of Use and Privacy Policy
          </label>
        </div> */}
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
