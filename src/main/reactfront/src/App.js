import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Route path="/login" exact={true} component={LoginPage}/>
            <Route path="/signup" exact={true} component={SignupPage}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
