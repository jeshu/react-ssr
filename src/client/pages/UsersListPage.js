import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/index";
import Helmet from "react-helmet";

const UsersListPage =(props) => {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  const renderUser = ()=> {
    return props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }
    return (
    <div>
      <Helmet>
        <title>Users Page</title>
        <meta property="og:title" content="Users Page" />
      </Helmet>
      <h4>User list</h4>
      <ul>{renderUser()}</ul>
    </div>
  );
}

const mapStateToProps = state => ({
  users: state.users
});

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersListPage),
  loadData: store => {
    return store.dispatch(fetchUsers());
  }
};
