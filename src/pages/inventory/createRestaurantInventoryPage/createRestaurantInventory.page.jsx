import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createRestaurantInventory } from '../../../store/actions/inventory/inventoryActions'
import GetRestaurantsInventory from '../components/getRestaurantsInventory/getRestaurantsInventory.component'
import { BoxSContainer, ButtonContainer, HrLineContainer, InputContainer, MainContainer, PContainer, TextContainer } from './createRestaurantInventory.page.styles'
class CreateRestaurantInventoryPage extends Component {

    state = {
        name: '',
        quantityInKg: '',
        quantityInLiters: '',
        provider: '',
        category: '',
        extrainfo: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.createRestaurantInventory(this.state);
    }

    render() {
        return (
            <MainContainer>
                <BoxSContainer>
                    <form className="white text-center" onSubmit={this.handleSubmit}>
                        <h5 className="grey-text text-darken-3">Add item to the inventory</h5>
                        <div className="grid">
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-4">
                                    <div className="input-field">
                                        <PContainer floating>Name</PContainer>
                                        <InputContainer type="text" id='name' onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-4">
                                    <div className="input-field">
                                        <PContainer htmlFor="category">Category</PContainer>
                                        <InputContainer type="text" id='category' onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-4">
                                    <div className="input-field">
                                        <PContainer htmlFor="provider">Provider</PContainer>
                                        <InputContainer type="text" id='provider' onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-4">
                                    <div className="input-field">
                                        <PContainer htmlFor="quantityInKg">Quantity In Kg</PContainer>
                                        <InputContainer type="number" id='quantityInKg' onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-4">
                                    <div className="input-field">
                                        <PContainer htmlFor="quantityInLiters">Quantity In Liters</PContainer>
                                        <InputContainer type="number" id='quantityInLiters' onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-4">
                                    <div className="input-field">
                                        <PContainer htmlFor="extrainfo">Extra Info</PContainer>
                                        <TextContainer id="extrainfo" className="materialize-textarea" onChange={this.handleChange}></TextContainer>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="input-field">
                                        <ButtonContainer className="btn">Add to inventory</ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </BoxSContainer>

                <HrLineContainer />
                <BoxSContainer>
                    <GetRestaurantsInventory />
                </BoxSContainer>

            </MainContainer>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createRestaurantInventory: (restaurant) => dispatch(createRestaurantInventory(restaurant))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRestaurantInventoryPage)
