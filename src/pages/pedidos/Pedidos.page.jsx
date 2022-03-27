import React, { Component } from 'react'
import { MainContainer } from './Pedidos.page.styles';
class PedidosPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <MainContainer className="text-center">
                <h1>Pedidos Page</h1>
            </MainContainer>
        );
    }
}

export default PedidosPage;