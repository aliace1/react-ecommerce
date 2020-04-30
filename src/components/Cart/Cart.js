import React, { Component } from 'react'
import Titre from '../Titre'
import CartColonne from './CartColonne'
import CartVide from './CartVide'
import {ProduitConsumer} from '../../Context'
import CartList from './CartList'
import CartTotal from './CartTotal'

class Cart extends Component {
    render() {
        return (
            <section>
                <ProduitConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length>0) {
                            return (
                              <React.Fragment>
                                <Titre name="votre" title="achat" />
                                <CartColonne />
                                <CartList value={value} />
                                <CartTotal value={value} />
                              </React.Fragment>
                            );
                        }
                        else {
                            return (
                                <CartVide />
                            )
                        }
                    }}
                </ProduitConsumer>
            </section>
        )
    }
}

export default Cart
