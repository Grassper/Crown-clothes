import React from "react"
import "./Sign-in.styles.scss"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"


class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        this.setState({name:"",password:""})
    }

    handleChange = (event) =>{
        const {name, value} = event.target;
        this.setState({[name]:value})
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email" 
                        name="email" 
                        value={this.state.email}
                        onChange={this.handleChange} 
                        label ="Email"
                        required/>
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password}  
                        onChange={this.handleChange}
                        label = "Password"
                        required/>
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn