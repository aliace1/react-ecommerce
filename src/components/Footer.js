import React, { Component } from 'react'

// import styled from 'styled-components'

class Footer extends Component {
    render() {
        return (
          // <FooterWrapper>
          // <div className="footer">
          //   <p className="text-dark text-capitalize text-center mb-1" id="pfooter">
          //     &copy; {new Date().getFullYear()} Aliace webmaster | Designeur
          //     <span className="ml-5">
          //       <i className="fa fa-facebook" />
          //       <i className="fa fa-google" />
          //       <i className="fa fa-twitter" />
          //     </span>
          //   </p>
          // </div>
          // </FooterWrapper>

          <div
            className="page-footer font-small mdb-color pt-4"
            style={{ background: "green" }}
          >
            <div className="container text-center text-md-left">
              <div className="row">
                <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
                  <h5
                    className="font-weight-bold text-uppercase mb-4"
                    style={{ color: "rgb(80, 233, 80)" }}
                  >
                    a savoir
                  </h5>
                  <p style={{ color: "rgb(80, 233, 80)" }}>
                    Bla bal bal bal bal bal bal bal bal bal
                  </p>
                  <p style={{ color: "rgb(80, 233, 80)" }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit amet numquam iure provident voluptate esse quasi,
                    veritatis totam voluptas nostrum.
                  </p>
                </div>

                <hr className="clearfix w-100 d-md-none" />

                <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
                  <h5
                    className="font-weight-bold text-uppercase mb-4"
                    style={{ color: "rgb(80, 233, 80)" }}
                  >
                    Adresse
                  </h5>

                  <ul
                    className="list-unstyled"
                    style={{ color: "rgb(80, 233, 80)" }}
                  >
                    <li>
                      <p>
                        <i className="fa fa-home mr-3"/> Anjoma, Fianarantsoa
                        301
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fa fa-envelope mr-3"/> info@example.com
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fa fa-phone mr-3"/> + 261 20 75 xxx xx
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fa fa-print mr-3"/> + 261 20 75 xxx xx
                      </p>
                    </li>
                  </ul>
                </div>

                <hr className="clearfix w-100 d-md-none" />

                <div className="col-md-2 col-lg-2 text-center mx-auto my-4 my-md-4 my-0 mb-1">
                  <h5
                    className="font-weight-bold text-uppercase mb-4"
                    style={{ color: "rgb(80, 233, 80)" }}
                  >
                    suivez nous sur
                  </h5>

                  <p
                    type="button"
                    className="btn-floating btn-fb"
                    style={{ color: "rgb(80, 233, 80)" }}
                  >
                    <i className="fa fa-facebook mr-3"/>
                  </p>

                  <p
                    type="button"
                    className="btn-floating btn-tw"
                    style={{ color: "rgb(80, 233, 80)" }}
                  >
                    <i className="fa fa-twitter mr-3"/>
                  </p>

                  <p
                    type="button"
                    className="btn-floating btn-gplus"
                    style={{ color: "rgb(80, 233, 80)" }}
                  >
                    <i className="fa fa-google mr-3"/>
                  </p>

                  <p
                    type="button"
                    className="btn-floating btn-dribbble"
                    style={{ color: "rgb(80, 233, 80)" }}
                  >
                    <i className="fa fa-dribbble mr-3"/>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="footer-copyright text-center py-3"
              style={{ color: "#f3f3f3" }}
            >
              <span style={{ color: "rgb(80, 233, 80)" }}>
                &copy; Aliace WebMaster {new Date().getFullYear()}
              </span>
            </div>
          </div>
        );
    }
}

export default Footer

// const FooterWrapper = styled.div`
//   min-height: 100%;
//   height: auto !important
//   margin: 0 auto -60px;
//   background: var(----hightGreen) !important;
// `;
