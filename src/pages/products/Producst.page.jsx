import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createProductInventory } from '../../store/actions/products/productActions';
import { InputContainer, InputFile, MainContainer, PContainer, TextContainer } from './Producst.styles';
import GetProducts from './getProducts/getProducts.component'
import { BoxSContainer } from '../inventory/createRestaurantInventoryPage/createRestaurantInventory.page.styles';

class ProductsPage extends Component {

    constructor(props) {
        super(props);
    }



    state = {
        name: '',
        quantityInPieces: '',
        flavors: '',
        houseRecomendations: '',
        requestTime: '',
        mainImage: '',
        //  galeryImages: [],
        category: '',
    }

    handleChange = (e) => {
        if (e.target.type === 'file') {
            var file = e.target.files[0];
            var reader = new FileReader();
            let result;
            reader.onload = function (e) {
                result = e.target.result
                this.setState({
                    mainImage: e.target.result
                })
            }.bind(this);
            reader.readAsDataURL(file);
        }

        this.setState({
            [e.target.id]: e.target.value
        })
    }

    onChange(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        let result;
        reader.onload = function (event) {
            // The file's text will be printed here
            result = event.target.result

        };
        reader.readAsDataURL(file);
    }



    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProductInventory(this.state);
    }

    render() {
        return (

            <MainContainer>
                <BoxSContainer>
                    <form className="white text-center" onSubmit={this.handleSubmit}>
                        <h1 className="grey-text text-darken-3 mb-3">Create a Product</h1>
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
                                        <PContainer htmlFor="quantityInPieces">Quantity In Pieces</PContainer>
                                        <InputContainer type="number" id='quantityInPieces' onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-4">
                                    <div className="input-field">
                                        <PContainer htmlFor="requestTime">Request Time in Days</PContainer>
                                        <InputContainer type="text" id='requestTime' onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-4">
                                    <div className="input-field">
                                        <PContainer htmlFor="houseRecomendations">House recomendations</PContainer>
                                        <TextContainer id="houseRecomendations" className="materialize-textarea" onChange={this.handleChange}></TextContainer>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-4">
                                    <div className="input-field text-center">
                                        <PContainer htmlFor="mainImage">Image</PContainer>
                                        <InputFile className="form-control" type="file" id='mainImage' onChange={this.handleChange} />
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="input-field">
                                        <button className="btn btn-dark">Add Product</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>
                </BoxSContainer>
                <br />
                <br />
                <br />
                <BoxSContainer>
                    <GetProducts />
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
        createProductInventory: (restaurant) => dispatch(createProductInventory(restaurant))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage)
