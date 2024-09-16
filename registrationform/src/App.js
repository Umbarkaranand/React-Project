import React, { Component } from "react";
import "./App.css";
import Register from "./Components/Register"; // Corrected import statement
import Wish from "./Components/Wish"; // This should match the actual component name

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: false,
      name: null,
      email: null,
      password: null,
      showPass: false,
    };
  }

  passwordHandler = (event) => {
    this.setState({ showPass: !this.state.showPass });
  };
  registrationHandler = (event) => {
    const name = event.target.name.value; // Corrected field name
    const email = event.target.email.value; // Corrected field name
    const password = event.target.password.value; // Corrected field name
    this.setState({ name, email, password, isRegistered: true });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        {this.state.isRegistered ? (
          <Wish name={this.state.name} email={this.state.email}></Wish>
        ) : (
          <Register
            submit={this.registrationHandler}
            showPass={this.state.showPass}
            click={this.passwordHandler}
          ></Register>
        )}
      </div>
    );
  }
}

export default App;
