import React, { Component } from "react";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../Actions/authAction'
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";

class Login extends Component{
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state)
    }

    render() {

        // if (auth.uid) {
        //     sessionStorage.setItem("uid",auth.uid)
        //     return <Redirect to='/'/>
        // } else {
        //     sessionStorage.setItem("uid", null)
        // }
        const { authError, auth } = this.props
        console.log(auth);
        if ( auth.uid ) {
            sessionStorage.setItem("uid",auth.uid)
            sessionStorage.setItem("role",auth.photoURL)
            return <Redirect to='/'/>
        } else {
            sessionStorage.setItem("role", null)
        }
        return(
            <React.Fragment>
                <div className="row justify-content-around mt-3" style={{height: "300px", width: "100vw" }}>
                    <form className="col-4" onSubmit={ this.handleSubmit } >
                        <h1>Log In</h1>
                        <div className="text-danger" >
                            { authError ? <p>{authError}</p> : null }
                        </div>
                        <input type="text" className="form-control" id="email" onChange={ this.handleChange } placeholder="Email" />
                        <input type="text" className="form-control mt-3" id="password" onChange={ this.handleChange } placeholder="Password" />
                        <button className="btn btn-outline-primary mt-3" >Log In</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
        users: state.firestore.ordered.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (creds) => dispatch(login(creds))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'users' }
    ])
)(Login);