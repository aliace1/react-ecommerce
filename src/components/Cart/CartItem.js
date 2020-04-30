import React from 'react'
// import {ProduitConsumer} from '../../Context'

const CartItem = ({ item, value }) => {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    //   <ProduitConsumer>
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          alt="produit"
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">produit : </span>
        <b>{title}</b>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">prix : </span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fa fa-trash" />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>achat total : Ar {total}</strong>
      </div>
    </div>
    //   </ProduitConsumer>
  );
};

export default CartItem
