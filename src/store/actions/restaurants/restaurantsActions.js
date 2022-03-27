export const createRestaurant = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const adminId = getState().firebase.auth.uid;
    firestore.collection('restaurants').add({
      ...project,
      adminId: adminId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_RESTAURANT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_RESTAURANT_ERROR' }, err);
    });
  }
};