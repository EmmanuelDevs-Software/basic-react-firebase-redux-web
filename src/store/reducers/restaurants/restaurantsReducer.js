const initState = {}

const restaurantsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_RESTAURANT_SUCCESS':
      console.log('create project success');
      return state;
    case 'CREATE_RESTAURANT_ERROR':
      console.log('create project error');
      return state;
    default:
      return state;
  }
};

export default restaurantsReducer;