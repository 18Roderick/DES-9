import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Merch , Admin} from './../../pages';

export default function Switcher() {
  return (
    <Switch>
      <Route path="/">
        <Home></Home>
      </Route>
      <Route path="/merch">
        <Merch></Merch>
      </Route>
      <Route exact path='/admin' component={Admin}/>
      <Route component={() => <h1>Page Not found</h1>}></Route>
    </Switch>
  );
}
