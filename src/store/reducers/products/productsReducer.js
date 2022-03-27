const initState = {}

const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PRODUCTS_SUCCESS':
      console.log('create product success');
      return state;
    case 'CREATE_PRODUCTS_ERROR':
      console.log('create product error');
      return state;
    case 'DELETE_PRODUCTS_SUCCESS':
      console.log('delete productItem success');
      return state;
    case 'DELETE_PRODUCTS_ERROR':
      console.log('delete productItem error');
      return state;
    default:
      return state;
  }
};




export default productsReducer;