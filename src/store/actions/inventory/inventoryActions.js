export const createRestaurantInventory = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const adminId = getState().firebase.auth.uid;
    firestore.collection('restaurantInventory').add({
      ...project,
      adminId: adminId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_INVENTORY_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_INVENTORY_ERROR' }, err);
    });
  }
};

export const deleteItemFormTheInventory = (itemId) => {
  return (dispatch, getState, { getFirestore }) => {
      const firestore = getFirestore();
      firestore.collection('restaurantInventory').doc(itemId).delete().then(() => {
      dispatch({ type: 'DELETE_INVENTORY_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'DELETE_INVENTORY_ERROR' }, err);
    });
  }
}

export default {createRestaurantInventory, deleteItemFormTheInventory};
