import React from 'react';
import {MDBBox} from 'mdbreact';
import Box from './components/Box';

function App() {
  return (
    <React.Fragment>
      <MDBBox display='flex' alignSelf='center' color='pink'>
        MDB React Added to the project
      </MDBBox>
      <MDBBox display="flex" justifyContent="end" color='red'>
        d-flex justify-content-end
      </MDBBox>
      <Box/>
    </React.Fragment>
  );
}

export default App;
