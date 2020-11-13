import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Containers/Header';
import Main from './Containers/Main';
import { getPosts } from './Redux/Actions/posts';
import { getUsers } from './Redux/Actions/users';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
  );
}
//https://jsonplaceholder.typicode.com/
export default App;
