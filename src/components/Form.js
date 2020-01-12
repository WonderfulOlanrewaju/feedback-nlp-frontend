import React from 'react';
import { Formik, Form, Field} from 'formik';
import * as Yup from "yup";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Err = styled.div`
    text-align : left;
    color: palevioletred;
    display:block;
`
const FeedBackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too short! Name cannot be less than three characters')
      .max(70, 'Too Long! Name cannot be longer than seventy characters')
      .required('Name is a required field'),
    location: Yup.string()
      .min(3, 'Location cannot be less than 3 characters')
      .max(200, 'Location cannot be more than 200 characters')
      .required('Location is a required Field'),
    feedback: Yup.string()
      .min(50, 'Tell us more, we want to hear more from you.')
      .required('We want to hear from you.'),
  });

export  const FeedbackForm = ()=> (
     <div>
         <Formik
         initialValues={{
            name: '',
            location: '',
            feedback: ''
          }}
          validationSchema={FeedBackSchema}
          onSubmit={values => {
            console.log(values);
          }}
         >
             {
                 ({errors, touched})=> (
                    <Form  className='pl-5 w-10/12'>
                        <div className='md:flex md-items-center mb-6 min-w-0'>
                          <div className='md:w-1/3'>
                            <label htmlFor='name' className='block pt-2  mb-1 md:mb-0 pr-4'>Name</label>
                          </div>
                          <div className='md:w-2/3'>
                            <Field name='name' className= "placeholder-red-300 inline-block  bg-teal-100 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 inline w-full "  placeholder='Full name'/>
                            {errors.name && touched.name ? (<Err>{errors.name}</Err>) : null}
                          </div>
                        </div>
                       <div className='my-5 md:flex md-items-center mb-6'>
                         <div className='md:w-1/3'>
                          <label htmlFor='location' className='block pt-2  mb-1 md:mb-0 pr-4'>Location</label>
                         </div>
                         <div className='md:w-2/3'>
                          <Field name='location' as='select' placeholder='let us know your location'  className= "text-red-300 placeholder-red-300 w-2/5 bg-teal-100 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 inline w-full " >
                            <option className='text-red-300' >Please Select your location</option>
                            <option className='text-red-300' value="North Region">North Region</option>
                            <option className='text-red-300'  value="East Region">East Region</option>
                            <option className='text-red-300' value="West Region">West Region</option>
                          </Field>
                          
                          {errors.location&& touched.location? (<Err>{errors.location}</Err>) : null}
                         </div>
                            
                       </div>
                        <div className='my-5 md:flex md-items-center mb-6'>
                          <div className='md:w-1/3'>
                            <label htmlFor='feedback' className='block pt-2  mb-1 md:mb-0 pr-4'>Your Feedback</label>
                          </div>
                          <div className='md:w-2/3'>
                            <Field name='feedback' as='textarea' placeholder='We are listening...' className= "h-40 w-2/5 placeholder-red-300 bg-teal-100 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 inline w-full "/>
                            {errors.feedback && touched.feedback ? (<Err>{errors.feedback}</Err>) : null}
                          </div>
                        </div>
                        <div className='my-5 flex justify-end'>
                            <button className='rounded block bg-red-400 shadow-lg hover:bg-red-500 focus:outline-none text-sm text-white p-2 self-end' type='submit'>Submit Feedback</button>
                        </div>  
                        <div className='flex justify-end text-sm'>
                          Are you a business owner? 
                          <Link className='ml-4 text-red-400' to='/auth'> Sign In.</Link> 
                        </div>

    
                    </Form>
                 )
             }
         </Formik>
     </div>
)