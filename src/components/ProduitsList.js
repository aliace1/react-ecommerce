import React, { Component } from 'react'
import Produits from './Produits'
import Titre from './Titre'
import { ProduitConsumer } from '../Context';

class ProduitsList extends Component {
    state ={
      produits: []
    }
    render() {
        // console.log(this.state.produits);
        return (
          <React.Fragment>
            <div className="container-fluid">
              <div className="container">
                <Titre name="Notre" title="produits" />
              </div>
              <div className="container">
                <div className="row">
                  <ProduitConsumer>
                    {value => {
                      return value.produits.map(produit => {
                        return <Produits key={produit.id} produit={produit} />;
                      });
                    }}
                  </ProduitConsumer>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
    }
}

export default ProduitsList
