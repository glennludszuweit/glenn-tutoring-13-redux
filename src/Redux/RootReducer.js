import { combineReducers } from 'redux';
import posts from './Reducers/posts';
import users from './Reducers/users';

const RootReducer = combineReducers({
  postsReducer: posts,
  usersReducer: users,
});

export default RootReducer;
