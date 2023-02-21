import React, { useState } from 'react'
import axios from "axios";
import { addUser } from '../../API/Api';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';
export default function SignUp() {
    const [Loading, setLoading] = useState(true)
    const [error, setError] = useState('')
let navigate = useNavigate()
      const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      });
    let getUserData = ({target})=> {
        setUser({
            ...user,
            [target.name] : target.value
        })
    }
    async function sendData(e) {
       e.preventDefault()
        let res = await addUser(user, 'signup');
        if (res.message === 'success') {
            navigate('/signin')
        } else {
            setLoading(true);
            setError(res.errors)
        }
        let validate = validateSignUp()
        if (validate.error) {
                setLoading(false)
        } else {
            setLoading(true)
            
            }
    }
    console.log(error);
    let validateSignUp = () => {
      const schema = Joi.object({
        first_name: Joi.string().min(4).max(8).required(),
        last_name: Joi.string().min(4).max(8).required(),
        email: Joi.string()
          .email({ tlds: ["com", "net"] })
          .required(),
        password: Joi.string().pattern(new RegExp(/^[A-Z][a-z]{4,10}/)),
      });
      return schema.validate(user, { abortEarly: false });
    };
    return (
      <>
        <h2 className="text-center fw-semibold fs-1">Registeration Form</h2>
        {error ? (
          <div className="alert alert-danger" role="alert">
            {error?.email?.message}
          </div>
        ) : (
          ""
        )}
        <div className="py-3 container">
          <form onSubmit={sendData} className="myForm">
            <label className="fs-3" htmlFor="first_name">
              First name
            </label>
            <input
              onChange={getUserData}
              type="text"
              name="first_name"
              className="form-control my-input my-3"
              id="first_name"
              placeholder="Enter your first name"
            />
            <label className="fs-3" htmlFor="last_name">
              Last name
            </label>

            <input
              onChange={getUserData}
              type="text"
              name="last_name"
              className="form-control my-input my-3"
              id="last_name"
              placeholder="Enter your last name"
            />
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
                  "Register"
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
