import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import { Provider as ReduxProvider, useSelector } from "react-redux";
import { RootState, store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { useCookies } from "react-cookie";
import axios from "axios";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";
import "./assets/styles/index.css";
import "./assets/styles/nprogress.css";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, Slide } from "react-toastify";

import { Layout } from "./containers/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import IndexDevice from "./pages/Devices";
import IndexUser from "./pages/Users";
import CreateRoom from "./pages/Devices/CreateRoom";
import CreateDevice from "./pages/Devices/CreateDevice";
import CreateUser from "./pages/Users/CreateUser";
import { ws } from "./websocket";
// pages

const contextClass = {
  success: "bg-blue-600",
  error: "bg-red-600",
  info: "bg-gray-600",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};

const Navigations = () => {
  const [cookies] = useCookies(["token", "keyrock_token"]);

  const { user } = useSelector((state: RootState) => state.auth);
  if (cookies.token && cookies.keyrock_token) {
    axios.defaults.headers.common["X-Auth-Token"] = `${cookies.token}`;
    axios.defaults.headers.common[
      "X-Keyrock-Token"
    ] = `${cookies.keyrock_token}`;
  }
  return (
    <Switch>
      {cookies.token && cookies.keyrock_token ? (
        <>
          <Layout>
            <Switch>
              <Route path="/dashboard" exact component={Home} />
              <Route path="/devices" exact component={IndexDevice} />
              <Route path="/devices/create-room" exact component={CreateRoom} />
              <Route
                path="/devices/edit-room/:id"
                exact
                component={CreateRoom}
              />
              <Route
                path="/devices/create-device/:roomId"
                exact
                component={CreateDevice}
              />
              {user && user.userData.admin ? (
                <>
                  <Route path="/users" exact component={IndexUser} />
                  <Route
                    path="/users/create-user"
                    exact
                    component={CreateUser}
                  />
                  <Route
                    path="/users/edit-user/:id"
                    exact
                    component={CreateUser}
                  />
                </>
              ) : null}
              <Redirect to="/dashboard" />
            </Switch>
          </Layout>
        </>
      ) : (
        <>
          <Route path="/login" exact component={Login} />

          <Redirect to="/login" />
        </>
      )}
    </Switch>
  );
};

export const App = () => {
  React.useEffect(() => {
    ws.on("connect", function () {
      console.log("check 2", ws.connected);
    });
  }, []);

  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Navigations />
        <ToastContainer
          transition={Slide}
          autoClose={2000}
          position="bottom-right"
          hideProgressBar
          toastClassName={(prop) =>
            contextClass[prop?.type || "default"] +
            " relative flex p-4 my-4 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
          }
        />
      </BrowserRouter>
    </ReduxProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
