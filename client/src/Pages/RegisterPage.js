import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";

export const RegisterPage = () => {
  // eslint-disable-next-line
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log("Eror", error);
    message(error);
    clearError();
  }, [error, message, clearError]);

  // useEffect(() => {
  //   window.M.updateTextFields();
  // }, []);

  const changeHandler = (event) => {
    setform({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const registerHandler = async (event) => {
    event.preventDefault();
    try {
      console.log("registerHandler");
      const data = await request("/api/auth/register", "POST", { ...form });
      message(data.message);
    } catch (e) {}
  };

  return (
    <div className="container">
      <form className="m-3">
        <h5>Sign up</h5>
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
            onClick={registerHandler}
            disabled={loading}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
