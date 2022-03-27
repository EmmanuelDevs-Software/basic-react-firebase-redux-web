import authReducer from './auth/authReducer'
import restaurantsReducer from './restaurants/restaurantsReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'
import restaurantInventoryReducer from './inventory/inventoryReducer';
import productsReducer from './products/productsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  restaurants: restaurantsReducer,
  restaurantInventory: restaurantInventoryReducer,
  products: productsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer

// the key name will be the data property on the state object