import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.action";



class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayName:"",
            email:"",
            password:"",
            confirmpassword:""
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const {email,displayName,password, confirmpassword} = this.state;
        const { signUpStart } = this.props;
        if(password !== confirmpassword){
            alert("password's don't match");
            return;
        }
        signUpStart({displayName,email,password})
    };

    handleChange = (event) =>{
        const {name, value} = event.target
        this.setState({[name]:value})
    };   

    render(){
        return (
            <div className='sign-up'>
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text"
                        name="displayName"
                        label="Display Name"
                        value={this.state.displayName}
                        onChange={this.handleChange}
                        required/>
                    <FormInput 
                        type="email"
                        name="email"
                        label="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required/>
                    <FormInput 
                        type="password"
                        name="password"
                        label="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required/>
                    <FormInput 
                        type="password"
                        name="confirmpassword"
                        label="Confirm Password"
                        value={this.state.confirmpassword}
                        onChange={this.handleChange}
                        required/>
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>({
    signUpStart: (creds) => dispatch(signUpStart(creds))
})

export default connect(null,mapDispatchToProps)(SignUp);
