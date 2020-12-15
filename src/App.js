import React  from 'react';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Navbar from './components/screens/NavbarPage';
import HomeScreen from './components/screens/HomeScreen';
import PlotRoute from './components/Routes/PlotRoute';
import FlatRoute from './components/Routes/FlatRoute';
import Rent from './components/Routes/Rent';
import Construction from './components/Routes/Construction'
import './App.css';

 
function App() {
  
  return (
    <div className="container">
      
      <Router>
      <Navbar/>
      <Switch>
     
        <HomeScreen exact path="/" component={HomeScreen} />
       <Route exact path='/plot' component={PlotRoute}/>
       <Route exact path='/flat' component={FlatRoute}/>
       <Route exact path='/rent' component={Rent}/>
       <Route exact path="/const" component={Construction} />

        </Switch> 
    

       
      </Router>
    </div>
  
  );
}

export default App;
