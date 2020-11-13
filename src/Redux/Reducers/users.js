const users = (state = [], action) => {
  switch (action.type) {
    case 'GET_USERS':
      return action.value;

    default:
      return state;
  }
};

export default users;
