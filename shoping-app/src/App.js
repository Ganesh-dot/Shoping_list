import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Service from './components/pages/Services/Service';
import Product from './components/pages/Products/Product';
import SignUp from './components/pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Service' component={Service} />
        <Route path='/Product' component={Product} />
        <Route path='/Sign-up' component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;