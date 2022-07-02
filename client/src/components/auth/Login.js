import React from "react";
import { useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ setAlert, login }) => {
  const googleAuth = () => {
    login();
  };

  return (
    <div>
      <button onClick={googleAuth}>Sign in using google</button>
    </div>
  );
};
login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(Login);
