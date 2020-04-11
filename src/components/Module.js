import React, { Component } from 'react'
import styled from 'styled-components'
import {ProduitConsumer} from '../Context'
import {ButtonContainer} from './Button'
import {Link} from 'react-router-dom'
// import {detailProduits} from '../data'
// import {Modal, Button} from 'semantic-ui-react'

// class ModalExampleShorthand extends Component {
//   render() {
//       return (
//         <Modal
//           trigger={<Button>Show Modal</Button>}
//           header="Reminder!"
//           content="Call Benjamin regarding the reports."
//           actions={["Snooze", { key: "done", content: "Done", positive: true }]}
//         />
//       );
//   }
// }

// export default ModalExampleShorthand;

class Module extends Component {
//   closeModal = () => {
//     if(this.props.children) {
//         this.setState({
//             closeModal: true
//         });
//     else{
//         return {closeModal}
//     }
//     }
//   };
  render() {
    return (
      <ProduitConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduit;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5>produit ajouté à la cart</h5>
                      <img src={img} className="img-fluid" alt="produit" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">prix : Ar {price}</h5>
                      <Link to="/">
                        <ButtonContainer onClick={() => closeModal()}>
                          achat continué
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer cart onClick={() => closeModal()}>
                          a la cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProduitConsumer>
    );
  }
}

export default Module

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--mainWhite);
    }
`;
