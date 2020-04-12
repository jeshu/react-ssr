import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default WrappedComponent => {
  const hocComponent = props => {
    switch (props.auth) {
      case false:
        return <Redirect to="/" />;
        break;
      case null:
        return <div>Loading...</div>;
        break;
      default:
        return <WrappedComponent {...props} />;
        break;
    }
  };

  const mapStateToProps = ({ auth }) => ({
    auth
  });
  return connect(mapStateToProps)(hocComponent);
};
