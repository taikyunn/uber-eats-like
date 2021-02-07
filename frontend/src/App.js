import React from 'react';
import './app.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// Componets

import {Restaurants} from './containers/Restaurants.jsx';
import {Foods} from './containers/Foods.jsx';
import {Orders} from './containers/Orders.jsx';

function App(){
  return (
    <Router>
      <Switch>
        {/* 店舗一覧ページ */}
        <Route
        exact
        path = "/restaurants">
        <Restaurants />
        </Route>

        {/* フード一覧ページ */}
        <Route
        exact
        path = "/foods"
        >

      <Foods />
      </Route>

      <Route
      exact
      path = "/orders">
        <Orders />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;