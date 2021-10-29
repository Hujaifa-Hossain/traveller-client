import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../allHooks/useFirebase";

const Registration = () => {
  const { SignInUsingGoogle } =
    useFirebase();
  return (
    <div>
      <div className="container overflow-hidden my-3">
        <div className="row gx-4">
          <div className="col-lg-6">
            <div>
              <img
                className="img-fluid"
                src="https://image.freepik.com/free-vector/registration-form-template-with-flat-design_23-2147971971.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center my-5">
              <button className="btn btn-dark my-4" onClick={SignInUsingGoogle}>
                <img
                  src="https://image.flaticon.com/icons/png/512/281/281764.png"
                  width="30px"
                  className="m-1"
                  alt=""
                />
                Sign up with google
              </button>
              <p>
                <small>Already have an account?{" "}
                  <Link to="/login">Log in</Link>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
