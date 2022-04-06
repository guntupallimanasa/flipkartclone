import React, { Component, useEffect } from 'react';
import './App.css';
import { HomePage } from './containers/Homepage';
import { Route, Switch } from 'react-router-dom'
import { ProductsListPage } from './containers/ProductsListPage';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLogin, updateCart } from './actions';
import { ProductDetailsPage } from './containers/productDetailsPage';
import { CartPage } from './containers/CartPage';
//visual studio  theme:::cobalt next
function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.authReducer)

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLogin())
    }

  }, [auth.authenticate])


  useEffect(() => {
      dispatch(updateCart())
  }, [auth.authenticate])

  return (
    <div>
      <Switch>
      <Route path='/' exact component={HomePage} />
        <Route path='/cart' component={CartPage} />
        <Route path='/:productSlug/:ProductId/p' component={ProductDetailsPage} />
        <Route path='/:slug' component={ProductsListPage} />
      </Switch>
    </div>
  );
}
export default App;

