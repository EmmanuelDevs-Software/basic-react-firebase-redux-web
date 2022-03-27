import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import SignUpPage from './pages/auth/SignUp.Page';
import SignInPage from './pages/auth/SignIn.Page';
import CreateRestaurantInventoryPage from './pages/inventory/createRestaurantInventoryPage/createRestaurantInventory.Page';
import PedidosPage from './pages/pedidos/pedidos.Page';
import ProductsPage from './pages/products/Producst.page';
import ProductDetail from './pages/products/productDetail/ProductDetail.component';
import Header from './components/Header/Header.component';
import DashboardPage from './pages/dashboard/Dashboard.Page';
import GetProducts from './pages/products/getProducts/getProducts.component';



class App extends Component {
  render() {
    const { auth, authError } = this.props;
    console.log('auth', auth);
    console.log('auth', authError);


    return (
      <BrowserRouter>
        <div className="App">
          {/* <Navbar /> */}
          <Header />
          <Routes>
            {
              auth.uid ? <Route exact path='/' element={<DashboardPage />} /> : <Route exact path='/' element={<SignInPage />} />
            }
            {/* <Route exact path='/' element={<SignIn/>} /> */}
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/signin' element={<SignInPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/inventory' element={<CreateRestaurantInventoryPage />} />
            <Route path='/pedidos' element={<PedidosPage />} />
            <Route path='/products' element={<ProductsPage />} />
            {/* <Route path='/getProducts' element={<GetProducts />} /> */}
            <Route path='/product/:id' element={<ProductDetail />} />
            {/* 
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            
            <Route path='/create' component={CreateProject} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

export default connect(mapStateToProps, null)(App);
