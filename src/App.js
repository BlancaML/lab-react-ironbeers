import React from 'react';
import './App.css';
import Home from './components/Home';
import { Route, Switch} from 'react-router-dom';
import ListofBeers from './components/ListofBeers';




function App() {
  return (
    <div className="App">
      
      <Switch>
      <Route exact path='/beers'component={ListofBeers}/>
      <Route exact path='/'component={Home}/>
      </Switch>
    </div>
  );
}

export default App;



