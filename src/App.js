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
      <div className='flex h-screen'>
        <div className='w-2/5 bg-yellow-400 px-20'>
          <div className='pt-10'>
            <div className='m-10 text-xl font-extrabold text-3xl'>FeedBack.io</div>
            <div className='mt-32 ml-10'>            
              <img width={200} src={Feedbackicon} alt='Feedback icon' />
            </div>
            <div className='mx-10 mb-5 mt-10 text-3xl'>We Would Love Your Feedback.</div>
            <p className='ml-10 text-xs'>It should only take a couple of minute to fill in your feedbacks.</p>
          </div>
        </div>
        <div className='w-3/5 m-auto px-40'>
          <FeedbackForm/>
        </div>
      </div>      
  );
}

export default App;
