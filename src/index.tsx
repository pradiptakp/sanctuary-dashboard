import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";
import "./assets/styles/index.css";
import "./assets/styles/nprogress.css";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, Slide } from "react-toastify";

import { Layout } from "./containers/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
// pages

const contextClass = {
  success: "bg-blue-600",
  error: "bg-red-600",
  info: "bg-gray-600",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};

export const App = () => {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/vlab-admin" exact component={Login} />

          <Layout>
            <Switch>
              <Route path="/vlab-admin/home" exact component={Home} />
              <Redirect to="/vlab-admin/home" />
            </Switch>
          </Layout>
          <Redirect to="/vlab-admin" />
        </Switch>
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
