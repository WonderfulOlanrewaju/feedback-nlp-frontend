import React from 'react';
import './output.css';
import Feedbackicon from './feedback.svg';  
import {FeedbackForm} from './components/Form.js';

function App() {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='Left-Div'>
          <div className='mx-auto'>
            <div className='Feedback-Logo'>Feedback.io</div>
            <div className='Feedback-Icon'>            
              <img  src={Feedbackicon} alt='Feedback icon' />
            </div>
            <div className='Feedback-Lead'>We would love your feedback.</div>
            <p>It should only take a couple of minute to fill in your feedbacks.</p>
          </div>
        </div>
        <div>
          <FeedbackForm/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
