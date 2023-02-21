import React, { useState } from "react";
import axios from "axios";
import { addUser } from "../../API/Api";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let getUserData = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  };
  async function sendData(e) {
    setLoading(false);
    e.preventDefault();
    let res = await addUser(user, "signin");
      if (res.message == "success") {
        localStorage.setItem('token' , res.token)
      navigate('/home');
    } else {
      setLoading(true);
      setError(res.message);
    }
    console.log(res);
  }
  console.log(error);
  return (
    <>
      <h2 className="text-center fw-semibold fs-1">Log in Form</h2>
      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : (
        ""
      )}
      <div className="py-3 container">
        <form onSubmit={sendData} className="myForm">
         
         
          <label className="fs-3" htmlFor="email">
            E-mail
          </label>

          <input
            onChange={getUserData}
            type="email"
            name="email"
            className="form-control my-input my-3"
            id="email"
            placeholder="Enter your email"
          />

          <label className="fs-3" htmlFor="password">
            Password
          </label>

          <input
            onChange={getUserData}
            type="password"
            name="password"
            className="form-control my-input my-3"
            id="password"
            placeholder="Enter your password"
          />
          <div className="text-right">
            <button type="submit" className="btn btn-info float-end">
              {Loading ? (
                "Log In"
              ) : (
                <i className="fas fa-spinner fa-spin"></i>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
