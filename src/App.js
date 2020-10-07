import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Components/Home/Home';
import './App.css';
import NotFound from './Components/NotFound/NotFound';
import CountryDetails from './Components/CountryDetails/CountryDetails';


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="country/:name">
            <CountryDetails></CountryDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
