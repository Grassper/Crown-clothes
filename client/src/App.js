import React,{ useEffect,lazy, Suspense } from 'react';
import { connect } from "react-redux";
import { Route,Switch,Redirect } from "react-router-dom";

import Header from "./components/header/Header.component.jsx";

import { checkUserSession } from "./redux/user/user.action";

import { GlobalStyle } from "./global.styles";

import Spinner from "./components/spinner/spinner.component";

const Homepage = lazy(() => import('./pages/Homepage/homepage.jsx'));
const Shop = lazy(() => import('./pages/Shop/shop.component.jsx'));
const SignInAndSignUP = lazy(() => import('./pages/Sign-inandSign-up/Sign-in-and-Sign-up.component.jsx'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component.jsx'));

const App = ({ checkUserSession,currentUser }) => {

  useEffect(() => {
    checkUserSession();
  },[checkUserSession]);

    return (
      <div>
      <GlobalStyle/>
      <Header/>
      <Switch>
        <Suspense fallback={<Spinner/>}>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route 
            exact 
            path="/signin" 
            render= {() => 
              currentUser ? (<Redirect to="/" />) : (<SignInAndSignUP/>)
            }/>
          <Route exact path="/checkout" component={CheckoutPage}/>
        </Suspense>
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
