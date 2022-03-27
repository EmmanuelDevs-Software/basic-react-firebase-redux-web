const initState = {}

const restaurantInventoryReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_INVENTORY_SUCCESS':
      console.log('create inventory success');
      return state;
    case 'CREATE_INVENTORY_ERROR':
      console.log('create inventory error');
      return state;
    case 'DELETE_INVENTORY_SUCCESS':
      console.log('delete inventoryItem success');
      return state;
    case 'DELETE_INVENTORY_ERROR':
      console.log('delete inventoryItem error');
      return state;
    default:
      return state;
  }
};




export default restaurantInventoryReducer;