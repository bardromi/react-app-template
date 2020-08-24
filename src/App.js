import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";


import store from './store';
import Login from './components/auth/Login';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';

const history = createBrowserHistory();


const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route exact path='/' component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Router>
    </Provider>
  );
}

export default App;
