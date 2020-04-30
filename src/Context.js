import React, { Component } from "react";
import { storeProduits, detailProduit } from "./data";
const ProductContext = React.createContext();
//Provider
//Consumer
class ProduitProvider extends Component {
  state = {
    produits: [],
    detailProduit: detailProduit,
    cart: [],
    modalOpen: false,
    modalProduit: detailProduit,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };
  componentDidMount() {
    this.setProduct();
  }
  setProduct = () => {
    let produits = [];
    storeProduits.forEach((item) => {
      const singleItem = { ...item };
      produits = [...produits, singleItem];
    });
    this.setState(() => {
      return { produits };
    });
  };
  getItem = (id) => {
    const produit = this.state.produits.find((item) => item.id === id);
    return produit;
  };
  handleDetail = (id) => {
    const produit = this.getItem(id);
    this.setState(() => {
      return { detailProduit: produit };
    });
  };
  addToCart = (id) => {
    let tempProduit = [...this.state.produits];
    const index = tempProduit.indexOf(this.getItem(id));
    const produit = tempProduit[index];
    produit.inCart = true;
    produit.count = 1;
    const price = produit.price;
    produit.total = price;
    this.setState(
      () => {
        return { produits: tempProduit, cart: [...this.state.cart, produit] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  openModal = (id) => {
    const produit = this.getItem(id);
    this.setState(() => {
      return { modalProduit: produit, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduit = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduit);
    const produit = tempCart[index];
    produit.count = produit.count + 1;
    produit.total = parseFloat((produit.count * produit.price).toFixed(2));
    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduit = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduit);
    const produit = tempCart[index];
    produit.count = produit.count - 1;
    if (produit.count === 0) {
      this.removeItem(id);
    } else {
      produit.total = parseFloat((produit.count * produit.price).toFixed(2));
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  removeItem = (id) => {
    let tempProduits = [...this.state.produits];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProduits.indexOf(this.getItem(id));
    let removeProduit = tempProduits[index];
    removeProduit.inCart = false;
    removeProduit.count = 0;
    removeProduit.total = 0;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          produit: [...tempProduits],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProduct();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.15;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = parseFloat((subTotal + tax).toFixed(2));
    subTotal = parseFloat(subTotal.toFixed(2));
    this.setState(() => {
      return { cartSubTotal: subTotal, cartTax: tax, cartTotal: total };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProduitConsumer = ProductContext.Consumer;

export { ProduitProvider, ProduitConsumer };
