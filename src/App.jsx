import React from 'react';
import {Route, Redirect, Switch, withRouter} from 'react-router-dom';

import {UsersList} from "./components/Users/UsersList/UsersList";
import {CreateUser} from "./components/Users/CreateUser/CreateUser";
import {UpdateUser} from "./components/Users/UpdateUser/UpdateUser";

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
            >
              <CreateUser />
            </Route>
            <Route
                path="/users/update/:id"
                component={UpdateUser}
            />
          </Switch>

        </React.Fragment>
    );
  }
}

const connectedApp = withRouter(App);
export {connectedApp as App};
