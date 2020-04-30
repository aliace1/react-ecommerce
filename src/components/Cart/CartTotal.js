import React from 'react'
import { Link } from 'react-router-dom';

const CartTotal = ({value}) => {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mt-2 ml-ms-5 ml-md-auto col-sm-8 text-capitalize text-right">
              <Link to="/">
                <button
                  className="btn btn-outline-success text-uppercase mb-3 px-5"
                  type="button"
                  onClick={() => clearCart()}
                >
                  tout efface
                </button>
              </Link>
              <h5>
                <span className="text-title">subtotal : </span>
                <b>Ar {cartSubTotal}</b>
              </h5>
              <h5>
                <span className="text-title">tax : </span>
                <b>Ar {cartTax}</b>
              </h5>
              <h5>
                <span className="text-title">total : </span>
                <b>Ar {cartTotal}</b>
              </h5>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}

export default CartTotal
