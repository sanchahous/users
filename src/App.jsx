import React from 'react';
import {Route, Redirect, Switch, withRouter} from 'react-router-dom';

import {UsersList} from "./components/Users/UsersList/UsersList";
import {CreateUser} from "./components/Users/CreateUser/CreateUser";
import {UpdateUser} from "./components/Users/UpdateUser/UpdateUser";
import {CheckoutForm} from "./components/Stripe/Stripe";

import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

import {
  Elements
} from '@stripe/react-stripe-js';

import './_styles/css/global.css'

class App extends React.Component {

  render() {
    return (
        <React.Fragment>
          <Switch>
            <Route
              exact
                path="/"
            >
              <Redirect to="/users" />
            </Route>
            <Route
                exact
                path="/users"
            >
              <UsersList />
            </Route>
            <Route
                path="/users/create"
                component={CreateUser}
            />
            <Route
                path="/users/update/:id"
                component={UpdateUser}
            />
            <Route
                path="/stripe"
            >
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </Route>
          </Switch>

        </React.Fragment>
    );
  }
}

const connectedApp = withRouter(App);
export {connectedApp as App};
