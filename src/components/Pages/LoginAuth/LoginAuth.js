import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import style from "./LoginAuth.module.css";
import { useNavigate } from "react-router-dom";
import { singIn } from "../../../Redux/thunk/userThunk";

function LoginAuth() {
  const [input, setInput] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function inputHandler(e) {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function submitHandler(e) {
    e.preventDefault();
    let payload = Object.entries(input).filter((el) =>
      el[1] ? el[1].trim() : el[1]
    );
    if (payload.length) {
      payload = Object.fromEntries(payload);
      dispatch(singIn(payload, navigate));
    }
  }
  useEffect(() => {
    return () => setInput({ username: "", password: "" });
  }, []);
  return (
    <>
      <center>
        <form className={style.myForm} onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputLogin" className="form-label">
              Login
            </label>
            <input
              type="text"
              className="form-control"
              value={input.username}
              name="username"
              id="exampleInputLogin"
              placeholder="Enter login"
              onChange={inputHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={input.password}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter password"
              onChange={inputHandler}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </center>
    </>
  );
}

export default LoginAuth;
