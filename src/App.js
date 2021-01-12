import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Home from './Components/Pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {FooterContainer} from './Container/footer'
import Services from './Components/Pages/Services';
import Ride from './Components/Pages/Ride';
import ContactUs from './Components/Pages/ContactUs';
import SignUp from './Components/Pages/SignUp';
import Drive from './Components/Pages/Drive';
import Earn from './Components/Pages/Earn';


function App() {
  return (
    <Router>
      <Navbar />
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/Ride' component={Ride} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/Drive' component={Drive} />
        <Route path='/Earn' component={Earn} />
      </Switch>
      <FooterContainer />
    </Router>
  );
}

export default App;