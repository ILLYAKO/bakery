import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useHttp } from "../hooks/http.hook";
// import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";
//  "../context/AuthContext";

export const LoginPage = () => {
  const auth = useContext(AuthContext);
  // // const message = useMessage();
  const { loading, request, error, clearError } = useHttp();
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  // useEffect(() => {
  //   console.log("Eror", error);
  //   message(error);
  //   clearError();
  // }, [error, message, clearError]);

  // useEffect(() => {
  //   window.M.updateTextFields();
  // }, []);

  const changeHandler = (event) => {
    setform({ ...form, [event.target.name]: event.target.value });
  };
  // const registerHandler = async () => {
  //   try {
  //     const data = await request("/api/auth/register", "POST", { ...form });
  //     message(data.message);
  //     console.log("Data", data);
  //   } catch (e) {}
  // };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      // message(data.message);
      auth.login(data.token, data.userId);
      console.log("Data", data);
    } catch (e) {}
  };

  return (
    <>
      <div className="container">
        <div className="row center-align">
          <div className="col s12 m8 ">
            <h1>Login</h1>
            <div className="card blue darken-1">
              <div className="card-content white-text">
                <span className="card-title">Authorization</span>
                <div className="input-field">
                  <input
                    placeholder="Enter your email"
                    id="email"
                    type="text"
                    name="email"
                    className="yellow-input"
                    value={form.email}
                    onChange={changeHandler}
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                  <input
                    placeholder="Enter password"
                    id="password"
                    type="password"
                    name="password"
                    className="yellow-input"
                    value={form.password}
                    onChange={changeHandler}
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="card-action">
                <button
                  className="btn yellow darken-4"
                  style={{ marginRight: 10 }}
                  onClick={loginHandler}
                  // disabled={loading}
                >
                  Login
                </button>
                {/* <button
              className="btn grey lighten-1 black-text"
              onClick={registerHandler}
              disabled={loading}
            >
              Register
            </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
