import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'containers/home';
import About from 'containers/about';
import Admin from 'containers/admin';
import Contact from 'containers/contact';
import Login from 'containers/login';
import Registration from 'containers/register';
import Privacy from 'containers/privacy';
import NotFound from 'containers/not-found';

const Routes = () =>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/admin" component={Admin} />
    <Route path="/contact" component={Contact} />
    <Route path="/login" component={Login} />
    <Route path="/privacy" component={Privacy} />
    <Route path="/register" component={Registration} />
    <Route path="*" component={NotFound} />
  </Switch>;

export default Routes;
