export const createProductInventory = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const adminId = getState().firebase.auth.uid;
    firestore.collection('products').add({
      ...project,
      adminId: adminId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PRODUCTS_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_PRODUCTS_ERROR' }, err);
    });
  }
};

export const deleteProduct = (itemId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('products').doc(itemId).delete().then(() => {
      dispatch({ type: 'DELETE_PRODUCTS_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'DELETE_PRODUCTS_ERROR' }, err);
    });
  }
}

export default { createProductInventory, deleteProduct };
