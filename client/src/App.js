import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Dashboard from "./components/dashboard/Dashboard";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Alert from "./components/layout/Alert";
import { useEffect } from "react";
import { loadUser } from "./actions/auth";
import PrivateRoute from "./components/routing/PrivateRoute";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
const App = () => {
  useEffect(() => {
    const fetchUser = () => {
      store.dispatch(loadUser());
    };
    fetchUser();
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Alert />
        <NavBar />
        <div className="maincontainer">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route
              path="/dashboard"
              element={<PrivateRoute component={Dashboard} />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
