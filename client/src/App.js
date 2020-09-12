import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {CartList, Shipping} from './modules/index';
import './styles/app.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="basket">
            <Switch>
              <Route path='/' exact>
                <Redirect to='/cart'/>
              </Route>
              <Route path='/cart' exact>
                <CartList />
              </Route>
              <Route path='/shipping' exact>
                <Shipping/>
              </Route>
              <Route path='*'>
                <Redirect to='/cart'/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
