import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from "redux";

const Dashboard = (props) => {
    const { users } = props
    if (sessionStorage.getItem('role') !== 'Admin') {
            return <Redirect to='/' />
        }
    return (
        <div className="ml-5">
            <div className="row justify-content-center mt-3" >
                <h5 className="col-3">First Name:</h5>
                <h5 className='ml-3 col-3'>Last Name:</h5>
                <h5  className='ml-3 col-3'>Role:</h5>
                <h5  className='ml-3 col-2'>Initials:</h5>
            </div>
            {users && users.map(user => {
                return (
                    <Link to={'/user/' + user.id } key={user.id} >
                        <div className="row justify-content-around mt-3">
                            <h5 className='col-3'>{user.firstName}</h5>
                            <h5 className='ml-3 col-3'>{user.lastName}</h5>
                            <h5  className='ml-3 col-3'>{user.role}</h5>
                            <h5  className='ml-3 col-2'>{user.initials}</h5>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        users: state.firestore.ordered.users
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users' }
    ])
)(Dashboard);