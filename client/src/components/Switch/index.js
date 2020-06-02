import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Merch } from './../../pages';

export default function Switcher() {
  return (
    <Switch>
      <Route path="/">
        <Home></Home>
      </Route>
      <Route path="/merch">
        <Merch></Merch>
      </Route>
    </Switch>
  );
}
