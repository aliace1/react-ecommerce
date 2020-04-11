import React, { Component } from 'react'

import {storeProduits, detailProduits} from './data'

const ProduitContext = React.createContext();

class ProduitProvider extends Component {
  state = {
    produits: [],
    detailProduits: detailProduits,
    cart: [],
    modalOpen:false,
    modalProduit:detailProduits,
  };

  componentDidMount() {
    this.setProduits();
  }

  setProduits = () => {
    let tempProduits = [];
    storeProduits.forEach(item => {
      const singleItem = {...item};
      tempProduits = [...tempProduits, singleItem];
    });
    this.setState(() => {
      return { produits: tempProduits }
    });
  }

getItem = (id) => {
  const produit = this.state.produits.find(item => item.id === id);
  return produit;
}

handleDetail = (id) => {
    const produit = this.getItem(id);
    this.setState(() => {
      return {detailProduits:produit}
    })
}

addToCart = (id) => {
    let tempProduits = [...this.state.produits];
    const index = tempProduits.indexOf(this.getItem(id));
    const produit = tempProduits[index];
    produit.inCart = true;
    produit.count = 1;
    const price = produit.price;
    produit.total = price;
    this.setState(() => {
      return {produits: tempProduits, cart: [this.state.cart, produit]};
    },() => {
      console.log(this.state);
    });
};

openModal = id => {
  const produit = this.getItem(id);
  this.setState(() => {
    return { modalProduit: produit, modalOpen: true };
  })
};

closeModal = () => {
  this.setState(() => {
    return {modalOpen:false};
  });
}

  render() {
    return (
      <ProduitContext.Provider value={{
          ...this.state,
        handleDetail:this.handleDetail,
        addToCart:this.addToCart,
        openModal:this.openModal,
        closeModal:this.closeModal,
      }}>
        {this.props.children}
      </ProduitContext.Provider>
    );
  }
}

const ProduitConsumer = ProduitContext.Consumer

export {ProduitProvider, ProduitConsumer};
