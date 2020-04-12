import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";
import requireAuth from "../components/hocs/requireAuth";
const AdminsListPage = (props) => {
  useEffect(() => {
    props.fetchAdmins();
  }, []);

  const renderAdmins = () => {
    return props.admins.map((admin) => <li key={admin.id}>{admin.name}</li>);
  };

  return (
    <div className="center-align">
      <h3>Admins List</h3>
      <ul>{renderAdmins()}</ul>
    </div>
  );
};

const mapStateToProps = ({ admins }) => ({
  admins,
});

const mapDispatchToProps = {
  fetchAdmins,
};

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(requireAuth(AdminsListPage)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
};
