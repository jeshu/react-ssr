import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ auth }) => {
  const authButton = !auth ? (
    <a href="/api/auth/google">Login</a>
  ) : (
    <a href="api/logout">Logout</a>
  );
  return (
    <nav>
      <div className="nav-warraper">
        <Link to="/" className="brand-logo">
          SSR React
        </Link>
        <ul className="right">
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/admins">Admins</Link>
          </li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  );
};
const mapStateToProps = ({ auth }) => ({
  auth
});
export default connect(mapStateToProps)(Header);
