import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

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
                        <Field name='name'/>
                            {errors.name && touched.name ? (<div>{errors.name}</div>) : null}
                            <ErrorMessage name='name'/>
                        <Field name='location'/>
                            {errors.location&& touched.location? (<div>{errors.location}</div>) : null}
                            <ErrorMessage name='location'/>
                        <Field name='feedback'/>
                            {errors.feedback && touched.feedback ? (<div>{errors.feedback}</div>) : null}
                            <ErrorMessage name='feedback'/>
                        <button type='submit'>Submit Feedback</button>
                    </Form>
                 )
             }
         </Formik>
     </div>
)