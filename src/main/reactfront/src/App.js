import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import BoardPage from "./pages/BoardPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Route path="/main" exact={true} component={MainPage}/>
            <Route path="/login" exact={true} component={LoginPage}/>
            <Route path="/signup" exact={true} component={SignupPage}/>
            <Route path="/board" exact={true} component={BoardPage}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
