import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import "./SignUp.css";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(email, password, confirmPassword);
    setError("");
    if (password !== confirmPassword) {
      setError("Your password did not match");
      return;
    } else if (password.length < 6) {
      setError("Passowrd at least 6 character or longer");
      return;
    }
    createUser(email, password)
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
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="form-control">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirm-password"
            />
          </div>
          <button className="submit-button">Sign Up</button>
          <p className="error">
            <small>{error}</small>
          </p>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>{" "}
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

export default SignUp;
