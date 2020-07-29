import React from 'react';
import { auth,createUserProfileDocument} from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { Route,Switch,Redirect } from "react-router-dom";

import Homepage from "./pages/Homepage/homepage.jsx";
import Shop from "./pages/Shop/shop.component.jsx";
import Header from "./components/header/Header.component.jsx";
import SignInAndSignUP from "./pages/Sign-inandSign-up/Sign-in-and-Sign-up.component.jsx";
import CheckoutPage from "./pages/checkout/checkout.component.jsx"

import setCurrentUser from "./redux/user/user.action";

import './App.css';
class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    
    if(userAuth)
      {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
          })
        })
      }else{
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }

  render(){
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
            this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUP/>)
          }/>
        <Route exact path="/checkout" component={CheckoutPage}/>
      </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => {
  return {
    currentUser:user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
