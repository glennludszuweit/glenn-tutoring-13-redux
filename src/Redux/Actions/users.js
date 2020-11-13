import axios from 'axios';

export const getUsers = () => async (dispatch) => {
  try {
    //fetch
    //get
    // const response = await fetch(url);
    // const data = await response.json();
    //post
    // const response = await fetch({
    //   method: 'POST',
    //   url: url
    // })
    // const data = JSON.stringify(response)

    //axios
    //post
    // const {data} = await axios.post(url)
    //get
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    dispatch({ type: 'GET_USERS', value: data });
  } catch (error) {
    console.log(error.message);
  }
};
