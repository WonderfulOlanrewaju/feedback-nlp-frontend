import React from 'react';
import { Formik, Form, Field} from 'formik';
import * as Yup from "yup";
import styled from 'styled-components';

const Err = styled.div`
    text-align : center;
    color: palevioletred;
`

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too short! Name cannot be less than three characters')
      .max(70, 'Too Long! Name cannot be longer than seventy characters')
      .required('Name is a required field'),
    location: Yup.string()
      .min(3, 'Location cannot be less than 3 characters')
      .max(200, 'Location cannot be more than 200 characters')
      .required('Location is a Required Field'),
    feedback: Yup.string()
      .min(50, 'Tell us more, we want to hear more from you.')
      .required('Required'),
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
                    <Form>
                        <div>
                            <label htmlFor='name'>Name</label>
                            <Field name='name' placeholder='your name here...'/>
                            {errors.name && touched.name ? (<Err>{errors.name}</Err>) : null}
                            {/* <ErrorMessage component={Err} name='name'/> */}
                        </div>
                       <div>
                        <label htmlFor='location'>Location</label>
                            <Field name='location' placeholder='let us know your location' />
                            {errors.location&& touched.location? (<Err>{errors.location}</Err>) : null}
                            {/* <ErrorMessage component={Err} name='location'/> */}
                       </div>
                        <div>
                            <label htmlFor='feedback'>Your Feedback</label>
                            <Field name='feedback' placeholder='We are listening...'/>
                            {errors.feedback && touched.feedback ? (<Err>{errors.feedback}</Err>) : null}
                            {/* <ErrorMessage  name='feedback'/> */}
                        </div>      
                        <button className='btn bg-orange-600' type='submit'>Submit Feedback</button>
                    </Form>
                 )
             }
         </Formik>
     </div>
)