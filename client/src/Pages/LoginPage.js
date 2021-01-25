import React, { useContext } from "react";
import { useState } from "react";

import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setform({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <div className="container">
      <form className="m-3">
        <h5>Login</h5>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <input
            placeholder="Enter your email"
            id="email"
            type="text"
            name="email"
            className="col form-control"
            value={form.email}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group row">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <input
            placeholder="Enter password"
            id="password"
            type="password"
            name="password"
            className="col form-control"
            value={form.password}
            onChange={changeHandler}
          />
        </div>
        <div className="card-action">
          <button
            className="col btn btn-success"
            onClick={loginHandler}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
