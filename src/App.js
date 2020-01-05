import React from 'react';
import './output.css';
import {Home} from './components/Home';
import {Auth} from './components/Auth';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/auth'>
           <Auth/>
          </Route>
        </Switch>
      </Router>
    </div>
     
  );
}

export default App;
