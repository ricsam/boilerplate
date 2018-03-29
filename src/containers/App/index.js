import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';


export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={() => 'hello'} />
      </Switch>
    </div>
  );
}
