import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/navbar/navbar.component";
import TodoItems from "./pages/todo-items/todo-items.component";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    userName: "Aleksandar96",
  };
  render() {
    return (
      <React.Fragment>
        <ToastContainer hideProgressBar newestOnTop></ToastContainer>
        <NavBar userName={this.state.userName}></NavBar>
        <main className="container">
          <TodoItems></TodoItems>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
