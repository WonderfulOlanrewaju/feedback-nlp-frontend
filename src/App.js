import React from 'react';
import {MDBBox} from 'mdbreact';

function App() {
  return (
    <React.Fragment>
      <MDBBox display='flex' alignSelf='center'>
        MDB React Added to the project
      </MDBBox>
      <MDBBox display="flex" justifyContent="end">
        d-flex justify-content-end
      </MDBBox>
    </React.Fragment>
  );
}

export default App;
