import React from 'react';
import './output.css';
import Feedbackicon from './feedback.svg';  
import {FeedbackForm} from './components/Form.js';

// const styles = { 
//   Logo : {
//     top: '29px',
//     left: '49px',
//     width: '226px',
//     height: '53px',
//     textAlign: 'left',
//     font: 'Bold 40px/53px Segoe UI',
//     letterSpacing: '0',
//     color:' #000000',
//     opacity: '1',
//   }
// }

function App() {
  return (
    <div>
      <div className='flex'>
        <div className='w-2/5 bg-yellow-400 py-20 px-20 m-0'>
          <div className='mx-auto'>
            <div className=''>Feedback.io</div>
            <div className='mt-20 mb-10 '>            
              <img width={200} src={Feedbackicon} alt='Feedback icon' />
            </div>
            <div className='mb-5'>We would love your feedback.</div>
            <p className='mb-50'>It should only take a couple of minute to fill in your feedbacks.</p>
          </div>
        </div>
        <div className='w-3/5 p-20 m-auto'>
          <FeedbackForm/>
        </div>
      </div>
    </div>
      
  );
}

export default App;
