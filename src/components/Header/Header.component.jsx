import { HeaderContainer, OptionLink, OptionsContainer } from "./Header.component.styles";
import './HeaderSt.styles.scss'
import { connect } from 'react-redux'
import React, { Component } from 'react'

class Header extends Component {
  render() {
    const { auth, authError } = this.props;
    return (
      <HeaderContainer>
        <OptionsContainer>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <OptionLink className="navbar-brand" to='/'>Baker</OptionLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <p className="nav-link active" aria-current="page"><OptionLink to='/pedidos'>Pedidos</OptionLink></p>
                  </li>
                  <li className="nav-item">
                    <p className="nav-link active" aria-current="page"><OptionLink to='/inventory'>Add inventory</OptionLink></p>
                  </li>
                  <li className="nav-item">
                    <p className="nav-link active" aria-current="page"><OptionLink to='/products'>Products</OptionLink></p>
                  </li>
                  {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Inventory
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li> <p className="nav-link active" aria-current="page"><OptionLink to='/createRestaurant'>Inventory</OptionLink></p></li>
                      <li> <p className="nav-link active" aria-current="page"><OptionLink to='/'>Dashboard</OptionLink></p></li>
                    </ul>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </OptionsContainer>
      </HeaderContainer>
    );
  }

}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

export default connect(mapStateToProps)(Header);