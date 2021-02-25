import React, { Component } from "react";
import "./App.css";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Login from "./pages/auth/login/Login";
import Record from "./pages/records/record/Record";
import Records from "./pages/records/Records";

import Header from "./components/header/Header";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    let isLoggedIn = localStorage.getItem("auth");
    var routes;
    var template;

    routes = (
      <Switch>
        {/* { isLoggedIn && <Route path="/records" component={Record} /> }
        { isLoggedIn && <Route path="/record" component={Record} /> }
        { !isLoggedIn && <Route path="/login" component={Login} /> }
        { isLoggedIn ? <Redirect from="/login" to="/record" /> : <Redirect from="/record" to="/login" /> }
        { isLoggedIn ? <Route path="/" extact component={Record} /> : <Route path="/" extact component={Login} /> } */}
      </Switch>
    );

    if (isLoggedIn) {
      routes = (
        <Switch>
          <Route path="/records/record" component={Record} />
          <Route path="/records" component={Records} />
          <Route path="/" extact component={Records} />
          <Redirect from="/login" to="/record" />
        </Switch>
      );

      template = (
        <div className="App">
          <Header {...this.props} />
          <main>{routes}</main>
          <Footer />
        </div>
      );
    } else {
      routes = (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" extact component={Login} />
          <Redirect from="/record" to="/login" />
        </Switch>
      );
      template = <div className="App">{routes}</div>;
    }

    return <React.Fragment>{template}</React.Fragment>;
  }
}

export default withRouter(App);
