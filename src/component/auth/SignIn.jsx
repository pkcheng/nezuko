import React, { useEffect, useState } from "react";
import { signInWithGoogle, signin, auth } from "../../firebase";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const history = useHistory();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await signin(email, password);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }
  };

  const handleGoogleSignIn = async (e) => {
    await signInWithGoogle();
    history.push("/");
  };

  useEffect(() => {
    if (auth.currentUser) {
      history.push("/");
    }
  });

  return (
    <div className="container-fluid">
      <div className="row w-100">
        <div className="mx-auto signin-card">
          <h2 className="text-center py-2" style={{ fontFamily: "Montserrat" }}>
            Sign In
          </h2>
          {error && (
            <div class="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <form onSubmit={handleSignIn}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 my-3">
              Sign In
            </button>
          </form>
          <p className="text-center my-auto">or</p>
          <button
            className="btn btn-light w-100 my-3"
            onClick={handleGoogleSignIn}
          >
            <i className="fa fa-google" aria-hidden="true"></i> &nbsp; &nbsp;
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
