import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import './getRestaurantsInventory.component'
import { deleteItemFormTheInventory } from '../../../../store/actions/inventory/inventoryActions';


class getRestaurantsInventory extends Component {

  handleDelete = (id) => {
    this.props.deleteItemFormTheInventory(id);
  }


  render() {
    const { restaurantInventory, auth, notifications } = this.props;
    if (!auth.uid) return console.log(auth.uid);
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity Kg</th>
              <th scope="col">Quantity Liters</th>
              <th scope="col">Provider</th>
              <th scope="col">Category</th>
              <th scope="col">Extra info</th>
              <th scope="col">actions</th>
            </tr>
          </thead>
          <tbody>
            {restaurantInventory && restaurantInventory.map((restaurant, index) => {
              return (
                <tr key={restaurant.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.quantityInKg}</td>
                  <td>{restaurant.quantityInLiters}</td>
                  <td>{restaurant.provider}</td>
                  <td>{restaurant.category}</td>
                  <td>{restaurant.extrainfo}</td>
                  <td><button className='btn btn-danger btn-sm' type='button' onClick={() => this.handleDelete(restaurant.id)}>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    restaurantInventory: state.firestore.ordered.restaurantInventory,
    auth: state.firebase.auth,
    restaurantsRaw: state.firestore.ordered,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    deleteItemFormTheInventory: (id) => dispatch(deleteItemFormTheInventory(id))
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'restaurantInventory', orderBy: ['createdAt', 'desc'] },
  ])
)(getRestaurantsInventory)
