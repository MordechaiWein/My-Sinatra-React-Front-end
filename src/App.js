import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Stores from './Stores';
import Item from './Item';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {

  const [stores, setStores] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/stores")
    .then(response => response.json())
    .then(data => setStores(data))
  },[])

  function addStore(newStore) {
    setStores([...stores, newStore])
  }
  
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/stores" >
          <Stores stores={stores} addStore={addStore} />
        </Route>
        <Route path="/stores/:id">
          <Item stores={stores} />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
