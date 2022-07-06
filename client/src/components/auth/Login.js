import React from "react";
import { useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import {FaGoogle} from 'react-icons/fa';
const Login = ({ setAlert, login }) => {
  const googleAuth = () => {
    login();
  };

  return (
    <div className="container">
      <button onClick={googleAuth} className="button"> <div className="logo"  ></div><div className="text" >Sign in with Google</div></button>
      
    </div>
  );
};
login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(Login);
