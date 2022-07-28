import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../App.css";
import { removeAlert } from "../../actions/alert";
import { FaTimes } from "react-icons/fa";

const Alert = ({ alerts, removeAlert }) => {
  const Delete = (id) => {
    removeAlert(id);
  };
  return (
    <div className="alert-wrapper">
      {alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => (
          <div
            key={alert.id}
            className={`alert  alert-${alert.alertType}`}
            style={{ border: "0px solid black" }}
          >
            {alert.msg}
            <FaTimes
              style={{
                color: "red",
                cursor: "pointer",
                verticalAlign: "middle",
                marginLeft: "5px",
                paddingBottom: "2px",
              }}
              onClick={() => Delete(alert.id)}
            />
          </div>
        ))}
    </div>
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
  removeAlert: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps, { removeAlert })(Alert);
