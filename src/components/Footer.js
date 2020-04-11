import React, { Component } from 'react'
// import styled from 'styled-components'

class Footer extends Component {
    render() {
        return (
          // <FooterWrapper>
          <div className="footer">
            <p className="text-dark text-capitalize text-center mb-1" id="pfooter">
              &copy; {new Date().getFullYear()} Aliace webmaster | Designeur
              <span className="ml-5">
                <i className="fa fa-facebook" />
                <i className="fa fa-google" />
                <i className="fa fa-twitter" />
              </span>
            </p>
          </div>
          // </FooterWrapper>
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
