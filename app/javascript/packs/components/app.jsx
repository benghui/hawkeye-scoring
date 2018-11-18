import React from "react";

import Login from "./login";
import Signup from "./signup";
import Edit from "./edit";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "login",
      currentUser: null
    };
    this.changePage = this.changePage.bind(this);
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  changePage(newPage) {
    this.setState({
      page: newPage
    });
  }

  updateCurrentUser(email) {
    this.setState({
      currentUser: email
    });
  }

  render() {
    switch (this.state.page) {
      case "login":
        return (
          <Login
            changePage={this.changePage}
            updateCurrentUser={this.updateCurrentUser}
          />
        );
      case "signup":
        return (
          <Signup
            changePage={this.changePage}
            updateCurrentUser={this.updateCurrentUser}
          />
        );
      case "edit":
        return (
          <Edit
            changePage={this.changePage}
            currentUser={this.state.currentUser}
          />
        );
    }
  }
}
