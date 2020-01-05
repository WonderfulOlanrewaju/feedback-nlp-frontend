import React from 'react';
import Welcome from '../auth-welcome.svg';
import {Field, Form, Formik} from 'formik';
import * as Yup from "yup";
import styled from 'styled-components';

const Err = styled.div`
    text-align : left;
    color: palevioletred;
    display:block;
`
const AuthSchema = Yup.object().shape({
    username: Yup.string()
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


export const Auth = ()=> (
    <div>
        <div className='Welcome-Div w-1/2'>
            <div>FeedBack.io</div>
            <img src ={Welcome} alt='Welcome icon...'/>
            <div>Welcome Back!</div>
           <div>There are feedbacks waiting for you</div>
        </div>
        <div className='Auth-Div w-1/2'>
            <Formik
            initialValues={{
                name: '',
                email: '',
                password: ''
              }}
              validationSchema={AuthSchema}
              onSubmit={values => {
                console.log(values);
              }}
            >

            </Formik>
        </div>
    </div>
)