import React from 'react';
import './App.css';
import Homepage from "./pages/Homepage/homepage.jsx"
import {Route,Switch} from "react-router-dom"
import Shop from "./pages/Shop/shop.component.jsx"
import Header from "./components/header/Header.component.jsx"
import SignInAndSignUP from "./pages/Sign-inandSign-up/Sign-in-and-Sign-up.component.jsx"


function App() {
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={Shop} />
      <Route path="/signin" component={SignInAndSignUP} />
    </Switch>
    </div>
  );
}

export default App;
