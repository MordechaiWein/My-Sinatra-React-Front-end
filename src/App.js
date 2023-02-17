import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Stores from './Stores';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {

  const [stores, setStores] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/stores")
    .then(response => response.json())
    .then(data => console.log(data))
  },[])


  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/stores" >
          <Stores />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
