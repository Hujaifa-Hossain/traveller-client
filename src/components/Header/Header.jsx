import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../allHooks/useFirebase";

const Header = () => {
  const { logOut, user } = useFirebase();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h3>Traveller</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              {user?.email ? (
                (<li className="nav-item">
                  <Link className="nav-link active" to="/AddDestination">
                    Add Service
                  </Link>
                </li>)
              ) : (
                <li></li>
              )}
              {user?.email ? (
                <li className="nav-item">
                  <Link className="nav-link active" to="/manage">
                    Manage
                  </Link>
                </li>
              ) : (
                <li></li>
              )}
              {user?.email ? (
                (
                  <li className="nav-item">
                    <Link className="nav-link active" to="/cart">
                      Cart
                    </Link>
                  </li>
                )
              ) : (
                <li></li>
              )}
              {user?.displayName ? (
                <li className="nav-item p-2">{user?.displayName}</li>
              ) : (
                <li className="nav-item"></li>
              )}
              {!user?.email ? (
                <li className="nav-item">
                  <Link
                    className="nav-link bg-dark rounded px-3 text-white"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <button onClick={logOut} className="btn btn-dark text-white">
                    log out
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
