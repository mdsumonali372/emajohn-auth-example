import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import { AuthContext } from "../providers/AuthProviders";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error.message));
  };

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        {user && (
          <span className="text-white">
            {user.email}{" "}
            <button onClick={handleLogOut} className="log-out">
              Log Out
            </button>{" "}
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
