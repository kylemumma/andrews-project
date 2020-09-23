import React from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.js";
import LoginPage from "./components/LoginPage.js";
import MainPage from "./components/MainPage.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <ProtectedRoute exact path="/" component={MainPage} />
      <Route exact path="/login">
        <LoginPage />
      </Route>
    </div>
  );
}

export default App;
