import React from "react"
import "./sign-up.styles.scss"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import {auth,createUserProfileDocument} from "../../firebase/firebase.utils"


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

        const {displayName, email, password, confirmpassword} = this.state;
        if(password !== confirmpassword){
            alert("password's don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(
                email, 
                password);
            
            await createUserProfileDocument(user,{displayName});

            this.setState({
                displayName:"",
                email:"",
                password:"",
                confirmpassword:""
            });
        
        } 
        catch (error){
            console.error(error)
        }
        
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

export default SignUp;
