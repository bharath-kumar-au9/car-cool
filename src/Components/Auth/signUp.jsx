import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup } from '../../Actions/authAction'

class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: 'User'
    }

    handleChange = (e) => {
        this.setState(prevState => ({
                ...prevState,
                [e.target.id]: e.target.value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signup(this.state)
    }

    render(){
        const { auth, authError } = this.props
        if (auth.uid) return <Redirect to='/' />
        return (
            <React.Fragment>
                <div class='bold-line'></div>
                    <div class='container'>
                        <div class='window'>
                            <div class='overlay'></div>
                                <div class='content'>
                                    <div class='welcome'>Hello There!</div>
                                        <div class='subtitle'>We're almost done. Before using our services you need to create an account.</div>
                                            <div class='input-fields'></div>
                                                <form onSubmit={this.handleSubmit} >
                                                    <h1>Sign Up</h1>
                                                    <div className="text-danger" >
                                                        { authError ? <p>{authError}</p> : null }
                                                    </div>
                                                    <input type="text" onChange={this.handleChange} className="input-line full-width" id="firstName" placeholder="First Name" />
                                                    <input type="text" onChange={this.handleChange} className="input-line full-width" id="lastName" placeholder="Last Name" />
                                                    <input type="email" onChange={this.handleChange} className="input-line full-width" id="email" placeholder="Email" />
                                                    <input type="password" onChange={this.handleChange} className="input-line full-width" id="password" placeholder="Password" />
                                                    <button className="ghost-round full-width" >Sign Up</button>
                                                </form>
                                                </div>
                                            </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signup: (newUser) => dispatch(signup(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);