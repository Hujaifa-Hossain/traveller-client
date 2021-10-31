import React from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useFirebase from "../../allHooks/useFirebase";

const Login = () => {
  const { SignInUsingGoogle, setUser, setIsLoading } = useFirebase();

const history= useHistory()
const location = useLocation()

const url= location.state?.from || "/home"

  // const { SignInUsingGoogle, setUser, setError} = useFirebase();
  // const location = useLocation();
  // const history = useHistory();
  // const redirect_uri = location.state?.from || '/home';


  const handleGoogleLogin = () => {
    SignInUsingGoogle()
    .then((res) => 
        {
          setIsLoading(true)
          setUser(res.user)
          history.push(url)
        }
          )
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  };

  return (
    <div>
      <div className="container overflow-hidden my-3">
        <div className="row gx-4">
          <div className="col-lg-6">
            <div>
              <img
                className="img-fluid"
                src="https://image.freepik.com/free-vector/sign-concept-illustration_114360-5267.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center my-5">
              <button className="btn btn-dark my-4" onClick={handleGoogleLogin}>
                <img
                  src="https://image.flaticon.com/icons/png/512/281/281764.png"
                  width="30px"
                  className="m-1"
                  alt=""
                />
                Sign in with google
              </button>
              <p>
                <small>
                  Don't have account?{" "}
                  <Link to="/register">create an account</Link>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
