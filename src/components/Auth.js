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
      .min(2, 'Too short! Username cannot be less than 3 characters')
      .max(20, 'Too Long! username cannot be longer than 20 characters')
      .required('Username is a required field'),
    email: Yup.string().email()
      .required('Email is a required Field'),
    password: Yup.string()
      .min(8, 'Your password cannot be less than 8 characters')
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
                username: '',
                email: '',
                password: ''
              }}
              validationSchema={AuthSchema}
              onSubmit={values => {
                console.log(values);
              }}
            >
              {
                ({errors, touched})=> (
                  <Form className='w-10/12'>
                    <div>
                      <label htmlFor='email'>Email</label>
                      <Field name='username'></Field>
                      {errors.username && touched.username ? <Err>{errors.username}</Err> : null}
                    </div>
                    <div>
                      <label htmlFor='password'>Password</label>
                      <Field name='password'></Field>
                      {errors.password && touched.password ? <Err>{errors.password}</Err> : null}
                    </div>

                  </Form>
                )
              }
            </Formik>
        </div>
    </div>
)