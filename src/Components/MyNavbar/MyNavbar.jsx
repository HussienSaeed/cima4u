import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
export default function MyNavbar(props) {
 let navigate= useNavigate()
  let logOut = () => {
    localStorage.removeItem('token');
    navigate('/signin')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <h2>Cima4U</h2>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {!props.auth ? (
                <>
                  {" "}
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/movies">
                      Movies
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/tv">
                      Tv Show
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">
                      Sign up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/signin">
                      Sign in
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
            <div className="social-icons justify-content-center ms-auto">
              <i className="fab m-2 fa-instagram"> </i>
              <i className="fab m-2 fa-facebook-square"></i>
              <i className="fab m-2 fa-whatsapp"></i>
              <i className="fab m-2 fa-twitter"></i>
            </div>
            {!props.auth ? (
              <>
                {" "}
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="signin"
                      onClick={logOut}
                    >
                      Log out
                    </NavLink>
                  </li>
                </ul>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
