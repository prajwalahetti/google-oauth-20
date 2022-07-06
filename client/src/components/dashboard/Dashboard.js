import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Dashboard = ({ auth: { user } }) => {
  return (
    <div className="container">
     Welcome
      <h1>{user.displayName}</h1>
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(Dashboard);
