import React, { Component } from 'react'
import {ProduitConsumer} from '../Context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

class Details extends Component {
    render() {
        return (
          <ProduitConsumer>
            {value => {
              const {
                id,
                company,
                img,
                info,
                price,
                title,
                inCart,
                old
              } = value.detailProduit;
               return (
                 <div className="container py-2">
                   {/* titre */}
                   <div className="row">
                     <div className="col-10 mx-auto text-center text-slanted text-success my-5">
                       <h1>
                         <b>{title}</b>
                       </h1>
                     </div>
                   </div>
                   {/* fin titre */}
                   {/* produit img */}
                   <div className="row">
                     <div className="col-10 mx-auto col-md-6 my-3">
                       <img src={img} className="img-fluid" alt="produits" />
                     </div>
                     {/* produit info */}
                     <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                       <h2>model: {title}</h2>
                       <h4 className="text-title text-capitalize text-muted mt-3 mb-2">
                         fabriqué par :{" "}
                         <span className="text-capitalize">{company}</span>
                       </h4>
                       <h4 className="text-title text-capitalize text-muted mt-3 mb-2">
                         de l'année <span>{old}</span>
                       </h4>
                       <h4 className="text-success">
                         <strong>
                           Prix : <span>Ar</span>
                           {price}
                         </strong>
                       </h4>
                       <p className="text-capitalize font-weight-bold mt-3 mb-0">
                         Apropos du produit :
                       </p>
                       <p className="text-muted lead">{info}</p>
                       <Link to="/">
                         <ButtonContainer>Retour au produit</ButtonContainer>
                       </Link>
                       <ButtonContainer
                         cart
                         disabled={inCart ? true : false}
                         onClick={() => {
                           value.addToCart(id);
                           value.openModal(id);
                         }}
                       >
                         {inCart ? "inCart" : "Ajouté au Cart"}
                       </ButtonContainer>
                     </div>
                   </div>
                 </div>
               );
            }}
          </ProduitConsumer>
        );
    }
}

export default Details
