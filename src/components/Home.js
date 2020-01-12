import React from 'react';
import Feedbackicon from '../feedback.svg';  
import {FeedbackForm} from './Form.js';
import {Link} from 'react-router-dom';

export function Home () {
  return (
      <div className='flex h-screen'>
        <div className='w-2/5 bg-yellow-400 px-20'>
          <div className='pt-10'>
            <div className='m-10 text-xl font-extrabold text-3xl'><Link to='/'>FeedBack.io</Link></div>
            <div className='mt-40 mb-10 ml-10 '>            
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

