import React from "react";
import { MDBBox } from 'mdbreact';

const BoxPage = () => {
  return (
    <React.Fragment>
      <MDBBox color="red">
        red color
      </MDBBox>
      <MDBBox color="pink">
        pink color
      </MDBBox>
      <MDBBox color="blue">
        blue color
      </MDBBox>
      <MDBBox color="cyan">
        cyan color
      </MDBBox>
    </React.Fragment>
  );
};

export default BoxPage;