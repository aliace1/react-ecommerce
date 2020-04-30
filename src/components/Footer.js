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

          <div className="page-footer font-small mdb-color bg-success pt-4">
            <div className="container text-center text-md-left">
              <div className="row">
                <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
                  <h5
                    className="font-weight-bold text-uppercase mb-4 text-white "
                    style={{ color: "#f3f3f3" }}
                  >
                    a savoir
                  </h5>
                  <p className="text-white">
                    Bla bal bal bal bal bal bal bal bal bal
                  </p>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit amet numquam iure provident voluptate esse quasi,
                    veritatis totam voluptas nostrum.
                  </p>
                </div>

                <hr className="clearfix w-100 d-md-none" />

                <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
                  <h5
                    className="font-weight-bold text-uppercase mb-4 text-white"
                    style={{ color: "#f3f3f3" }}
                  >
                    Adresse
                  </h5>

                  <ul className="list-unstyled text-white">
                    <li>
                      <p>
                        <i className="fa fa-home mr-3"></i> Anjoma, Fianarantsoa
                        301
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fa fa-envelope mr-3"></i> info@example.com
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fa fa-phone mr-3"></i> + 261 20 75 xxx xx
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fa fa-print mr-3"></i> + 261 20 75 xxx xx
                      </p>
                    </li>
                  </ul>
                </div>

                <hr className="clearfix w-100 d-md-none" />

                <div className="col-md-2 col-lg-2 text-center mx-auto my-4 my-md-4 my-0 mb-1">
                  <h5
                    className="font-weight-bold text-uppercase mb-4 text-white"
                    style={{ color: "#f3f3f3" }}
                  >
                    suivez nous sur
                  </h5>

                  <p type="button" className="btn-floating btn-fb text-white">
                    <i className="fa fa-facebook mr-3"></i>
                  </p>

                  <p type="button" className="btn-floating btn-tw text-white">
                    <i className="fa fa-twitter mr-3"></i>
                  </p>

                  <p
                    type="button"
                    className="btn-floating btn-gplus text-white"
                  >
                    <i className="fa fa-google mr-3"></i>
                  </p>

                  <p
                    type="button"
                    className="btn-floating btn-dribbble text-white"
                  >
                    <i className="fa fa-dribbble mr-3"></i>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="footer-copyright text-center py-3"
              style={{ color: "#f3f3f3" }}
            >
              © 2020 Copyright : Aliace WebMaster
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
