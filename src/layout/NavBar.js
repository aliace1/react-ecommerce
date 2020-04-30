import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import lzb from '../lzb.svg'
import { ButtonContainer } from '../components/Button';

  /*
  author: Aliace WebMaster
*/


class NavBar extends Component {

  // constructor (props) {
  //   super(props);
  // }

  // handleInput = (e) => {
  //   console.log(e.target.value);
  //   this.state({searchProduit: e.target.value})
  // }
    render() {
        return (
          <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to="/">
              <img
                src={"assets/img/lzb.png"}
                alt="store"
                className="navbar-brand"
              />
            </Link>
            <ul className="navbar-nav align-items-center">
              <li className="nav-link ml-5">
                <h2>
                  <Link to="/" className="nav-link">
                    <b className="fa fa-glass"> Produits</b>
                  </Link>
                </h2>
              </li>
            </ul>
            {/* <form handleInput={this.handleInput} className="form-inline">
              <input
                type="search"
                className="form-control mr-5"
                placeholder="Recherche"
                handleChange={this.handleInput}
              />
            </form> */}
            <Link to="/cart" className="ml-auto">
              <ButtonContainer>
                <span className="mr-2">
                  <i className="fa fa-cart-plus"> Mon Cart</i>
                </span>
              </ButtonContainer>
            </Link>
          </NavWrapper>
        );
    }
}

export default NavBar

const NavWrapper = styled.nav`
    background: var(--mainGreen);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.5rem;
        text-transform: capitalize;
    }
`;
