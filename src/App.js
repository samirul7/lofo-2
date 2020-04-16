import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInPage from "./pages/sign-in/sign-in.component";
import SignUpPage from "./pages/sign-up/sign-up.component";
// Section Page
import AadhaarPage from "./pages/sections/aadhaar/aadhaar.component";
import VoterPage from "./pages/sections/voter/voter.component";
import PanPage from "./pages/sections/pan/pan.component";
import PassportPage from "./pages/sections/passport/passport.component";
import DrivingPage from "./pages/sections/driving/driving.component";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
    };
  }

  render() {
    const { isLogin } = this.state;
    return (
      <div className="App">
        <Header isLogin={this.state.isLogin} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/sign-in"
            exact
            component={isLogin ? null : SignInPage}
          />
          <Route
            path="/sign-up"
            exact
            component={isLogin ? null : SignUpPage}
          />
          <Route
            path="/aadhaar"
            exact
            component={isLogin ? AadhaarPage : null}
          />
          <Route path="/voter" exact component={isLogin ? VoterPage : null} />
          <Route path="/pan" exact component={isLogin ? PanPage : null} />
          <Route
            path="/passport"
            exact
            component={isLogin ? PassportPage : null}
          />
          <Route
            path="/driving"
            exact
            component={isLogin ? DrivingPage : null}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
