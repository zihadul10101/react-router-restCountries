import './App.css';
import Home from './components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotMatch from './components/NotMatch/NotMatch';
import CountryDetiles from './components/CountryDetiles/CountryDetiles';

function App() {
  return (
   

      <Router>
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/home"> <Home /></Route>
          <Route path="/:name"><CountryDetiles /></Route>

          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>


    
  );
}

export default App;
