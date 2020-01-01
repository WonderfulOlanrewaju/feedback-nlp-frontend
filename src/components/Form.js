import React from 'react';
import { Formik, Form, Field} from 'formik';
import * as Yup from "yup";
import styled from 'styled-components';

const Err = styled.div`
    text-align : left;
    color: palevioletred;
    display:block;
`

const SignupSchema = Yup.object().shape({
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
          validationSchema={SignupSchema}
          onSubmit={values => {
            console.log(values);
          }}
         >
             {
                 ({errors, touched})=> (
                    <Form >
                        <div>
                            <label htmlFor='name'>Name</label>
                            <Field name='name' className= "w-2/5 bg-teal-100 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 inline w-full "  placeholder='Full name'/>
                            {errors.name && touched.name ? (<Err>{errors.name}</Err>) : null}
                            {/* <ErrorMessage component={Err} name='name'/> */}
                        </div>
                       <div className='my-5'>
                        <label htmlFor='location'>Location</label>
                            <Field name='location' placeholder='let us know your location'  className= "w-2/5 bg-teal-100 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 inline w-full " />
                            {errors.location&& touched.location? (<Err>{errors.location}</Err>) : null}
                            {/* <ErrorMessage component={Err} name='location'/> */}
                       </div>
                        <div className='my-5'>
                            <label htmlFor='feedback'>Your Feedback</label>
                            <Field name='feedback' placeholder='We are listening...' className= "w-2/5 bg-teal-100 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 inline w-full "/>
                            {errors.feedback && touched.feedback ? (<Err>{errors.feedback}</Err>) : null}
                            {/* <ErrorMessage  name='feedback'/> */}
                        </div>
                        <div className='my-5 flex justify-end'>
                          <button className='rounded bg-red-300 text-sm p-2 self-end' type='submit'>Submit Feedback</button>
                        </div>      
                    </Form>
                 )
             }
         </Formik>
     </div>
)