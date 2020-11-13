const posts = (state = [], action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return action.value;

    default:
      return state;
  }
};

export default posts;
