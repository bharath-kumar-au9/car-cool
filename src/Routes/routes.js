import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import BookingDetails from '../Containers/bookingDetails';
import CreateBooking from "../Components/Bookings/createBooking";
import Header from '../Components/Layout/header';
import Bookings from "../Containers/bookings";
import Login from '../Components/Auth/login';
import SignUp from '../Components/Auth/signUp';
import Profile from '../Components/Auth/profile';
import signUpDriver from '../Components/Auth/signUpDriver';
import Dashboard from '../Components/Dashboard/dashboard';
import Footer from '../Components/Footer/Footer';


const Routes = () => {
    return (
        <BrowserRouter>
        <Header />
            <Route exact path='/' component={CreateBooking} />
            <Route path='/bookings' component={Bookings} />
            <Route path='/booking/:id' component={BookingDetails} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='/driver/signup' component={signUpDriver} />
            <Route path='/profile' component={Profile} />
            <Route path='/users' component={Dashboard} />
        <Footer />
        </BrowserRouter>
    )
}

export default Routes;