import React from 'react';
import './output.css';
import {Home} from './components/Home';
import {Auth} from './components/Auth';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {SignUp} from './components/SignUp';
import {Admin} from './components/Admin';


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
          <Route exact path='/newauth'>
           <SignUp/>
          </Route>
          <Route exact path='/admin'>
           <Admin/>
          </Route>
        </Switch>
      </Router>
    </div>
     
  );
}

export default App;
