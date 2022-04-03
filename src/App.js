import React, { Component } from 'react';
import './App.css';
import { HomePage } from './containers/Homepage';
import { Route, Switch } from 'react-router-dom'
import { ProductsListPage } from './containers/ProductsListPage';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/:slug' exact component={ProductsListPage} />
      </Switch>
    </div>
  );
}
export default App;

