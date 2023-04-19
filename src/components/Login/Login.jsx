import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import "./Login.css";
const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  return (
    <div className="form-div">
      <div className="form-scale">
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleSignIn}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button className="submit-button">Login</button>
          <p className="error">
            <small>{error}</small>
          </p>
        </form>
        <p>
          New to Ema-john? <Link to="/signup">Create New Account</Link>{" "}
        </p>
        <div className="or">
          <hr />
          or
          <hr />
        </div>
        <button className="google-button"> Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;
