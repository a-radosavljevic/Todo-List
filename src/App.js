import React, { Component } from "react";
import NavBar from "./components/navbar";
import TodoItems from "./components/todoItems";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

class App extends Component {
  state = {
    userName: "Aleksandar96"
  };
  render() {
    return (
      <React.Fragment>
        <NavBar userName={this.state.userName}></NavBar>
        <main className="container">
          <TodoItems></TodoItems>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
