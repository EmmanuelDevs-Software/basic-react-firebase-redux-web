import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { CardBodyDivContainer, CardDivContainer, MainContainer } from './getProducts.component.styles'
// import { deleteItemFormTheInventory } from '../../../../store/actions/inventory/inventoryActions';


class GetProducts extends Component {

    handleDelete = (id) => {
        //this.props.deleteItemFormTheInventory(id);
    }


    render() {
        const { products, auth, notifications } = this.props;
        // if (!auth.uid) return console.log(auth.uid);
        console.log(products)
        return (
            <MainContainer>
                <div className="grid">
                    <div className="row">
                        
                        {products && products.map((product, index) => {
                            return (
                                <div key={product.id} className="col-lg-4 col-sm-6 col-md-4">
                                    <CardDivContainer key={product.id} className="card">
                                        <img src={product.mainImage} className="card-img-top" alt="..." />
                                        <CardBodyDivContainer key={product.id} className="card-body">
                                            <h5 className="card-title text-center">{product.name}</h5>
                                            <p className="card-text">Category:{product.category}</p>
                                            <p className="card-text">Quantity:{product.quantityInPieces}</p>
                                            <p className="card-text">requestTime:{product.requestTime}</p>
                                            <div className="text-center m-2">
                                                <a href="#" className="btn btn-sm ">Go to detail</a>
                                            </div>
                                        </CardBodyDivContainer>
                                    </CardDivContainer>
                                </div>

                            )
                        })}
                    </div>
                </div>

            </MainContainer>


        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        products: state.firestore.ordered.products,
        auth: state.firebase.auth,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        //  deleteItemFormTheInventory: (id) => dispatch(deleteItemFormTheInventory(id))
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'products', orderBy: ['createdAt', 'desc'] },
    ])
)(GetProducts)
