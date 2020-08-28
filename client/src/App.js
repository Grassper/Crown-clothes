import React,{useEffect} from 'react';
import { connect } from "react-redux";
import { Route,Switch,Redirect } from "react-router-dom";

import Homepage from "./pages/Homepage/homepage.jsx";
import Shop from "./pages/Shop/shop.component.jsx";
import Header from "./components/header/Header.component.jsx";
import SignInAndSignUP from "./pages/Sign-inandSign-up/Sign-in-and-Sign-up.component.jsx";
import CheckoutPage from "./pages/checkout/checkout.component.jsx"

import { checkUserSession } from "./redux/user/user.action";

import './App.css';

const App = ({ checkUserSession,currentUser }) => {

  useEffect(() => {
    checkUserSession();
  },[checkUserSession]);

    return (
      <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route 
          exact 
          path="/signin" 
          render= {() => 
            currentUser ? (<Redirect to="/" />) : (<SignInAndSignUP/>)
          }/>
        <Route exact path="/checkout" component={CheckoutPage}/>
      </Switch>
      </div>
    );
}

const mapStateToProps = ({user}) => {
  return {
    currentUser:user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserSession: () => dispatch(checkUserSession())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
