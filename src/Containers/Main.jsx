import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home';
import PostsList from '../Components/PostsList';
import PostView from '../Components/PostView';
import UsersList from '../Components/UsersList';

function Main() {
  return (
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/posts/:title' component={PostView} />
        <Route path='/posts' component={PostsList} />
        <Route path='/users' component={UsersList} />
      </Switch>
    </Container>
  );
}

export default Main;
